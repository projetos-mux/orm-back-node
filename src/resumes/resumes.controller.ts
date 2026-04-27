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
  Request,
  Patch,
  Res,
} from '@nestjs/common';
import { ResumesService } from './resumes.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ListResumeDto } from './dto/list-resume.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload/upload.service';
import { Roles } from '../auth/decorator/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';

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

  @Get('recent')
  @UseGuards(JwtAuthGuard)
  async getRecentResumes(@Request() req) {
    const user = req.user;

    const companyId =
      user.role === 'admin'
        ? user.companyId
        : user.companyId;

    return {
      resumes: await this.resumesService.getRecentResumes(companyId),
    };
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async softDelete(
    @Param('id') id: string,
    @Request() req,
  ) {
    return this.resumesService.softDeleteResume(id, req.user.companyId, req.user.userId, req.user.name)
  }

  @Delete('/admin/:id/permanent')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async hardDelete(
    @Param('id') id: string,
    @Request() req
  ) {
    return this.resumesService.hardDeleteResume(id, req.user.userId, req.user.name)
  }

  @Patch(':id/restore')
  @UseGuards(JwtAuthGuard)
  async restoreResume(
    @Param('id') id: string,
    @Request() req,
  ) {
    return this.resumesService.restoreResume(
      id,
      req.user.companyId,
      req.user.userId,
      req.user.name,
    )
  }

  @Get(':id/pdf')
  @UseGuards(JwtAuthGuard)
  async downloadPdf(
    @Param('id') id: string,
    @Request() req,
    @Res() res,
  ) {
    const resume =
      await this.resumesService.downloadResumePdf(
        id,
        req.user.companyId,
        req.user.userId,
        req.user.name,
      );

    const PDFDocument = require('pdfkit');
    const doc = new PDFDocument({
      margin: 50,
      size: 'A4',
    });

    const filename = `resume-${resume.fullName || 'candidate'}.pdf`;

    res.setHeader(
      'Content-Type',
      'application/pdf',
    );

    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${filename}"`,
    );

    doc.pipe(res);

    const data: any = resume.dataJson || {};

    doc
      .fontSize(18)
      .text(data.fullName || resume.fullName || 'Candidato');

    doc.moveDown();

    doc
      .fontSize(11)
      .text(`Email: ${data.email || resume.email || 'N/A'}`);

    doc.text(
      `Telefone: ${data.phones?.join(', ') || 'N/A'
      }`,
    );

    doc.moveDown();

    doc
      .fontSize(14)
      .text('Resumo Profissional');

    doc
      .fontSize(11)
      .text(data.summary || 'N/A');

    doc.moveDown();

    doc
      .fontSize(14)
      .text('Habilidades');

    doc
      .fontSize(11)
      .text(
        data.skills?.join(', ') || 'N/A',
      );

    doc.moveDown();

    doc
      .fontSize(14)
      .text('Experiência Profissional');

    if (data.experience?.length) {
      data.experience.forEach((exp) => {
        doc
          .fontSize(12)
          .text(`${exp.role} - ${exp.company}`);

        doc
          .fontSize(10)
          .text(exp.period || '');

        if (exp.description?.length) {
          exp.description.forEach((item) => {
            doc.text(`• ${item}`);
          });
        }

        doc.moveDown();
      });
    } else {
      doc.text('N/A');
    }

    doc.end();
  }
}