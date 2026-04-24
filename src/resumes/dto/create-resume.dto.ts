export class CreateResumeDto {
  fileName!: string;
  fullName?: string;
  email?: string;
  confidence?: number;
  processingMs?: number;
  costBrl?: number;
  dataJson?: any;
}