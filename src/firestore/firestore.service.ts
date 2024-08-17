import { Injectable } from '@nestjs/common';
import { FirebaseService } from './../firebase/firebase.service';
import { doc, setDoc } from "firebase/firestore";

@Injectable()
export class FirestoreService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async createDocument(collection: string, documentId: string, documentData: any): Promise<any> {
    const firestore = this.firebaseService.getFirestore();
    const docRef = await firestore.collection(collection).doc(documentId).set(documentData);
    return docRef;
  }

  async getAll(): Promise<any[]> {
    const firestore = this.firebaseService.getFirestore();
    const jokesSnapshot = await firestore.collection('Joke').get();
    const jokes = jokesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return jokes;
  }

  async getDocument(collection: string, docId: string): Promise<any> {
    const firestore = this.firebaseService.getFirestore();
    const docRef = firestore.collection(collection).doc(docId);
    const doc = await docRef.get();
    if (!doc.exists) {
      throw new Error('Document not found');
    }
    return doc.data();
  }

  async updateDocument(collection: string, docId: string, updateData: any): Promise<void> {
    const firestore = this.firebaseService.getFirestore();
    const docRef = firestore.collection(collection).doc(docId);
    await docRef.update(updateData);
  }

  async deleteDocument(collection: string, docId: string): Promise<void> {
    const firestore = this.firebaseService.getFirestore();
    const docRef = firestore.collection(collection).doc(docId);
    await docRef.delete();
  }
}
