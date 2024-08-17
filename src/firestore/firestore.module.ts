import { Module } from '@nestjs/common';
import { FirestoreService } from './firestore.service';
import { FirestoreController } from './firestore.controller';
import { FirebaseModule } from '../firebase/firebase.module';

@Module({
  imports: [FirebaseModule],
  providers: [FirestoreService],
  controllers: [FirestoreController]
})
export class FirestoreModule {}
