import { useContextSelector } from 'use-context-selector'
import { TasksContext, ITasksContext } from '../contexts/TasksContext/Provider'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useTasks(selector: (value: ITasksContext) => any) {
  return useContextSelector(TasksContext, selector)
}
