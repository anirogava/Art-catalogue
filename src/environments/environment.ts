// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  museumApi:
    'https://collectionapi.metmuseum.org/public/collection/v1/search?q=',
  base_url: 'https://collectionapi.metmuseum.org/public/collection/v1/',
  firebase: {
    projectId: 'museum-13825',
    appId: '1:169122716903:web:daecbf60315708943e5642',
    storageBucket: 'museum-13825.appspot.com',
    apiKey: 'AIzaSyABn0UcYPVUM0aIlnY8dJo1yihBr3-99LY',
    authDomain: 'museum-13825.firebaseapp.com',
    messagingSenderId: '169122716903',
  },
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
