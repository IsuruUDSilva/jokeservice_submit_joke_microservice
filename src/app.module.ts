import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirestoreModule } from './firestore/firestore.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [FirestoreModule, FirebaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
