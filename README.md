# Techology Choices
### Backend - Java with Spring Boot
### Frontend - ReactJS

## TO-DO (If given more time)
* Add unit and integration tests for Spring Boot and React
* Improve responsibility
* Add other crud functionallities


# Getting Started
(from root folder)
## Backend
* cd Backend
* gradlew bootRun
* to add messages throgh API: 
  `curl -X POST \
  http://localhost:8080/api/message/ \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{
	"user": "joffrey",
	"text": "Briliant",
	"date": "10 Mar 2018 14:02"
}'`

## Frontend
* cd Frontend/chat-app
* yarn install
* yarn start
