"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    parseFile(file) {
        const data = [];
        if (file) {
            const arrayText = file.buffer.toString().split('\n');
            arrayText.forEach((value) => {
                if (value)
                    data.push(this.parseField(value));
            });
        }
        return { data };
    }
    parseField(field) {
        const fileVersion = field.substr(0, 3);
        const mdiLocationIdentifier = field.substr(3, 5);
        const partNumber = field.substr(8, 20).trim();
        const supersedingPartNumber = field.substr(28, 20).trim();
        const onHandQuantity = this.parseNumberFloat(field.substr(48, 8));
        const onOrderQuantity = this.parseNumberFloat(field.substr(56, 8));
        const jobQuantity = this.parseNumberInt(field.substr(64, 6));
        const quantityAllocatedToCustomers = this.parseNumberFloat(field.substr(70, 8));
        const currentWeekNetDemand = this.parseNumberFloat(field.substr(78, 8));
        const currentWeekLostSales = this.parseNumberFloat(field.substr(86, 8));
        const currentWeekNetLines = this.parseNumberInt(field.substr(94, 6));
        const currentWeekPositiveLines = this.parseNumberInt(field.substr(100, 6));
        const currentWeekPositiveLinesDirectAvailable = this.parseNumberInt(field.substr(106, 6));
        const currentWeekRushOrderLinesToSupplier = this.parseNumberInt(field.substr(112, 6));
        const currentWeekStockOrderLinesToSupplier = this.parseNumberInt(field.substr(118, 6));
        const totalNetDemandPast52Weeks = this.parseNumberFloat(field.substr(124, 8));
        const totalLostSalesPast52Weeks = this.parseNumberFloat(field.substr(132, 8));
        const totalNetLinesPast52Weeks = this.parseNumberInt(field.substr(140, 6));
        const purchasingPriceInEuro = this.parseNumberFloat(field.substr(146, 7));
        const purchasingPriceInLocalCurrency = this.parseNumberFloat(field.substr(153, 10));
        const unitOfMeasureOfSupplier = field.substr(163, 10).trim();
        const packagingUnitOfSupplier = this.parseNumberInt(field.substr(173, 5));
        const vendorSupplierCode = field.substr(178, 6).trim();
        const minimumStockLevel = this.parseNumberInt(field.substr(184, 6));
        const maximumStockLevel = this.parseNumberInt(field.substr(190, 6));
        const unitOfMeasureOfDealer = field.substr(196, 10).trim();
        const unitOfMeasureFactor = this.parseNumberFloat(field.substr(206, 7));
        const deliveryTimeOfSupplier = this.parseNumberInt(field.substr(213, 3));
        const binLocation = field.substr(216, 10).trim();
        return {
            fileVersion,
            mdiLocationIdentifier,
            partNumber,
            supersedingPartNumber,
            onHandQuantity,
            onOrderQuantity,
            jobQuantity,
            quantityAllocatedToCustomers,
            currentWeekNetDemand,
            currentWeekLostSales,
            currentWeekNetLines,
            currentWeekPositiveLines,
            currentWeekPositiveLinesDirectAvailable,
            currentWeekRushOrderLinesToSupplier,
            currentWeekStockOrderLinesToSupplier,
            totalNetDemandPast52Weeks,
            totalLostSalesPast52Weeks,
            totalNetLinesPast52Weeks,
            purchasingPriceInEuro,
            purchasingPriceInLocalCurrency,
            unitOfMeasureOfSupplier,
            packagingUnitOfSupplier,
            vendorSupplierCode,
            minimumStockLevel,
            maximumStockLevel,
            unitOfMeasureOfDealer,
            unitOfMeasureFactor,
            deliveryTimeOfSupplier,
            binLocation
        };
    }
    parseNumberFloat(value) {
        return parseFloat(value.substr(0, value.length - 2) + '.' + value.substr(value.length - 2, value.length));
    }
    parseNumberInt(value) {
        return parseInt(value);
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map