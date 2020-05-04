# Angular todo-app

## Quick Start

```bash
# Clone de repo and navigate to express-api
cd express-api

# Build backend application and DB
docker-compose up

#Check MongoDb Container
Browse to http://localhost:27017

# Try the api - insert a note
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"author":"Me Myself","title":"end todo app", "status": "todo"}' \
  http://localhost:3000/notes

# Check the api - read the note
Browse to http://localhost:3000/notes

# In another terminal, navigate to angular-front
cd angular-front

# Build and run frontend app
docker build -t angular:v1 .
docker run -v ${PWD}:/app -v /app/node_modules -p 4200:4200 --rm angular:v1

# Check the frontend app
Browse to http://localhost:4200

```

#Sources
Frontend: 
https://github.com/brampeirs/todo-app-angular-7

Backend: 
https://github.com/bradtraversy/docker-node-mongo
https://angular.io/tutorial

#WIP
Build both apps with a single docker-compose file