export type Workflow = (typeof workflows)[number]

export const workflows = [
  "Data processing",
  "Endpoints",
  "Training",
  "Serving",
  "Other",
]
