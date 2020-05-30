export type ActionSheetOption = {
  label: string | number
  value: string | number
  warn?: boolean
  disabled?: boolean
}
export type ActionSheetValue = {
  label: string | number
  value: string | number
}
export type ActionSheetOptions = Array<ActionSheetOption>
