# netwotk investigation
## DNS test
### github.com
Result:
Server:  UnKnown
Address:  192.168.100.1
Non-authoritative answer:
Name:    github.com
Address:  20.233.83.145
-------------------------------
### openai.com
Address:  192.168.100.1
Non-authoritative answer:
Name:    openai.com
Addresses:  172.64.154.211
          104.18.33.45
-------------------------------
### opening example.com
Non-authoritative answer:
Name:    example.com
Addresses:  2606:4700:10::ac42:93f3
          2606:4700:10::6814:179a
          104.20.23.154
          172.66.147.243
-------------------------------

## File VS Local Server"
### Opening the file directly 
address: (file:///) or (file:///C:/Users/win10/Documents/amjad-web-learning/foundation-challenge/index.html)
### open through Live preview
address: (https://127.0.0.1:30)
-------------------------------

### HTTP Request Ivestigation
Website: https://example.com
Request URL: https://example.com/
Request Method: GET
Status Code: 200
Remote address: [2606:4700:10::6814:179a]:443
Content type: HTML
-------------------------------

## Github API Test
### Existing User:
URL:    https://api.github.com/users/amged
Methods: GET
Status Code: 304 
Reponse format: "login": (Json Format)
### Non-Existing User:
URL:    
Methods: GET
Status Code: 404
Reponse format: Json
-------------------------------

# Web Request Investigator
# Website
## main document request
Request URL: https://github.githubassets.com/assets/38963.8366dd63fb8d07c1.module.css
Request method: GET
Status code: 200
Remote address: [2606:50c0:8001::215]:443   
Protocol: HTTPS
Content type: text/css
Response size: 1.1 KB
Time: 576 ms
# Additional resourcs

## CSS Request
Name: https://github.githubassets.com/assets/19248.c2a7d91b3972c51d.module.css
Status: 200
Type: stylesheet

## JavaScript Request
Name: https://github.githubassets.com/assets/74542-c5ccce6a426793d6.js
Status: 200
Type: script

## Image or font Request
Name: https://avatars.githubusercontent.com/u/4928832?s=40&v=4
Status: 200
Type: Document
-------------------------------

# API Investigation
- End point: /users/amgedmusa-maker
- Method: GET
- Status code: 304
- Response fromat: HTML
- Three field returned:
             - 1 "login": "amgedmusa-maker"
             - 2 "id": 295399287
             - 3 "avatar_url": "https://avatars.githubusercontent.com/u/295399287?v=4"
- Is this HTML or Json: This is (HTML)
- Is authentication required for this public request: No