import { useContextSelector } from 'use-context-selector'
import {
  ProjectsContext,
  IProjectsContext
} from '../contexts/ProjectsContext/Provider'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useProjects(selector: (value: IProjectsContext) => any) {
  return useContextSelector(ProjectsContext, selector)
}
