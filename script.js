let countEl = document.getElementById("count-el") // Display count = 
let saveEl = document.getElementById("save-el") // linked to save button
let count = 0


function increment() {
 count += 1
 countEl.textContent = count
 console.log(count)

}

function save(){
 let countstr = " " + count + " - " 
 saveEl.textContent += countstr 
 countEl.textContent = 0
 console.log(save)
 count = 0
}


