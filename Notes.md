<h1> Setup with Expo </h1>

<ul> 

<li> Create the app </li>

```bash
npx create-expo-app app-name
```

<li> Install some dependencies </li>

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

Set 
1. `"main" : "expo-router/entry"` in `package.json` 
2. `"scheme": "app-name"` in `app.json`

Copy the contents of `app.js`, delete the file and create a new file `_layout.jsx` inside a new folder `app` and paste them down there.

Start the development server with - 

```bash
npx expo start
```

If you face problem connecting with the phone (expo go), use an alternative command -

```bash
npx expo start --tunnel
```

</ul>