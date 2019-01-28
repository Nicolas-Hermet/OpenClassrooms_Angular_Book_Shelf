import { Injectable } from '@angular/core';
declare var require: any;

@Injectable({
  providedIn: 'root'
})
export class CustomDotenvService {
  private apiKeyEnv = require('../../../env.json')['apiKey'];
  private authDomainEnv = require('../../../env.json')['authDomain'];
  private databaseURLEnv = require('../../../env.json')['databaseURL'];
  private projectIdEnv = require('../../../env.json')['projectId'];
  private storageBucketEnv = require('../../../env.json')['storageBucket'];
  private messagingSenderIdEnv = require('../../../env.json')['messagingSenderId'];

  constructor() { }

  getApiKey() {
    return this.apiKeyEnv;
  }

  getAuthDomainEnv() {
    return this.authDomainEnv;
  }

  getDatabaseURLEnv() {
    return this.databaseURLEnv;
  }

  getProjectIdEnv() {
    return this.projectIdEnv;
  }

  getStorageBucketEnv() {
    return this.storageBucketEnv;
  }

  getMessagingSenderIdEnv() {
    return this.messagingSenderIdEnv;
  }
}
