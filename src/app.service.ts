import { Injectable } from '@nestjs/common';
import { Field } from './types/field.interface';

@Injectable()
export class AppService {

  parseFile(file: Express.Multer.File): {data: Field[]} {
    const data: Field[] = [];
    if (file) {
      const arrayText: string[] = file.buffer.toString().split('\n');
      arrayText.forEach((value: string) => {
        if (value) data.push(this.parseField(value));
      });
    }
    return {data};
  }

  parseField(field: string): Field {
    const fileVersion: string = field.substr(0, 3);
    const mdiLocationIdentifier: string = field.substr(3, 5);
    const partNumber: string = field.substr(8, 20).trim();
    const supersedingPartNumber: string = field.substr(28, 20).trim();
    const onHandQuantity: number = this.parseNumberFloat(field.substr(48, 8));
    const onOrderQuantity: number = this.parseNumberFloat(field.substr(56, 8));
    const jobQuantity: number = this.parseNumberInt(field.substr(64, 6));
    const quantityAllocatedToCustomers: number = this.parseNumberFloat(field.substr(70, 8));
    const currentWeekNetDemand: number = this.parseNumberFloat(field.substr(78, 8));
    const currentWeekLostSales: number = this.parseNumberFloat(field.substr(86, 8));
    const currentWeekNetLines: number = this.parseNumberInt(field.substr(94, 6));
    const currentWeekPositiveLines: number = this.parseNumberInt(field.substr(100, 6));
    const currentWeekPositiveLinesDirectAvailable: number = this.parseNumberInt(field.substr(106, 6));
    const currentWeekRushOrderLinesToSupplier: number = this.parseNumberInt(field.substr(112, 6));
    const currentWeekStockOrderLinesToSupplier: number = this.parseNumberInt(field.substr(118, 6));
    const totalNetDemandPast52Weeks: number = this.parseNumberFloat(field.substr(124, 8));
    const totalLostSalesPast52Weeks: number = this.parseNumberFloat(field.substr(132, 8));
    const totalNetLinesPast52Weeks: number = this.parseNumberInt(field.substr(140, 6));
    const purchasingPriceInEuro: number = this.parseNumberFloat(field.substr(146, 7));
    const purchasingPriceInLocalCurrency: number = this.parseNumberFloat(field.substr(153, 10));
    const unitOfMeasureOfSupplier: string = field.substr(163, 10).trim();
    const packagingUnitOfSupplier: number = this.parseNumberInt(field.substr(173, 5));
    const vendorSupplierCode: string = field.substr(178, 6).trim();
    const minimumStockLevel: number = this.parseNumberInt(field.substr(184, 6));
    const maximumStockLevel: number = this.parseNumberInt(field.substr(190, 6));
    const unitOfMeasureOfDealer: string = field.substr(196, 10).trim();
    const unitOfMeasureFactor: number = this.parseNumberFloat(field.substr(206, 7));
    const deliveryTimeOfSupplier: number = this.parseNumberInt(field.substr(213, 3));
    const binLocation: string = field.substr(216, 10).trim();

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
    }
  }

  parseNumberFloat(value: string): number {
    return parseFloat(value.substr(0, value.length - 2) + '.' +  value.substr(value.length - 2, value.length));
  }

  parseNumberInt(value: string): number {
    return parseInt(value);
  }
}
