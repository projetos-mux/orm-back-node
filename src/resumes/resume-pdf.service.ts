import { Injectable } from '@nestjs/common';

@Injectable()
export class ResumePdfService {
  generate(
    resume: any,
    res: any,
  ) {
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

    const data = resume.dataJson || {};

    doc
      .fontSize(18)
      .text(
        data.fullName ||
        resume.fullName ||
        'Candidato',
      );

    doc.moveDown();

    doc
      .fontSize(11)
      .text(
        `Email: ${
          data.email ||
          resume.email ||
          'N/A'
        }`,
      );

    doc.text(
      `Telefone: ${
        data.phones?.join(', ') ||
        'N/A'
      }`,
    );

    doc.moveDown();

    doc
      .fontSize(14)
      .text(
        'Resumo Profissional',
      );

    doc
      .fontSize(11)
      .text(
        data.summary || 'N/A',
      );

    doc.moveDown();

    doc
      .fontSize(14)
      .text('Habilidades');

    doc
      .fontSize(11)
      .text(
        data.skills?.join(', ') ||
        'N/A',
      );

    doc.moveDown();

    doc
      .fontSize(14)
      .text(
        'Experiência Profissional',
      );

    if (data.experience?.length) {
      data.experience.forEach(
        (exp) => {
          doc
            .fontSize(12)
            .text(exp.role);

          doc
            .fontSize(12)
            .text(exp.company);

          doc
            .fontSize(10)
            .text(
              exp.period || '',
            );

          if (
            exp.description?.length
          ) {
            exp.description.forEach(
              (item) => {
                doc.text(
                  `• ${item}`,
                );
              },
            );
          }

          doc.moveDown();
        },
      );
    } else {
      doc.text('N/A');
    }

    doc.end();
  }
}