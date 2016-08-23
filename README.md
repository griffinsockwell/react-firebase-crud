![screenshot](screenshot.png)

---

## To Run Locally

```bash
$ cd ~/Desktop
$ git clone https://github.com/griffinsockwell/react-firebase-crud.git
```

Make sure [Node.js](https://nodejs.org/) is installed.

Login to [Firebase](https://console.firebase.google.com/) and create a new app from the dashboard.

Click on 'Add Firebase to your web app'

Change the firebase config in two different files.

* TaskAppMobile/src/ref.js
* TaskAppWeb/src/ref.js

```js
const config = {
  apiKey: "<replace-with-your-config>",
  authDomain: "<replace-with-your-config>",
  databaseURL: "<replace-with-your-config>",
  storageBucket: "<replace-with-your-config>",
};
```

When creating new apps the default security rules require users to be authenticated to be able to read and write to the database. Since this app doesn't require users to be logged in you will need to change your security rules so the app will work.

In the firebase dashboard click on Database and then select RULES and change the rules:

```json
{
  "rules": {
    "tasks": {
      ".read": "true",
      ".write": "true"
    }
  }
}
```

!!!This will allow anyone to read and write to the tasks path in your database.
To learn more about firebase security check the docs [here](https://firebase.google.com/docs/database/security/).

### To run the Web App

Change into the web app directory.
```bash
$ cd TaskAppWeb
```

Install the node modules.
```bash
$ npm install
```

Start the development server.
```bash
$ npm start
```

### To run the Mobile App

Make sure React Native is [setup](https://facebook.github.io/react-native/docs/getting-started.html#content) properly.

Change into the mobile app directory.
```bash
$ cd TaskAppMobile
```

Install the node modules.
```bash
$ npm install
```

Start the development server.
```bash
$ npm start
```

In a new tab.
```bash
$ react-native run-ios
```

---

## License

The MIT License (MIT)

Copyright (c) 2016 Griffin Sockwell

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
