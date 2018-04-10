// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyBAR5tOpPxPO7-N15XJ5Ea0105LZ0qzTkw',
    authDomain: 'todolistapp-a0cca.firebaseapp.com',
    databaseURL: 'https://todolistapp-a0cca.firebaseio.com',
    projectId: 'todolistapp-a0cca',
    storageBucket: 'todolistapp-a0cca.appspot.com',
    messagingSenderId: '817170324629'
  }
};
