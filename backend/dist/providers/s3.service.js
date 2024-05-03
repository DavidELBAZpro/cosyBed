"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsStorageService = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
let AwsStorageService = class AwsStorageService {
    constructor() {
        this.s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION,
        });
    }
    async upload(file, bucket) {
        const params = {
            Bucket: bucket,
            Key: `products/${Date.now().toString()}-${file.originalname}`,
            Body: file.buffer,
            ACL: 'public-read',
        };
        const data = await this.s3.upload(params).promise();
        return data.Location;
    }
};
exports.AwsStorageService = AwsStorageService;
exports.AwsStorageService = AwsStorageService = __decorate([
    (0, common_1.Injectable)()
], AwsStorageService);
//# sourceMappingURL=s3.service.js.map