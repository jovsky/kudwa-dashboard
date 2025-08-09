import { z } from "zod"

import { ProfitnLossField, PurpleField } from "@/types/reportTypes"

// Enums
const SourceTypeEnum = z.enum(["Account", "Report"])
const SourceEnum = z.enum(["model", "quickbooksonlinesandbox"])

// UniqueReference
export const UniqueReferenceSchema = z.object({
  sheetType: z.string(),
  integrationSourceId: z.number().nullable(),
  sourceType: SourceTypeEnum,
  accountId: z.string().nullable(),
  accountName: z.string().nullable(),
  metric: z.boolean(),
})

// ActualDatum
export const ActualDatumSchema = z.object({
  id: z.number(),
  topLevelFieldId: z.number().nullable(),
  fieldId: z.number(),
  value: z.array(z.number()),
  codatAccountId: z.string().nullable(),
  integrationSourceId: z.number().nullable(),
  source: SourceEnum,
  createdAt: z.string(),
  updatedAt: z.string(),
})

// PurpleField (recursive)
export const ProfitnLossFieldSchema: z.ZodType<ProfitnLossField> = z.lazy(() =>
  z.object({
    id: z.number(),
    topLevelFieldId: z.number(),
    name: z.string(),
    code: z.null(),
    uniqueReference: UniqueReferenceSchema,
    order: z.null(),
    description: z.null(),
    style: z.null(),
    fieldType: z.null(),
    createdAt: z.string(),
    updatedAt: z.string(),
    fieldId: z.number().nullable(),
    outputs: z.array(z.unknown()),
    actualData: z.array(ActualDatumSchema),
    result: z.array(z.number()),
    totalResult: z.array(z.number()),
    pastMonth: z.array(z.number()),
    yearly: z.array(z.number()),
    quarterly: z.array(z.number()),
    yearlyPastMonth: z.array(z.number()),
    quarterlyPastMonth: z.array(z.number()),
    yearlyResult: z.array(z.number()),
    quarterlyResult: z.array(z.number()),
    fields: z.array(z.lazy(() => PurpleFieldSchema)).optional(),
  }),
)

export const PurpleFieldSchema: z.ZodType<PurpleField> = z.lazy(() =>
  z.object({
    id: z.number(),
    topLevelFieldId: z.number(),
    name: z.string(),
    code: z.null(),
    uniqueReference: UniqueReferenceSchema,
    order: z.null(),
    description: z.null(),
    style: z.null(),
    fieldType: z.null(),
    createdAt: z.string(),
    updatedAt: z.string(),
    fieldId: z.number(),
    outputs: z.array(z.unknown()),
    actualData: z.array(ActualDatumSchema),
    result: z.array(z.number()),
    totalResult: z.array(z.number()),
    pastMonth: z.array(z.number()),
    yearly: z.array(z.number()),
    quarterly: z.array(z.number()),
    yearlyPastMonth: z.array(z.number()),
    quarterlyPastMonth: z.array(z.number()),
    yearlyResult: z.array(z.number()),
    quarterlyResult: z.array(z.number()),
    fields: z.array(ProfitnLossFieldSchema).optional(),
  }),
)

// ProfitnLoss
export const ProfitnLossSchema = z.object({
  id: z.number(),
  financialReportId: z.number(),
  name: z.string(),
  type: z.string(),
  description: z.null(),
  style: z.null(),
  createdAt: z.string(),
  updatedAt: z.string(),
  outputs: z.array(z.unknown()),
  actualData: z.array(z.unknown()),
  fields: z.array(ProfitnLossFieldSchema),
  result: z.array(z.number()),
  totalResult: z.array(z.number()),
  pastMonth: z.array(z.number()),
  yearly: z.array(z.number()),
  quarterly: z.array(z.number()),
  yearlyPastMonth: z.array(z.number()),
  quarterlyPastMonth: z.array(z.number()),
  yearlyResult: z.array(z.number()),
  quarterlyResult: z.array(z.number()),
})

// PnlKeyMetricsField
export const PnlKeyMetricsFieldSchema = z.object({
  id: z.number(),
  topLevelFieldId: z.number(),
  name: z.string(),
  code: z.null(),
  uniqueReference: UniqueReferenceSchema,
  order: z.null(),
  description: z.null(),
  style: z.null(),
  fieldType: z.null(),
  createdAt: z.string(),
  updatedAt: z.string(),
  fieldId: z.null(),
  outputs: z.array(z.unknown()),
  actualData: z.array(ActualDatumSchema),
  result: z.array(z.number()),
  totalResult: z.array(z.number()),
  pastMonth: z.array(z.number()),
  yearly: z.array(z.number()),
  quarterly: z.array(z.number()),
  yearlyPastMonth: z.array(z.number()),
  quarterlyPastMonth: z.array(z.number()),
  yearlyResult: z.array(z.number()),
  quarterlyResult: z.array(z.number()),
})

// PnlKeyMetrics
export const PnlKeyMetricsSchema = z.object({
  id: z.number(),
  financialReportId: z.number(),
  name: z.string(),
  type: z.string(),
  description: z.null(),
  style: z.null(),
  createdAt: z.string(),
  updatedAt: z.string(),
  outputs: z.array(z.unknown()),
  actualData: z.array(z.unknown()),
  fields: z.array(PnlKeyMetricsFieldSchema),
  result: z.array(z.number()),
  totalResult: z.array(z.number()),
  pastMonth: z.array(z.number()),
  yearly: z.array(z.number()),
  quarterly: z.array(z.number()),
  yearlyPastMonth: z.array(z.number()),
  quarterlyPastMonth: z.array(z.number()),
  yearlyResult: z.array(z.number()),
  quarterlyResult: z.array(z.number()),
})

// Metrics
export const MetricsSchema = z.object({
  pnlKeyMetrics: PnlKeyMetricsSchema,
})

// ComputedField
export const ComputedFieldSchema = z.object({
  result: z.array(z.number()),
  pastMonth: z.array(z.number()),
  yearly: z.array(z.number()),
  quarterly: z.array(z.number()),
  yearlyPastMonth: z.array(z.number()),
  quarterlyPastMonth: z.array(z.number()),
  currentYearActual: z.array(z.number()),
  currentQuarterActual: z.array(z.number()),
  name: z.string(),
  totalResult: z.array(z.number()).optional(),
})

// ReportResult
export const ReportResultSchema = z.object({
  id: z.number(),
  scenarioId: z.number(),
  startingDate: z.string(),
  endingDate: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  profitnLoss: z.array(ProfitnLossSchema),
  metrics: MetricsSchema,
  computedFields: z.array(ComputedFieldSchema),
})

// ReportData
export const ReportDataSchema = z.object({
  reportResult: ReportResultSchema,
})
