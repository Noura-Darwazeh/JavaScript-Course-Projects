let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let randomIndex1 = Math.floor(Math.random() * fighters.length) // 0-2.9999
    let randomIndex2 = Math.floor(Math.random() * fighters.length) // 0-2.9999
    stageEl.textContent=fighters[randomIndex1]+" vs " +fighters[randomIndex2];
})