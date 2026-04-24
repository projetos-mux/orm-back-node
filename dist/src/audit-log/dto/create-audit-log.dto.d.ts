export declare class CreateAuditLogDto {
    entityType: string;
    entityId: string;
    action: string;
    oldValue?: string;
    newValue?: string;
    performedByUserId: string;
    performedByName: string;
}
