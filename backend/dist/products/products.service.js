"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongodb_1 = require("mongodb");
const file_upload_service_1 = require("../file-upload/file-upload.service");
let ProductsService = class ProductsService {
    constructor(productsModel, fileUploadService) {
        this.productsModel = productsModel;
        this.fileUploadService = fileUploadService;
        this.getAllProducts = async () => {
            const products = await this.productsModel.find().exec();
            console.log('products', products);
            return products.map((product) => product.toObject());
        };
        this.getProductById = async (id) => {
            const objectId = new mongodb_1.ObjectId(id);
            const product = await this.productsModel.findOne({ _id: objectId });
            if (!product)
                throw new common_1.NotFoundException(`Product with ID: ${objectId} not found`);
            return product;
        };
        this.addProduct = async (productData, file) => {
            console.log('productData received from frontend:', productData);
            console.log('Name:', productData.name);
            console.log('Description:', productData.description);
            console.log('Price:', productData.price);
            try {
                const imageUrl = await this.fileUploadService.uploadFile(file, 'vue-nest-bucket');
                if (!imageUrl) {
                    throw new Error('Image upload failed');
                }
                console.log('Final data to be saved:', {
                    ...productData,
                    price: parseFloat(productData.price),
                    imageUrl: imageUrl,
                });
                const newProduct = new this.productsModel({
                    name: productData.name,
                    description: productData.description,
                    price: parseFloat(productData.price),
                    imageUrl: imageUrl,
                });
                console.log('New Product posted (toObject):', newProduct.toObject());
                const result = await newProduct.save();
                console.log('Saved Product:', {
                    id: result._id,
                    name: result.name,
                    description: result.description,
                    price: result.price,
                    imageUrl: result.imageUrl,
                    versionKey: result.__v,
                });
                return result.toObject();
            }
            catch (error) {
                console.error('Error saving the product:', error);
                throw new Error('Error processing your request');
            }
        };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        file_upload_service_1.FileUploadService])
], ProductsService);
//# sourceMappingURL=products.service.js.map