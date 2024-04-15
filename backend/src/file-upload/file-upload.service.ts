import { Injectable } from '@nestjs/common'
import * as AWS from 'aws-sdk'
import * as multer from 'multer'
import * as multerS3 from 'multer-s3'

@Injectable()
export class FileUploadService {
  s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  })

  multerStorageConfig = multer({
    storage: multerS3({
      s3: this.s3,
      bucket: 'nom-de-votre-bucket',
      acl: 'public-read',
      key: function (request, file, cb) {
        cb(null, `${Date.now().toString()}-${file.originalname}`)
      },
    }),
  })
}
