export interface ReportData {
  reportResult: {
    id: number
    scenarioId: number
    startingDate: string
    endingDate: string
    createdAt: string
    updatedAt: string
    profitnLoss: ProfitNLoss[]
    metrics: Metrics
    computedFields: ComputedField[]
  }
}
export interface ProfitNLoss extends ReportField {
  financialReportId: number
  type: string
  fields: ProfitNLossField[]
}

export interface ProfitNLossField extends ReportField {
  topLevelFieldId: number | null
  code: null
  uniqueReference: UniqueReference
  order: null
  fieldType: null
  fieldId: number | null
  fields?: ProfitNLossField[]
}

export interface ReportField {
  id: number
  name: string
  description: null
  style: null
  createdAt: string
  updatedAt: string
  outputs: unknown[]
  actualData: ActualData[]
  totalResult: number[]
  result: number[]
  pastMonth: number[]
  yearly: number[]
  quarterly: number[]
  yearlyPastMonth: number[]
  quarterlyPastMonth: number[]
  yearlyResult: number[]
  quarterlyResult: number[]
}

export interface UniqueReference {
  sheetType: string
  integrationSourceId: number | null
  sourceType: "Account" | "Report"
  accountId: null | string
  accountName: null | string
  metric: boolean
}

export interface ActualData {
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
  pnlKeyMetrics: ProfitNLoss
}
