# owser send http login request to the backend
backend check the credintial from database 
database return the result 
if true the backend send http response
------------------------------------------

# http://example.com
URL contact DNS server to get IP address
 it use port 443 to offer secure connection
 browser create TCP Connection with the server using three-way handshake
 We use TLS to create encrypted chanel & check the web server certificate
 then the browser send (HTTP REquest)
 The web server receive and proccess and send (HTTP Response)
 Filnally the browser receive the respose and convert it to visible webpage
------------------------------------------

# Network Assete Application:

## Frontend Responsibility


## Backend Responsibility

## Database Data
------------------------------------------

# full web request jorny
user action: right domain name and press Enter
URL: Specifies the method of accessing the site
DNS: convert domain name to IP address
IP & Port: IP to access the server & Port identifies the service we want to connect to
Conection: TCP provide connection using three-way hadnsshake
HTTPS/TLS: Encript data during transmission & verifies the sit'e identity
HTTP Request: to obtian specific resource from the Web server
Server processing: Receive & process the rquest 
Browser rendering: Analyze and build the page that appear infront of you
HTTP Response: The web server send response to the Browser
Additional resourcses: the browser may send other request to get additional resources like script.js & style.css
