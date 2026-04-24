export const bulkJobs: Record<
  string,
  {
    total: number;
    processed: number;
    processing: number;
    errors: number;
    done: boolean;
  }
> = {};