"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const welcome_controller_1 = require("./welcome/welcome.controller");
const products_module_1 = require("./products/products.module");
const clients_module_1 = require("./clients/clients.module");
const file_upload_service_1 = require("./file-upload/file-upload.service");
const s3_service_1 = require("./providers/s3.service");
const file_upload_module_1 = require("./file-upload/file-upload.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.NODE_ENV === 'production'
                ? process.env.MONGO_URL
                : 'mongodb://127.0.0.1:27017/db_ecommerce_app', {
                serverSelectionTimeoutMS: 5000,
            }),
            products_module_1.ProductsModule,
            clients_module_1.ClientsModule,
            file_upload_module_1.FileUploadModule,
        ],
        controllers: [app_controller_1.AppController, welcome_controller_1.WelcomeController],
        providers: [
            app_service_1.AppService,
            file_upload_service_1.FileUploadService,
            { provide: 'IStorageProvider', useClass: s3_service_1.AwsStorageService },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map