# Angular todo-app

## Quick Start

```bash
# Clone de repo and navigate to express-api
cd express-api

# Build backend application and DB
docker-compose up

# In another terminal, navigate to angular-front
cd angular-front

# Build and run frontend app
docker build -t angular:v1 .
docker run -v ${PWD}:/app -v /app/node_modules -p 4200:4200 --rm angular:v1

Open backend app in localhost:3000
Open frontend app in localhost:4200
```

#Sources
Frontend: https://github.com/brampeirs/todo-app-angular-7
Backend: https://github.com/bradtraversy/docker-node-mongo

#WIP
Build both apps with a single docker-compose file
