// file-upload.module.ts
import { Module } from '@nestjs/common'
import { FileUploadService } from './file-upload.service'
import { AwsStorageService } from 'src/providers/s3.service'

@Module({
  providers: [
    FileUploadService,
    { provide: 'IStorageProvider', useClass: AwsStorageService },
  ],
  exports: [FileUploadService],
})
export class FileUploadModule {}
