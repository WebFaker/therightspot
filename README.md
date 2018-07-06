# 🌶 Front-end starter

This starter will help you ( *I hope* ) to make clean front-end development.
<!-- TOC -->

- [🌶 Front-end starter](#🌶-front-end-starter)
    - [Summary:](#summary)
    - [I - ⚙️ How it works :](#i---⚙️-how-it-works-)
    - [II - 👍 Make it work :](#ii---👍-make-it-work-)
        - [1. Install dependencies :](#1-install-dependencies-)
        - [2. Install gulp *( in global )* :](#2-install-gulp--in-global--)
        - [3. Build and / or watch :](#3-build-and--or-watch-)
    - [III - 📜 Create new scss and js files :](#iii---📜-create-new-scss-and-js-files-)
        - [1. Tree](#1-tree)
        - [2. Way to create new components files:](#2-way-to-create-new-components-files)
            - [SCSS](#scss)
            - [JS](#js)
    - [IV - 🗄 Dependencies](#iv---🗄-dependencies)

<!-- /TOC -->
## Summary:
* I - ⚙️ How it works :
* II - 👍 Make it work :
    1. Install dependencies :
    2. Install gulp ( in global )
    3. Build and / or watch :
* III - 📜 Create new scss and js files :
    1. Tree
    2. Way to create new components files :
        * SCSS
        * JS
* IV - 🗄 Dependencies :
## I - ⚙️ How it works : 
This starter is **used to** : 
1. **Compile** files from a *source* folder to a *public* folder
2. **Copy** the *html* and *assets* files from `src` folder **and paste** them to `public`
3. **Group** styles into a *main style file*, **compiling** and **minifying** it
4. **Idem** for the scripts files
## II - 👍 Make it work :
### 1. Install dependencies :
* use `yarn` or `npm install`
 ( *I assume that you have already installed `yarn` or `npm`* )
 > Now you have **all your dependencies** installed.
### 2. Install gulp *( in global )* :
* use `yarn global add gulp` **or**<> `npm install -g gulp`
> Now you can run **gulp tasks** !
### 3. Build and / or watch :
* use `gulp build` to build your work **one time** ( *open `public/index.html` in your browser after that* )
* or simply `gulp` to build it **in a loop** and actualize your modifications ( *using BrowserSync* 🔄 )
> Now you have your dev environment **ready to work** 👍
## III - 📜 Create new scss and js files :
### 1. Tree
```CSS

├── public
│   └── .gitkeep
├── src
│   ├── assets
│   │   ├── fonts
│   │   └── images
│   ├── js
│   │   ├── app.js
│   │   └── ui.js
│   ├── scss
│   │   ├── components
│   │   │   ├── _footer.scss
│   │   │   └── _header.scss
│   │   ├── global
│   │   │   ├── fonts.scss
│   │   │   ├── global.scss
│   │   │   ├── mixins.scss
│   │   │   ├── reset.scss
│   │   │   └── variables.scss
│   │   └── master.scss
│   ├── index.html
│   └── test.html
├── .babelrc
├── .gitignore
├── .jshintrc
├── gulpfile.js
├── package.json
├── README.md
└── yarn.lock
```
### 2. Way to create new components files: 
#### SCSS
* Go to `src/scss/components`
* Create your file with this structure: `_filename.scss` 
+ Don't forget to import this new file in `master.scss` like that: `@import: 'component/filename'`
#### JS 
* Go to `src/js`
* Create your file with this structure: `filename.js` 
+ Don't forget to import this new file in `app.js` like that: `import: './filename'`
## IV - 🗄 Dependencies 
```json
    "babel": "^6.23.0",
    "babel-core": "^6.26.3",
    "babel-preset-es2015": "^6.24.1",
    "browser-sync": "^2.24.4",
    "gulp": "^3.9.1",
    "gulp-babel": "^7.0.1",
    "gulp-rename": "^1.3.0",
    "gulp-sass": "^4.0.1",
    "gulp-uglify-es": "^1.0.4",
    "jshint": "^2.9.5",
    "webpack-stream": "^4.0.3"
```
```CSS
.jshintrc
```