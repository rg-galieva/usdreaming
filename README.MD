THIS DOCUMENT IS IN PROGRESS. THIS PARAGRAPH SHALL BE REMOVED WHEN THIS DOCUMENT IS DONE.

### Tech Stack
- react v15
- redux
- react-router-dom
- webpack v2: separate sets for development & production
- postcss/cssnext, css modules
- surge deploy
- yarn


### Getting started
```
$ yarn install
// install all dependencies
```
```
$ yarn dev
// start development with webpack-dev-server
```
```
$ yarn build
// production build
```
```
$ yarn deploy
// make production build and deploy to the surge.sh
```

### Before deployment
Edit CNAME file: write subdomain name for surge.sh service, for example 
```
surge-static.surge.sh
```

### Syntax
ES-2015 (without modules, because webpack2 supports them by default), features >= stage2 (for example, arrow func in react components)

### Styles
[.css] - local styles
[.gcss] - global styles. Have special rule in webpack config. No need to use :global identifier in gcss files.

css-loader
[.css] - with css-modules option for incapsulate component's styles
[.gcss] - global styles

post-css: postprocessor
postcss-import: Pay attention to how postcss-import comes first in postcss config. Plugin allows to work with dependencies in different CSS-files. Resolve @import statements first, and then take all CSS in as one file and run all of it with cssnext
css-next: future css syntax & features (vars, colors). Goes with autoprefixer by default.
extract-text-webpack-plugin: allows to concat all separate css files. Don't forget to add the link to the final css in html file.

 


