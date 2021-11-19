/// <reference types="multer" />
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    rootGet(): {
        data: string;
    };
    uploadFile(file: Express.Multer.File): {
        data: import("./types/field.interface").Field[];
    };
}
