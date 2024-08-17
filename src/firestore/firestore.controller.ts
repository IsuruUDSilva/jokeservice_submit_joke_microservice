import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FirestoreService } from './firestore.service';

@Controller('firestore')
export class FirestoreController {
  constructor(private readonly firestoreService: FirestoreService) {}

  @Post(':collection')
  async createDocument(@Param('collection') collection: string, @Body() body: any) {
    return this.firestoreService.createDocument(collection, body.id, body);
  }

  @Get('Jokes')
  async getAllJokes() {
    const jokes = await this.firestoreService.getAll();
    return jokes;
  }

  @Get(':collection/:id')
  async getDocument(@Param('collection') collection: string, @Param('id') id: string) {
    return this.firestoreService.getDocument(collection, id);
  }

  @Put(':collection/:id')
  async updateDocument(@Param('collection') collection: string, @Param('id') id: string, @Body() body: any) {
    return this.firestoreService.updateDocument(collection, id, body);
  }

  @Delete(':collection/:id')
  async deleteDocument(@Param('collection') collection: string, @Param('id') id: string) {
    return this.firestoreService.deleteDocument(collection, id);
  }
}
