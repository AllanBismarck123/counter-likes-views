import app from './app.js'
import { getFirestore, getDoc, doc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

const db = getFirestore(app)
const counterLikesViewsCollection = doc(db, 'counter-likes-views', 'KReYfmPxaUjwVruijDuu')
const data = await getDoc(counterLikesViewsCollection)

export default async function loadValues() {
    return(data.data())
}