import { collection } from 'firebase/firestore'

import { firestore } from 'lib/services/Firebase'

const UserRef = collection(firestore, 'user')

export default UserRef
