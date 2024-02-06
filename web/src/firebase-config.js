/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyAa1FiZBC6fMjy_TACVQX0ct3pvwR-C8Ts",
  authDomain: "friendlychat-fd2d9.firebaseapp.com",
  projectId: "friendlychat-fd2d9",
  storageBucket: "friendlychat-fd2d9.appspot.com",
  messagingSenderId: "183092128433",
  appId: "1:183092128433:web:35082e00d4cdf18ce95090"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}