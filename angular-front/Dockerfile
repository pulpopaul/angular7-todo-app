FROM node:10.16.3-alpine

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

COPY package*.json /app/

# Install dependecies
RUN npm install
RUN npm install -g @angular/cli@8.3.26

# Get all the code needed to run the app
COPY . /app/

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ng serve --host 0.0.0.0
