# Author's website 2017

![alt text](http://poprotsky.eu/github/poprotsky-eu-2017/preview.jpg)

> Demo here: http://poprotsky.eu/github/poprotsky-eu-2017 <br>
*All content is only demonstrative.*


## How to use development version?

###### Step 1
Clone repo and use `npm install` to install all dependencies.

###### Step 2
Use default gulp task `gulp` to start development version. <br>
> *This task run other important tasks like watch changes in .html, .css, .js files, compile scss code to css, minify and compress js code etc.*

###### Step 3
Now you have a project on your localhost. You have livereload and other nice things, which will simplify the development.

###### Build
Use gulp task `gulp build` to build production version. You have a build files in `dist` folder


###### Other tasks
- `gulp scss-to-css` - this task compiling scss to css, replacing px to rem, adding to vendor prefixes and other.
- `gulp vendor-scripts` - this task taking all vendors js files to minify and compress it.
- `gulp main-js` - this task watching to changes in your main.js file and refresh the page if this file is changed.
