This is a simple SignUp form made with [Create React App]
(https://Codefeak.github.io/digia)

It allows one to add new Participants with the following properties:
ID, Full Name, E-mail address and Phone Number. ID is generated automatically
while other properties takes user input as a value and save it to the separate
table.
Before user input are saved to table list it validates all the input values.
Row Delete and Inline editing option are also available. Each column can be sorted
to ascending order by clicking on column header.

# dependencies

``  "build": "^0.1.4",
  "gh-pages": "^1.1.0",
  "material-ui": "^0.20.0",
  "modal": "^1.2.0",
  "react": "^16.2.0",
  "react-dom": "^16.2.0",
  "react-icons": "^2.2.7",
  "react-scripts": "1.1.1",
  "react-sortable-table": "^1.3.0",
  "react-tap-event-plugin": "^3.0.2",
  "react-validation": "^3.0.7",
  "uniqid": "^4.1.1"``

# Folder Structure

```
  digia-master/
    src/
      SignUp.js
      RegisterList.js
      registerList.css
      index.js
      index.css
    public/
      index.html
      nslogo.jpg
    README.md
    yarn.lock
    package.json
    .gitignore
```

# Available scripts
###  `yarn start`
   Runs the app in development mode <br>
   [http://localhost:3000](http://localhost:3000) to view it in browser

###  `yarn run build`
    Builds the app for production to the `build` folder.
    It bundles React in production mode and optimizes the build for the best performance.
    see the section about [deployment](https://reactjs.org/docs/how-to-contribute.html#development-workflow) for more information.

###   `yarn run eject`

** Note: This is a one-way operation. Once you `eject`, you can't go back! **
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
yarn

# Support Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## Importing a Component

This project setup supports ES6 modules thanks to Babel.<br>
While you can still use `require()` and `module.exports`, we encourage you to use [`import` and `export`](http://exploringjs.com/es6/ch_modules.html) instead.

For example:
### `DangerButton.js`


```js
import React, { Component } from 'react';
import Button from './Button'; // Import a component from another file

class DangerButton extends Component {
  render() {
    return <Button color="red" />;
  }
}

export default DangerButton;
