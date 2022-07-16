# Just Another Text Editor

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This text editor PWA allows the user to edit text or code and save their work for the next time they open the app, whether offline or online. The app can be installed locally and used from a standalone window as well, with identical function.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation:

This app is deployed to [Heroku](https://original-name.herokuapp.com/), so visit that link if you're just wishing to demo it.

In order to run this locally, you'll need to install the node CLI, clone the repo and install the packages using 'npm i'. From there, running "npm start" from the CLI will build the webpack bundle and start your server. Once the server is initialized, visit http://localhost:3000/ in order to access the site.

## Usage

Link to the deployed app: https://original-name.herokuapp.com/.

J.A.T.E (Just Another Text Editor) is a simple PWA that you can either use from the browser without installing it, or you can install it to access it from your desktop if desired. Using JATE, you can pick up where you left off easily, editing text and saving it automatically every time anything is changed. Once you've visited the site once it will be cached so you can access it again, even offline.

Because the editor was created with CodeMirror, it will also format your text depending on what you type; for example you can use /\*your text here\*/ to produce a comment in gray text, in addition numbers will be formatted blue to make it easier to differentiate them.

Screenshot of the app during function:

![Screenshot](images/Screenshot.jpg?raw=true "Screenshot")

## Credits

The following node packages were used to create this app:
several webpack packages - https://webpack.js.org/
express - https://expressjs.com/
if-env - https://www.npmjs.com/package/if-env
concurrently - https://www.npmjs.com/package/concurrently
nodemon - https://www.npmjs.com/package/nodemon
several babel packages - https://babeljs.io/
css-loader - https://www.npmjs.com/package/css-loader
html-webpack-plugin - https://www.npmjs.com/package/html-webpack-plugin
http-server - https://www.npmjs.com/package/http-server
style-loader - https://www.npmjs.com/package/style-loader
workbox-webpack-plugin - https://www.npmjs.com/package/workbox-webpack-plugin
code-mirror-themes - https://codemirror.net/
idb - https://www.npmjs.com/package/idb

As always, I have to thank Trey Eckels and the instructional team at the Georgia Tech full stack boot camp program
for teaching me the skills to design an app like this.

## License

Copyright 2022 Adam Brock

This software is licensed using the MIT license: https://opensource.org/licenses/MIT.

## Questions

Feel free to reach out to me with questions at a.paulbrock@gmail.com.

My GitHub profile is at https://github.com/abrock3.
