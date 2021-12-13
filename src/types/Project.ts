interface IProject {
  id?: string
  name?: string
  created_at?: Date
  closed_in?: Date | null
  description?: string
  color?: number
  hasArchived?: boolean

  tasks?: string[]
  userId?: string
}

export default IProject
