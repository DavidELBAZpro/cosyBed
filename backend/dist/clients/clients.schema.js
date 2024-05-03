"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
class ClientClass {
}
exports.ClientSchema = mongoose_1.SchemaFactory.createForClass(ClientClass).set('collection', 'clients');
//# sourceMappingURL=clients.schema.js.map