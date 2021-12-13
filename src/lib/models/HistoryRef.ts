import { collection } from 'firebase/firestore'

import { firestore } from 'lib/services/Firebase'

const HistoryRef = collection(firestore, 'history')

export default HistoryRef
