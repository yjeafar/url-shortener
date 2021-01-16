# Url Shortener

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Description

This application works like Bitly. The user navigates to the url, inputs a url and the server gives the user back a short url. Say for instance there is a super long link on Amazon that spans multiple lines. The user could just copy that link and paste it in this application, and it will give them a link with the baseurl, as well as a unique 8 character id. When the user navigates to that link with the 8 character id, they are taken to their original link. See below for getting started.

Setting up

Before starting, you need to make sure you have the following installed on the machine you would like to run this project from: Npm, NodeJs, and VueJS.  

The first thing you need to do to run this project is clone the repository to your local computer (via Git or through Github UI). This will allow for you to be able to run the code and use your local machine as a server for both the front and back end. 

After pulling the code, navigate to the client folder via the terminal and run npm install. This will install all the necessary packages locally which are required to run the project. Once that's finished, navigate to the server folder and do the same thing. 

After npm installing, be sure to navigate to server/config and change the name of 'default-server.json' to 'default.json' and input your Atlas Collection connection string. The table/cluster's columns are inside of server/models/urls.js and they are shown as a Mongoose Schema object.

Once that's finished, navigate to the top level of the server folder via the terminal and run npm run dev to start the server. There should be a message in the terminal that the server is now running, and what port it's running on (should be 5000). The port could be changed in server/default.json (once you change the file name) and the in server/index.js. Both files' ports need to be changed in order for it to run properly.

Next, navigate to the client folder via your terminal and run 'npm run serve'. There should be a message in the terminal that it is up and running and which port it's running on (should be port 8000). If you changed the port in the server, you will need to change the port number in the client/services/UrlController as well. Now you can make calls from the application to the database via the application.

Once both the client and server are running, you could test it out by inputting a url, clicking submit, and then navigating to the url that the application gives. 

Copyright 

The three music files I used in the Music Player app are not mine and are free, copyright-safe tracks from AudioLibrary. They can be found here:

Grow - KV: https://www.youtube.com/watch?v=dYczQCpaM74

Good Feeling - Roa: https://www.youtube.com/watch?v=6lvyX-1IeYM

WanderList - extenz: https://www.youtube.com/watch?v=Tc41iHPxHGQ
