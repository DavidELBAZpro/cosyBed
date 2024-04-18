import { Injectable, Inject } from '@nestjs/common'
import { IStorageProvider } from 'src/providers/interfaces/storage-provider'

@Injectable()
export class FileUploadService {
  constructor(
    @Inject('IStorageProvider') private storageProvider: IStorageProvider,
  ) {}

  async uploadFile(file: Express.Multer.File, bucket: string): Promise<string> {
    return this.storageProvider.upload(file, bucket)
  }
}
