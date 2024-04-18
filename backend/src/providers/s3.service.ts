import { Injectable } from '@nestjs/common'
import { IStorageProvider } from './interfaces/storage-provider'
import * as AWS from 'aws-sdk'
import * as multer from 'multer'
import * as multerS3 from 'multer-s3'

@Injectable()
export class AwsStorageService implements IStorageProvider {
  private s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  })

  async upload(file: Express.Multer.File, bucket: string): Promise<string> {
    const params = {
      Bucket: bucket,
      Key: `${Date.now().toString()}-${file.originalname}`,
      Body: file.buffer,
      ACL: 'public-read',
    }

    const data = await this.s3.upload(params).promise()
    return data.Location
  }
}
