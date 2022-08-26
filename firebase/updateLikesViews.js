import app from './app.js'
import { getFirestore, setDoc, doc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

const db = getFirestore(app)
const counterLikesViewsCollection = doc(db, 'counter-likes-views', 'KReYfmPxaUjwVruijDuu')

export default async function updateLikesViews(numberLikes, numberViews) {
    await setDoc(counterLikesViewsCollection, {
        likes: numberLikes,
        views: numberViews
    })
}