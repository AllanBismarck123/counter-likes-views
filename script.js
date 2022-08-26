import loadValues from "./firebase/loadValues.js"
import updateLikesViews from "./firebase/updateLikesViews.js"

var countLikes = 0
var countViews
var clickme = document.getElementById('clickme')
var numberlikes = document.getElementById('numberlikes')
var numberviews = document.getElementById('numberviews')


async function getLikes_Views() {
    const data = await loadValues()
    countLikes = data.likes
    countViews = data.views
    countViews++
    numberlikes.innerHTML = countLikes
    numberviews.innerHTML = countViews
    await updateLikesViews(countLikes, countViews)
}

async function incrementLikes() {
    countLikes++
    numberlikes.innerHTML = countLikes
    await updateLikesViews(countLikes, countViews)
}

window.addEventListener('load', await getLikes_Views())

clickme.addEventListener('click', incrementLikes)