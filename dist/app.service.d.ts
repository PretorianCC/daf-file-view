/// <reference types="multer" />
import { Field } from './types/field.interface';
export declare class AppService {
    parseFile(file: Express.Multer.File): {
        data: Field[];
    };
    parseField(field: string): Field;
    parseNumberFloat(value: string): number;
    parseNumberInt(value: string): number;
}
