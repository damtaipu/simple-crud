// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { FirebaseModel } from "src/app/core/domain/firebase-model/firebase.model";

export const environment = {
  production: false,
  airTableToken: 'patcLlUKCvSmiBpoh.e51a2d0e301092c4d17d1c4966fb9883259fef48a429c643d9f188027027a66a'
};

export const firebaseConfig: FirebaseModel = {
  apiKey: "AIzaSyAsR2Xa4xYE5cLIEL--Ib1_QT5J4RjcWGs",
  authDomain:  "dg-teste-dda47.firebaseapp.com",
  projectId: "dg-teste-dda47",
  storageBucket: "dg-teste-dda47.appspot.com",
  messagingSenderId: "406807174543",
  appId: "1:406807174543:web:0d282580170b7a152efffa"
}


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
