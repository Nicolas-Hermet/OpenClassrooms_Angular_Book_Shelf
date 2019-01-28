import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { CustomDotenvService } from './services/custom-dotenv.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-book-shelf';

  constructor (private customDotenv: CustomDotenvService) {
    const config = {
      apiKey: this.customDotenv.getApiKey(),
      authDomain: this.customDotenv.getAuthDomainEnv(),
      databaseURL: this.customDotenv.getDatabaseURLEnv(),
      projectId: this.customDotenv.getProjectIdEnv(),
      storageBucket: this.customDotenv.getStorageBucketEnv(),
      messagingSenderId: this.customDotenv.getMessagingSenderIdEnv()
    };
    firebase.initializeApp(config);
  }
}
