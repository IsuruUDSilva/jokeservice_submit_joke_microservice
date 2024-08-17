import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import * as path from 'path';

@Injectable()
export class FirebaseService {
  constructor() {
    const serviceAccount: ServiceAccount = require(path.resolve('src/firebase/serviceAccountKey.json'));

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  getFirestore() {
    return admin.firestore();
  }
}
