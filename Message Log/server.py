from http.server import BaseHTTPRequestHandler, HTTPServer
import json
from urllib.parse import parse_qs

MESSAGES = [ "To the mind that is still, the whole universe surrenders - Lao Tzu ",
"And those who were seen dancing were thought to be insane by those who could not hear the music. - Friedrich Nietzsche",
"It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinions than our own. - Marcus Aurelius"
]

class MyRequestHandler( BaseHTTPRequestHandler ):

    def do_GET( self ):
        print( "Get request received! path is " + self.path )
        if self.path == "/messages":
            self.send_response( 200 )
            self.send_header( "Access-Control-Allow-Origin", "*" )
            self.send_header( "Context-Type", "application/json" )
            self.end_headers()
            self.wfile.write( bytes( json.dumps( MESSAGES ), "utf-8" ) )
        else:
            self.send_response( 404 )
            self.send_header( "Access-Control-Allow-Origin", "*" )
            error = "Not Found"
            self.end_headers()
            self.wfile.write( bytes( json.dumps( error ), "utf-8" ) )

    def do_POST( self ):
        if self.path == "/messages":
            length = self.headers[ "Content-Length" ]
            body = self.rfile.read( int( length ) ).decode( "utf-8" )
            print( "The RAW body: ", body )
            parsed_body = parse_qs( body )
            print( "The PARSED body: ", parsed_body )
            name = parsed_body[ "name" ][ 0 ]
            MESSAGES.append( name )
            self.send_response( 201 )
            self.send_header( "Access-Control-Allow-Origin", "*" )
            self.end_headers()
        else:
            self.send_response( 404 )
            self.send_header("Access-Control-Allow-Origin", "*" )
            error = "Not Found"
            self.end_headers()
            self.wfile.write( bytes( json.dumps( error ), "utf-8" ) )


def run():
    listen = ( "127.0.0.1", 8080 )
    server = HTTPServer( listen, MyRequestHandler )
    print( "Listening..." )
    server.serve_forever()

run()
