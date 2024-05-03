"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.listen(process.env.NODE_ENV === 'production' ? process.env.PORT : '1606', '0.0.0.0');
    common_1.Logger.log(`Server is running on port ${process.env.PORT}`);
    common_1.Logger.log(`mongo: ${process.env.MONGO_URL}`);
    common_1.Logger.log(`node_env: ${process.env.NODE_ENV}`);
}
bootstrap();
//# sourceMappingURL=main.js.map