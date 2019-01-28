import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-book-shelf';
  private env = require('../../../env.json');

  constructor () {
    const config = {
      apiKey: this.env.apiKey,
      authDomain: this.env.authDomain,
      databaseURL: this.env.databaseURL,
      projectId: this.env.projectId,
      storageBucket: this.env.storageBucket,
      messagingSenderId: this.env.messagingSenderId
    };
    firebase.initializeApp(config);
  }
}
