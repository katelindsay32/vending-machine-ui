### vending-machine-ui

Following this tutorial: [How to set up a modern JavaScript project](https://www.robinwieruch.de/javascript-project-setup-tutorial)


### Build for production
 * `npm run build` bundles up javascript into bundle.js and puts it into dist folder
to run app from the dist folder:
 * install  http-server `npm install -g http-server`
 * start the server with `http-server dist`  Note that the paramater to this command is the directory you'd like to host the app out of. 


### Run in development mode
  * `npm start` bundles the javascript and virtually hosts the bundle.js in the dist folder (although you cannot see it). It also runs a webpack dev server for running locally