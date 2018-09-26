// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyAfqbkT6mhJWZ9mqcPCVH-h5tdum5iEhog",
    authDomain: "notas-bd-72584.firebaseapp.com",
    databaseURL: "https://notas-bd-72584.firebaseio.com",
    projectId: "notas-bd-72584",
    storageBucket: "notas-bd-72584.appspot.com",
    messagingSenderId: "348693792434"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
