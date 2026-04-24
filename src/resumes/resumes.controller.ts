import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Delete,
  Param,
  UseGuards,
  Query,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { ResumesService } from './resumes.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ListResumeDto } from './dto/list-resume.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload/upload.service';
import type { Multer } from 'multer';

@Controller('api/v1/resumes')
@UseGuards(JwtAuthGuard)
export class ResumesController {
  constructor(
    private readonly resumesService: ResumesService,
    private readonly uploadService: UploadService
  ) { }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  upload(
    @UploadedFile() file: any,
    @Req() req,
  ) {
    return this.uploadService.upload(file, req.user);
  }

  @Post('upload/bulk')
  @UseInterceptors(
    FilesInterceptor('files'),
  )
  uploadBulk(
    @UploadedFiles() files: any[],
    @Req() req,
  ) {
    return this.uploadService.uploadBulk(
      files,
      req.user,
    );
  }

  @Post('upload/bulk/start')
  @UseInterceptors(
    FilesInterceptor('files'),
  )
  startBulkUpload(
    @UploadedFiles() files: any[],
    @Req() req,
  ) {
    return this.uploadService.startBulkUpload(
      files,
      req.user,
    );
  }

  @Get('upload/bulk/status/:jobId')
  getBulkStatus(
    @Param('jobId') jobId: string,
  ) {
    return this.uploadService.getBulkStatus(
      jobId,
    );
  }

  @Post()
  create(
    @Body() dto: CreateResumeDto,
    @Req() req,
  ) {
    return this.resumesService.create(dto, req.user);
  }

  @Get()
  findAll(
    @Req() req,
    @Query() query: ListResumeDto,
  ) {
    return this.resumesService.findAll(req.user, query);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Req() req,
  ) {
    return this.resumesService.remove(id, req.user);
  }
}