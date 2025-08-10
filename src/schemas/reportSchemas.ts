import { z } from "zod"

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

// ActualData
export const ActualDataSchema = z.object({
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

// Field
export const ProfitNLossFieldSchema = z.object({
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
  actualData: z.array(ActualDataSchema),
  result: z.array(z.number()),
  totalResult: z.array(z.number()),
  pastMonth: z.array(z.number()),
  yearly: z.array(z.number()),
  quarterly: z.array(z.number()),
  yearlyPastMonth: z.array(z.number()),
  quarterlyPastMonth: z.array(z.number()),
  yearlyResult: z.array(z.number()),
  quarterlyResult: z.array(z.number()),
  // field: z.never(),
})

// ProfitNLoss
export const ProfitNLossSchema = z.object({
  id: z.number(),
  financialReportId: z.number(),
  name: z.string(),
  type: z.string(),
  description: z.null(),
  style: z.null(),
  createdAt: z.string(),
  updatedAt: z.string(),
  outputs: z.array(z.unknown()),
  actualData: z.array(ActualDataSchema),
  fields: z.array(ProfitNLossFieldSchema),
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
  pnlKeyMetrics: ProfitNLossSchema,
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

// ReportData
export const ReportDataSchema = z.object({
  reportResult: z.object({
    id: z.number(),
    scenarioId: z.number(),
    startingDate: z.string(),
    endingDate: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    profitnLoss: z.array(ProfitNLossSchema),
    metrics: MetricsSchema,
    computedFields: z.array(ComputedFieldSchema),
  }),
})
