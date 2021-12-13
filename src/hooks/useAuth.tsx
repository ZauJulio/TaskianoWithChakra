import { useContextSelector } from 'use-context-selector'
import { AuthContext, IAuthContext } from '../contexts/AuthContext/Provider'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useAuth(selector: (value: IAuthContext) => any) {
  return useContextSelector(AuthContext, selector)
}
