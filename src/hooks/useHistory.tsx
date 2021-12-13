import { useContextSelector } from 'use-context-selector'
import {
  HistoryContext,
  IHistoryContext
} from '../contexts/HistoryContext/Provider'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useHistory(selector: (value: IHistoryContext) => any) {
  return useContextSelector(HistoryContext, selector)
}
