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
  databaseURL: "<replace-with-your-config>",
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

This will allow anyone to read and write to the tasks path in your database!
To learn more about firebase security check the docs [here](https://firebase.google.com/docs/database/security/).
The security rules for this app can be found in [task-app-web/database.rules.json](task-app-web/database.rules.json)

### To run the Web App

Change into the web app directory.
```bash
$ cd task-app-web
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

Change into the mobile app directory.
```bash
$ cd task-app-mobile
```

Install the node modules.
```bash
$ npm install
```

For iOS
```bash
$ npm run ios
```

For Android
```bash
$ npm run android
```
