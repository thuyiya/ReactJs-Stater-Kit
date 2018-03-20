1. npm install webpack webpack-cli --save-dev
2. Setup folder structure with src/index.js and src/test.js src/components and create webpack.config.js using doc https://webpack.js.org/
3. Use Babel Loader for ES6 https://webpack.js.org/loaders/babel-loader/
4. npm install babel-loader babel-core --save-dev
5. add module rule to webpack config
6. add react to existing app https://reactjs.org/docs/add-react-to-an-existing-app.html, enable react-preset or plugin install
7. npm install --save-dev babel-cli babel-preset-react
8. echo '{ "presets": ["es2015", "react"] }' > .babelrc
9. create index.html inside the dist
10. https://webpack.js.org/guides/development/ and goto webpack-dev-server
11. then install dev server npm install --save-dev webpack-dev-server
12. then add dev server configaration to webpack https://webpack.js.org/configuration/dev-server
13. run webpack-dev-server --open
14. install webpack-dev-server clean-webpack-plugin and create webpack configaration https://webpack.js.org/guides/development/#using-webpack-dev-server
15. add template: 'index.html' file to create you own html, bundle will added to this file when you compile
16. Now add reactjs to the application by installing npm install --save react react-dom
17. Now craete App.js in src this will be the main react application
18. add this base code to App.js https://reactjs.org/docs/add-react-to-an-existing-app.html
19. Then create the element with id in index.html page
20. Then set App.js and index.js
21. create assets and make custom js and scss files
22. eslint for install eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-watch 

#### Ref

https://www.youtube.com/watch?v=w9-1T1D0xlQ