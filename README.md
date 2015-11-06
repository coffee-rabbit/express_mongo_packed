# express_mongo_packed
Skeleton for webpacked node app using Express and MongoDB

### Getting Started
1. Install Mongo Database: https://www.mongodb.org/downloads#production
2. in terminal start mongo databas wtih mongod command
3. in new terminal install node: brew install node
3.  run npm install
4.  run npm start
5. navigate to http://localhost:8080 to see if the site is running

### Adding to the project
The project is set up to use Webpack a CommonJs bundler
The benifits to using webpack is not having to worry about poluting the Global namespace
Which lets you write better code
Also is allows for a hot load of your JS code so any Js file changes will be auto loaded

The Java script app is contianed in the app directory and the entry point is main.js
 a file can be directly required with: require(<relative_path_to_current_location>)
 this will return the modules exports
 to export form a module do: module.exports = <what you want to export>
 If requiring a folder webpack will look for index.js
 
 To add a contoller or service to the application add it to the respective module in the folders index.js
