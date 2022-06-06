
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    // Created a variable that contains both the count and the dash separator, i.e. "12 - "
    // Rendered the variable in the saveEl using innerText
    saveEl.innerText += countStr
    console.log(count)
}
