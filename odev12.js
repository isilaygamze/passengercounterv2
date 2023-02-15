let totalEl = document.querySelector("#total-el")
//totalEl.innerHTML="Total people:"

let saveEl = document.getElementById("save-el")
let gecmisBilgi = localStorage.getItem("gecmisBilgi")
if( gecmisBilgi !== null) {
    saveEl.textContent = localStorage.getItem("gecmisBilgi")
} else {
    saveEl.textContent = ""
}

let Arrcount =[]

let total_people = localStorage.getItem("total_people")
if(total_people !==null){
    totalEl.innerHTML= "Total People: " + localStorage.getItem("total_people")
    Arrcount[0] = parseInt(total_people)
}
else{
    totalEl.innerHTML="Total people:"
}


let countEl = document.getElementById("count-el")
let count = 0


function increment() {
    count += 1
    countEl.textContent = count
   total_people=parseInt(total_people)+1
   totalEl.innerHTML = "Total people: "+ total_people
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    localStorage.setItem( "gecmisBilgi", saveEl.textContent )
    Arrcount.push(count)
    console.log(Arrcount)
    let totalpeople = null
    for (let i=0;i<Arrcount.length;i++){
        totalpeople= totalpeople + Arrcount[i]
    }
    console.log(totalpeople)
    totalEl.innerHTML = `Total People : ${totalpeople}`
    localStorage.setItem("total_people", totalpeople)

    countEl.textContent = 0
    count = 0
}


