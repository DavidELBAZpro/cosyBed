// storage-provider.interface.ts
export interface IStorageProvider {
  upload(file: Express.Multer.File, bucket: string): Promise<string>
}
