import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ResumeModel = runtime.Types.Result.DefaultSelection<Prisma.$ResumePayload>;
export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null;
    _avg: ResumeAvgAggregateOutputType | null;
    _sum: ResumeSumAggregateOutputType | null;
    _min: ResumeMinAggregateOutputType | null;
    _max: ResumeMaxAggregateOutputType | null;
};
export type ResumeAvgAggregateOutputType = {
    confidence: number | null;
    processingMs: number | null;
    costBrl: number | null;
};
export type ResumeSumAggregateOutputType = {
    confidence: number | null;
    processingMs: number | null;
    costBrl: number | null;
};
export type ResumeMinAggregateOutputType = {
    id: string | null;
    fileName: string | null;
    fullName: string | null;
    email: string | null;
    confidence: number | null;
    processingMs: number | null;
    costBrl: number | null;
    createdAt: Date | null;
    dataJson: string | null;
    companyId: string | null;
};
export type ResumeMaxAggregateOutputType = {
    id: string | null;
    fileName: string | null;
    fullName: string | null;
    email: string | null;
    confidence: number | null;
    processingMs: number | null;
    costBrl: number | null;
    createdAt: Date | null;
    dataJson: string | null;
    companyId: string | null;
};
export type ResumeCountAggregateOutputType = {
    id: number;
    fileName: number;
    fullName: number;
    email: number;
    confidence: number;
    processingMs: number;
    costBrl: number;
    createdAt: number;
    dataJson: number;
    companyId: number;
    _all: number;
};
export type ResumeAvgAggregateInputType = {
    confidence?: true;
    processingMs?: true;
    costBrl?: true;
};
export type ResumeSumAggregateInputType = {
    confidence?: true;
    processingMs?: true;
    costBrl?: true;
};
export type ResumeMinAggregateInputType = {
    id?: true;
    fileName?: true;
    fullName?: true;
    email?: true;
    confidence?: true;
    processingMs?: true;
    costBrl?: true;
    createdAt?: true;
    dataJson?: true;
    companyId?: true;
};
export type ResumeMaxAggregateInputType = {
    id?: true;
    fileName?: true;
    fullName?: true;
    email?: true;
    confidence?: true;
    processingMs?: true;
    costBrl?: true;
    createdAt?: true;
    dataJson?: true;
    companyId?: true;
};
export type ResumeCountAggregateInputType = {
    id?: true;
    fileName?: true;
    fullName?: true;
    email?: true;
    confidence?: true;
    processingMs?: true;
    costBrl?: true;
    createdAt?: true;
    dataJson?: true;
    companyId?: true;
    _all?: true;
};
export type ResumeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeWhereInput;
    orderBy?: Prisma.ResumeOrderByWithRelationInput | Prisma.ResumeOrderByWithRelationInput[];
    cursor?: Prisma.ResumeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ResumeCountAggregateInputType;
    _avg?: ResumeAvgAggregateInputType;
    _sum?: ResumeSumAggregateInputType;
    _min?: ResumeMinAggregateInputType;
    _max?: ResumeMaxAggregateInputType;
};
export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
    [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateResume[P]> : Prisma.GetScalarType<T[P], AggregateResume[P]>;
};
export type ResumeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeWhereInput;
    orderBy?: Prisma.ResumeOrderByWithAggregationInput | Prisma.ResumeOrderByWithAggregationInput[];
    by: Prisma.ResumeScalarFieldEnum[] | Prisma.ResumeScalarFieldEnum;
    having?: Prisma.ResumeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ResumeCountAggregateInputType | true;
    _avg?: ResumeAvgAggregateInputType;
    _sum?: ResumeSumAggregateInputType;
    _min?: ResumeMinAggregateInputType;
    _max?: ResumeMaxAggregateInputType;
};
export type ResumeGroupByOutputType = {
    id: string;
    fileName: string;
    fullName: string | null;
    email: string | null;
    confidence: number | null;
    processingMs: number | null;
    costBrl: number | null;
    createdAt: Date | null;
    dataJson: string;
    companyId: string;
    _count: ResumeCountAggregateOutputType | null;
    _avg: ResumeAvgAggregateOutputType | null;
    _sum: ResumeSumAggregateOutputType | null;
    _min: ResumeMinAggregateOutputType | null;
    _max: ResumeMaxAggregateOutputType | null;
};
type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ResumeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ResumeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ResumeGroupByOutputType[P]>;
}>>;
export type ResumeWhereInput = {
    AND?: Prisma.ResumeWhereInput | Prisma.ResumeWhereInput[];
    OR?: Prisma.ResumeWhereInput[];
    NOT?: Prisma.ResumeWhereInput | Prisma.ResumeWhereInput[];
    id?: Prisma.StringFilter<"Resume"> | string;
    fileName?: Prisma.StringFilter<"Resume"> | string;
    fullName?: Prisma.StringNullableFilter<"Resume"> | string | null;
    email?: Prisma.StringNullableFilter<"Resume"> | string | null;
    confidence?: Prisma.FloatNullableFilter<"Resume"> | number | null;
    processingMs?: Prisma.IntNullableFilter<"Resume"> | number | null;
    costBrl?: Prisma.FloatNullableFilter<"Resume"> | number | null;
    createdAt?: Prisma.DateTimeNullableFilter<"Resume"> | Date | string | null;
    dataJson?: Prisma.StringFilter<"Resume"> | string;
    companyId?: Prisma.StringFilter<"Resume"> | string;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
};
export type ResumeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fullName?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    confidence?: Prisma.SortOrderInput | Prisma.SortOrder;
    processingMs?: Prisma.SortOrderInput | Prisma.SortOrder;
    costBrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    dataJson?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    company?: Prisma.CompanyOrderByWithRelationInput;
};
export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ResumeWhereInput | Prisma.ResumeWhereInput[];
    OR?: Prisma.ResumeWhereInput[];
    NOT?: Prisma.ResumeWhereInput | Prisma.ResumeWhereInput[];
    fileName?: Prisma.StringFilter<"Resume"> | string;
    fullName?: Prisma.StringNullableFilter<"Resume"> | string | null;
    email?: Prisma.StringNullableFilter<"Resume"> | string | null;
    confidence?: Prisma.FloatNullableFilter<"Resume"> | number | null;
    processingMs?: Prisma.IntNullableFilter<"Resume"> | number | null;
    costBrl?: Prisma.FloatNullableFilter<"Resume"> | number | null;
    createdAt?: Prisma.DateTimeNullableFilter<"Resume"> | Date | string | null;
    dataJson?: Prisma.StringFilter<"Resume"> | string;
    companyId?: Prisma.StringFilter<"Resume"> | string;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
}, "id">;
export type ResumeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fullName?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    confidence?: Prisma.SortOrderInput | Prisma.SortOrder;
    processingMs?: Prisma.SortOrderInput | Prisma.SortOrder;
    costBrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    dataJson?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    _count?: Prisma.ResumeCountOrderByAggregateInput;
    _avg?: Prisma.ResumeAvgOrderByAggregateInput;
    _max?: Prisma.ResumeMaxOrderByAggregateInput;
    _min?: Prisma.ResumeMinOrderByAggregateInput;
    _sum?: Prisma.ResumeSumOrderByAggregateInput;
};
export type ResumeScalarWhereWithAggregatesInput = {
    AND?: Prisma.ResumeScalarWhereWithAggregatesInput | Prisma.ResumeScalarWhereWithAggregatesInput[];
    OR?: Prisma.ResumeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ResumeScalarWhereWithAggregatesInput | Prisma.ResumeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Resume"> | string;
    fileName?: Prisma.StringWithAggregatesFilter<"Resume"> | string;
    fullName?: Prisma.StringNullableWithAggregatesFilter<"Resume"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Resume"> | string | null;
    confidence?: Prisma.FloatNullableWithAggregatesFilter<"Resume"> | number | null;
    processingMs?: Prisma.IntNullableWithAggregatesFilter<"Resume"> | number | null;
    costBrl?: Prisma.FloatNullableWithAggregatesFilter<"Resume"> | number | null;
    createdAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Resume"> | Date | string | null;
    dataJson?: Prisma.StringWithAggregatesFilter<"Resume"> | string;
    companyId?: Prisma.StringWithAggregatesFilter<"Resume"> | string;
};
export type ResumeCreateInput = {
    id?: string;
    fileName: string;
    fullName?: string | null;
    email?: string | null;
    confidence?: number | null;
    processingMs?: number | null;
    costBrl?: number | null;
    createdAt?: Date | string | null;
    dataJson: string;
    company: Prisma.CompanyCreateNestedOneWithoutResumesInput;
};
export type ResumeUncheckedCreateInput = {
    id?: string;
    fileName: string;
    fullName?: string | null;
    email?: string | null;
    confidence?: number | null;
    processingMs?: number | null;
    costBrl?: number | null;
    createdAt?: Date | string | null;
    dataJson: string;
    companyId: string;
};
export type ResumeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    processingMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    costBrl?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dataJson?: Prisma.StringFieldUpdateOperationsInput | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutResumesNestedInput;
};
export type ResumeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    processingMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    costBrl?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dataJson?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ResumeCreateManyInput = {
    id?: string;
    fileName: string;
    fullName?: string | null;
    email?: string | null;
    confidence?: number | null;
    processingMs?: number | null;
    costBrl?: number | null;
    createdAt?: Date | string | null;
    dataJson: string;
    companyId: string;
};
export type ResumeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    processingMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    costBrl?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dataJson?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ResumeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    processingMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    costBrl?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dataJson?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ResumeListRelationFilter = {
    every?: Prisma.ResumeWhereInput;
    some?: Prisma.ResumeWhereInput;
    none?: Prisma.ResumeWhereInput;
};
export type ResumeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ResumeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    processingMs?: Prisma.SortOrder;
    costBrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    dataJson?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
};
export type ResumeAvgOrderByAggregateInput = {
    confidence?: Prisma.SortOrder;
    processingMs?: Prisma.SortOrder;
    costBrl?: Prisma.SortOrder;
};
export type ResumeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    processingMs?: Prisma.SortOrder;
    costBrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    dataJson?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
};
export type ResumeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    processingMs?: Prisma.SortOrder;
    costBrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    dataJson?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
};
export type ResumeSumOrderByAggregateInput = {
    confidence?: Prisma.SortOrder;
    processingMs?: Prisma.SortOrder;
    costBrl?: Prisma.SortOrder;
};
export type ResumeCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.ResumeCreateWithoutCompanyInput, Prisma.ResumeUncheckedCreateWithoutCompanyInput> | Prisma.ResumeCreateWithoutCompanyInput[] | Prisma.ResumeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.ResumeCreateOrConnectWithoutCompanyInput | Prisma.ResumeCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.ResumeCreateManyCompanyInputEnvelope;
    connect?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
};
export type ResumeUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.ResumeCreateWithoutCompanyInput, Prisma.ResumeUncheckedCreateWithoutCompanyInput> | Prisma.ResumeCreateWithoutCompanyInput[] | Prisma.ResumeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.ResumeCreateOrConnectWithoutCompanyInput | Prisma.ResumeCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.ResumeCreateManyCompanyInputEnvelope;
    connect?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
};
export type ResumeUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.ResumeCreateWithoutCompanyInput, Prisma.ResumeUncheckedCreateWithoutCompanyInput> | Prisma.ResumeCreateWithoutCompanyInput[] | Prisma.ResumeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.ResumeCreateOrConnectWithoutCompanyInput | Prisma.ResumeCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.ResumeUpsertWithWhereUniqueWithoutCompanyInput | Prisma.ResumeUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.ResumeCreateManyCompanyInputEnvelope;
    set?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    disconnect?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    delete?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    connect?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    update?: Prisma.ResumeUpdateWithWhereUniqueWithoutCompanyInput | Prisma.ResumeUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.ResumeUpdateManyWithWhereWithoutCompanyInput | Prisma.ResumeUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.ResumeScalarWhereInput | Prisma.ResumeScalarWhereInput[];
};
export type ResumeUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.ResumeCreateWithoutCompanyInput, Prisma.ResumeUncheckedCreateWithoutCompanyInput> | Prisma.ResumeCreateWithoutCompanyInput[] | Prisma.ResumeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.ResumeCreateOrConnectWithoutCompanyInput | Prisma.ResumeCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.ResumeUpsertWithWhereUniqueWithoutCompanyInput | Prisma.ResumeUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.ResumeCreateManyCompanyInputEnvelope;
    set?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    disconnect?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    delete?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    connect?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    update?: Prisma.ResumeUpdateWithWhereUniqueWithoutCompanyInput | Prisma.ResumeUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.ResumeUpdateManyWithWhereWithoutCompanyInput | Prisma.ResumeUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.ResumeScalarWhereInput | Prisma.ResumeScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type ResumeCreateWithoutCompanyInput = {
    id?: string;
    fileName: string;
    fullName?: string | null;
    email?: string | null;
    confidence?: number | null;
    processingMs?: number | null;
    costBrl?: number | null;
    createdAt?: Date | string | null;
    dataJson: string;
};
export type ResumeUncheckedCreateWithoutCompanyInput = {
    id?: string;
    fileName: string;
    fullName?: string | null;
    email?: string | null;
    confidence?: number | null;
    processingMs?: number | null;
    costBrl?: number | null;
    createdAt?: Date | string | null;
    dataJson: string;
};
export type ResumeCreateOrConnectWithoutCompanyInput = {
    where: Prisma.ResumeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResumeCreateWithoutCompanyInput, Prisma.ResumeUncheckedCreateWithoutCompanyInput>;
};
export type ResumeCreateManyCompanyInputEnvelope = {
    data: Prisma.ResumeCreateManyCompanyInput | Prisma.ResumeCreateManyCompanyInput[];
    skipDuplicates?: boolean;
};
export type ResumeUpsertWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.ResumeWhereUniqueInput;
    update: Prisma.XOR<Prisma.ResumeUpdateWithoutCompanyInput, Prisma.ResumeUncheckedUpdateWithoutCompanyInput>;
    create: Prisma.XOR<Prisma.ResumeCreateWithoutCompanyInput, Prisma.ResumeUncheckedCreateWithoutCompanyInput>;
};
export type ResumeUpdateWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.ResumeWhereUniqueInput;
    data: Prisma.XOR<Prisma.ResumeUpdateWithoutCompanyInput, Prisma.ResumeUncheckedUpdateWithoutCompanyInput>;
};
export type ResumeUpdateManyWithWhereWithoutCompanyInput = {
    where: Prisma.ResumeScalarWhereInput;
    data: Prisma.XOR<Prisma.ResumeUpdateManyMutationInput, Prisma.ResumeUncheckedUpdateManyWithoutCompanyInput>;
};
export type ResumeScalarWhereInput = {
    AND?: Prisma.ResumeScalarWhereInput | Prisma.ResumeScalarWhereInput[];
    OR?: Prisma.ResumeScalarWhereInput[];
    NOT?: Prisma.ResumeScalarWhereInput | Prisma.ResumeScalarWhereInput[];
    id?: Prisma.StringFilter<"Resume"> | string;
    fileName?: Prisma.StringFilter<"Resume"> | string;
    fullName?: Prisma.StringNullableFilter<"Resume"> | string | null;
    email?: Prisma.StringNullableFilter<"Resume"> | string | null;
    confidence?: Prisma.FloatNullableFilter<"Resume"> | number | null;
    processingMs?: Prisma.IntNullableFilter<"Resume"> | number | null;
    costBrl?: Prisma.FloatNullableFilter<"Resume"> | number | null;
    createdAt?: Prisma.DateTimeNullableFilter<"Resume"> | Date | string | null;
    dataJson?: Prisma.StringFilter<"Resume"> | string;
    companyId?: Prisma.StringFilter<"Resume"> | string;
};
export type ResumeCreateManyCompanyInput = {
    id?: string;
    fileName: string;
    fullName?: string | null;
    email?: string | null;
    confidence?: number | null;
    processingMs?: number | null;
    costBrl?: number | null;
    createdAt?: Date | string | null;
    dataJson: string;
};
export type ResumeUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    processingMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    costBrl?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dataJson?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ResumeUncheckedUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    processingMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    costBrl?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dataJson?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ResumeUncheckedUpdateManyWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    processingMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    costBrl?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dataJson?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ResumeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fileName?: boolean;
    fullName?: boolean;
    email?: boolean;
    confidence?: boolean;
    processingMs?: boolean;
    costBrl?: boolean;
    createdAt?: boolean;
    dataJson?: boolean;
    companyId?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["resume"]>;
export type ResumeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fileName?: boolean;
    fullName?: boolean;
    email?: boolean;
    confidence?: boolean;
    processingMs?: boolean;
    costBrl?: boolean;
    createdAt?: boolean;
    dataJson?: boolean;
    companyId?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["resume"]>;
export type ResumeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fileName?: boolean;
    fullName?: boolean;
    email?: boolean;
    confidence?: boolean;
    processingMs?: boolean;
    costBrl?: boolean;
    createdAt?: boolean;
    dataJson?: boolean;
    companyId?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["resume"]>;
export type ResumeSelectScalar = {
    id?: boolean;
    fileName?: boolean;
    fullName?: boolean;
    email?: boolean;
    confidence?: boolean;
    processingMs?: boolean;
    costBrl?: boolean;
    createdAt?: boolean;
    dataJson?: boolean;
    companyId?: boolean;
};
export type ResumeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fileName" | "fullName" | "email" | "confidence" | "processingMs" | "costBrl" | "createdAt" | "dataJson" | "companyId", ExtArgs["result"]["resume"]>;
export type ResumeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type ResumeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type ResumeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type $ResumePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Resume";
    objects: {
        company: Prisma.$CompanyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        fileName: string;
        fullName: string | null;
        email: string | null;
        confidence: number | null;
        processingMs: number | null;
        costBrl: number | null;
        createdAt: Date | null;
        dataJson: string;
        companyId: string;
    }, ExtArgs["result"]["resume"]>;
    composites: {};
};
export type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ResumePayload, S>;
export type ResumeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ResumeCountAggregateInputType | true;
};
export interface ResumeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Resume'];
        meta: {
            name: 'Resume';
        };
    };
    findUnique<T extends ResumeFindUniqueArgs>(args: Prisma.SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ResumeFindFirstArgs>(args?: Prisma.SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ResumeFindManyArgs>(args?: Prisma.SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ResumeCreateArgs>(args: Prisma.SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ResumeCreateManyArgs>(args?: Prisma.SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ResumeDeleteArgs>(args: Prisma.SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ResumeUpdateArgs>(args: Prisma.SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ResumeDeleteManyArgs>(args?: Prisma.SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ResumeUpdateManyArgs>(args: Prisma.SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ResumeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ResumeUpsertArgs>(args: Prisma.SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ResumeCountArgs>(args?: Prisma.Subset<T, ResumeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ResumeCountAggregateOutputType> : number>;
    aggregate<T extends ResumeAggregateArgs>(args: Prisma.Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>;
    groupBy<T extends ResumeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ResumeGroupByArgs['orderBy'];
    } : {
        orderBy?: ResumeGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ResumeFieldRefs;
}
export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    company<T extends Prisma.CompanyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CompanyDefaultArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ResumeFieldRefs {
    readonly id: Prisma.FieldRef<"Resume", 'String'>;
    readonly fileName: Prisma.FieldRef<"Resume", 'String'>;
    readonly fullName: Prisma.FieldRef<"Resume", 'String'>;
    readonly email: Prisma.FieldRef<"Resume", 'String'>;
    readonly confidence: Prisma.FieldRef<"Resume", 'Float'>;
    readonly processingMs: Prisma.FieldRef<"Resume", 'Int'>;
    readonly costBrl: Prisma.FieldRef<"Resume", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"Resume", 'DateTime'>;
    readonly dataJson: Prisma.FieldRef<"Resume", 'String'>;
    readonly companyId: Prisma.FieldRef<"Resume", 'String'>;
}
export type ResumeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where: Prisma.ResumeWhereUniqueInput;
};
export type ResumeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where: Prisma.ResumeWhereUniqueInput;
};
export type ResumeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where?: Prisma.ResumeWhereInput;
    orderBy?: Prisma.ResumeOrderByWithRelationInput | Prisma.ResumeOrderByWithRelationInput[];
    cursor?: Prisma.ResumeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ResumeScalarFieldEnum | Prisma.ResumeScalarFieldEnum[];
};
export type ResumeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where?: Prisma.ResumeWhereInput;
    orderBy?: Prisma.ResumeOrderByWithRelationInput | Prisma.ResumeOrderByWithRelationInput[];
    cursor?: Prisma.ResumeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ResumeScalarFieldEnum | Prisma.ResumeScalarFieldEnum[];
};
export type ResumeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where?: Prisma.ResumeWhereInput;
    orderBy?: Prisma.ResumeOrderByWithRelationInput | Prisma.ResumeOrderByWithRelationInput[];
    cursor?: Prisma.ResumeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ResumeScalarFieldEnum | Prisma.ResumeScalarFieldEnum[];
};
export type ResumeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ResumeCreateInput, Prisma.ResumeUncheckedCreateInput>;
};
export type ResumeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ResumeCreateManyInput | Prisma.ResumeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ResumeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    data: Prisma.ResumeCreateManyInput | Prisma.ResumeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ResumeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ResumeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ResumeUpdateInput, Prisma.ResumeUncheckedUpdateInput>;
    where: Prisma.ResumeWhereUniqueInput;
};
export type ResumeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ResumeUpdateManyMutationInput, Prisma.ResumeUncheckedUpdateManyInput>;
    where?: Prisma.ResumeWhereInput;
    limit?: number;
};
export type ResumeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ResumeUpdateManyMutationInput, Prisma.ResumeUncheckedUpdateManyInput>;
    where?: Prisma.ResumeWhereInput;
    limit?: number;
    include?: Prisma.ResumeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ResumeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where: Prisma.ResumeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResumeCreateInput, Prisma.ResumeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ResumeUpdateInput, Prisma.ResumeUncheckedUpdateInput>;
};
export type ResumeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where: Prisma.ResumeWhereUniqueInput;
};
export type ResumeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeWhereInput;
    limit?: number;
};
export type ResumeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
};
export {};
