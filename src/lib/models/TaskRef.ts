import { collection } from 'firebase/firestore'

import { firestore } from 'lib/services/Firebase'

const TaskRef = collection(firestore, 'task')

export default TaskRef
