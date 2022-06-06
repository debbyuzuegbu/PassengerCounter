
// console.log(count)

let count = 0
function increment() {
    count = count + 1
    document.getElementById("count-el").innerHTML = count
    console.log(count)
}

function save() {
    console.log(count)
} 
save()