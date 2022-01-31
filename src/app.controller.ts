import { Body, Controller, Get, Post, Render, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('daffileview')
  @Render('index')
  rootGet() {
    return {data: ""};
  }

  @Post('daffileview')
  @UseInterceptors(FileInterceptor('file'))
  @Render('index')
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.appService.parseFile(file);
  }
}
