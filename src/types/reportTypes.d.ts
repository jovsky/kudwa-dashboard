export interface ReportData {
  reportResult: ReportResult
}

export interface ReportResult {
  id: number
  scenarioId: number
  startingDate: string
  endingDate: string
  createdAt: string
  updatedAt: string
  profitnLoss: ProfitnLoss[]
  metrics: Metrics
  computedFields: ComputedField[]
}

export interface ComputedField {
  result: number[]
  pastMonth: number[]
  yearly: number[]
  quarterly: number[]
  yearlyPastMonth: number[]
  quarterlyPastMonth: number[]
  currentYearActual: number[]
  currentQuarterActual: number[]
  name: string
  totalResult?: number[]
}

export interface Metrics {
  pnlKeyMetrics: PnlKeyMetrics
}

export interface PnlKeyMetrics {
  id: number
  financialReportId: number
  name: string
  type: string
  description: null
  style: null
  createdAt: string
  updatedAt: string
  outputs: unknown[]
  actualData: unknown[]
  fields: PnlKeyMetricsField[]
  result: number[]
  totalResult: number[]
  pastMonth: number[]
  yearly: number[]
  quarterly: number[]
  yearlyPastMonth: number[]
  quarterlyPastMonth: number[]
  yearlyResult: number[]
  quarterlyResult: number[]
}

export interface PnlKeyMetricsField {
  id: number
  topLevelFieldId: number | null
  name: string
  code: null
  uniqueReference: UniqueReference
  order: null
  description: null
  style: null
  fieldType: null
  createdAt: string
  updatedAt: string
  fieldId: null
  outputs: unknown[]
  actualData: ActualDatum[]
  result: number[]
  totalResult: number[]
  pastMonth: number[]
  yearly: number[]
  quarterly: number[]
  yearlyPastMonth: number[]
  quarterlyPastMonth: number[]
  yearlyResult: number[]
  quarterlyResult: number[]
}

export interface ActualDatum {
  id: number
  topLevelFieldId: number | null
  fieldId: number
  value: number[]
  codatAccountId: null | string
  integrationSourceId: number | null
  source: "model" | "quickbooksonlinesandbox"
  createdAt: string
  updatedAt: string
}

type Source = "model" | "quickbooksonlinesandbox"

export interface UniqueReference {
  sheetType: string
  integrationSourceId: number | null
  sourceType: "Account" | "Report"
  accountId: null | string
  accountName: null | string
  metric: boolean
}
export interface ProfitnLoss {
  id: number
  financialReportId: number
  name: string
  type: string
  description: null
  style: null
  createdAt: string
  updatedAt: string
  outputs: unknown[]
  actualData: unknown[]
  fields: ProfitnLossField[]
  result: number[]
  totalResult: number[]
  pastMonth: number[]
  yearly: number[]
  quarterly: number[]
  yearlyPastMonth: number[]
  quarterlyPastMonth: number[]
  yearlyResult: number[]
  quarterlyResult: number[]
}

export interface PurpleField {
  id: number
  topLevelFieldId: number | null
  name: string
  code: null
  uniqueReference: UniqueReference
  order: null
  description: null
  style: null
  fieldType: null
  createdAt: string
  updatedAt: string
  fieldId: number
  outputs: unknown[]
  actualData: ActualDatum[]
  result: number[]
  totalResult: number[]
  pastMonth: number[]
  yearly: number[]
  quarterly: number[]
  yearlyPastMonth: number[]
  quarterlyPastMonth: number[]
  yearlyResult: number[]
  quarterlyResult: number[]
  fields?: ProfitnLossField[]
}

export interface ProfitnLossField {
  id: number
  topLevelFieldId: number | null
  name: string
  code: null
  uniqueReference: UniqueReference
  order: null
  description: null
  style: null
  fieldType: null
  createdAt: string
  updatedAt: string
  fieldId: number | null
  outputs: unknown[]
  actualData: ActualDatum[]
  result: number[]
  totalResult: number[]
  pastMonth: number[]
  yearly: number[]
  quarterly: number[]
  yearlyPastMonth: number[]
  quarterlyPastMonth: number[]
  yearlyResult: number[]
  quarterlyResult: number[]
  fields?: PurpleField[]
}
