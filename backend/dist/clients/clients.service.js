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
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ClientsService = class ClientsService {
    constructor(clientsModel) {
        this.clientsModel = clientsModel;
        this.getAllClients = async () => {
            const clients = await this.clientsModel.find().exec();
            return clients.map((client) => client.toObject());
        };
        this.getClientById = async (id) => {
            const client = await this.clientsModel.findById(id).exec();
            return client;
        };
    }
    async getClientsByNameOrEmail(str) {
        const searchRegex = new RegExp(str, 'i');
        console.log('searchRegex', searchRegex);
        const clients = await this.clientsModel
            .find({
            $or: [
                { name: { $regex: searchRegex } },
                { email: { $regex: searchRegex } },
            ],
        })
            .exec();
        return clients;
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Client')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClientsService);
//# sourceMappingURL=clients.service.js.map