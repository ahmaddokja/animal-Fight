let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stagEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {

let onerandom = Math.floor( Math.random() * fighters.length )
let tworandom = Math.floor( Math.random() * fighters.length )
stagEl.textContent = fighters[onerandom] + " VS " + fighters[tworandom]

})

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]

let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
let fruut = document.getElementById("frubut")
// let hgjmk = document.getElementById("frubut")

fruut.addEventListener("click", sortfruit)

function sortfruit() {
for (i = 0; i < fruit.length; i++){
if (fruit[i] === "🍎") {
    appleShelf.textContent +="🍎"
} else if (fruit[i] === "🍊") {
    orangeShelf.textContent += "🍊"
}
}
}

