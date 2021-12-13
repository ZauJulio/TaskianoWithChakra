import { collection } from 'firebase/firestore'

import { firestore } from 'lib/services/Firebase'

const ProjectRef = collection(firestore, 'project')

export default ProjectRef
