var toggleTracker1 = 0
var toggleTracker2 = 0
var toggleTracker3 = 0
// on click of each toggle, you want to run an if statement where if the toggle equals zero, ++. If it equals 1, --. Then for the life expectancy, for every toggle tracker that's on (add up all the toggle trackers and it will be a number betwen 0 and 3), add three years
var lifeTime = 71
var lifeSpan = document.getElementById("lifeSpan")
lifeSpan.setAttribute("style", "color: red")
lifeSpan.innerHTML = lifeTime + " Years"

var plusTime = document.getElementById("plusTime")


var toggleStyle = document.getElementsByClassName('toggleStyle')


for (let i = 0; i < toggleStyle.length; i++) {
    toggleStyle[i].addEventListener("click", function () {
        if (lifeTime == 71) {
            lifeSpan.setAttribute("style", "color: red")
        }
        else if (lifeTime == 74) {
            lifeSpan.setAttribute("style", "color: rgb(255, 136, 0)")
        }
        else if (lifeTime == 77) {
            lifeSpan.setAttribute("style", "color: rgb(160, 204, 0)")
        }
        else if (lifeTime == 80) {
            lifeSpan.setAttribute("style", "color: rgb(17, 207, 0)")
            lifeSpan.innerHTML = " " + lifeTime + "+ Years!"
        }
    })
}





function toggle1() {
    if (toggleTracker1 == 0) {
        toggleTracker1++
        lifeTime += 3
        lifeSpan.innerHTML = lifeTime + " Years"
        plusFunction()
    }
    else {
        toggleTracker1--
        lifeTime -= 3
        lifeSpan.innerHTML = lifeTime + " Years"
    }
    console.log(toggleTracker1)
    console.log(lifeTime)
}

function toggle2() {
    if (toggleTracker2 == 0) {
        toggleTracker2++
        lifeTime += 3
        lifeSpan.innerHTML = lifeTime + " Years"
        plusFunction()
    }
    else {
        toggleTracker2--
        lifeTime -= 3
        lifeSpan.innerHTML = lifeTime + " Years"
    }
    console.log(toggleTracker2)
}

function toggle3() {
    if (toggleTracker3 == 0) {
        toggleTracker3++
        lifeTime += 3
        lifeSpan.innerHTML = lifeTime + " Years"
        plusFunction()
    }
    else {
        toggleTracker3--
        lifeTime -= 3
        lifeSpan.innerHTML = lifeTime + " Years"
    }
    console.log(toggleTracker3)
}


function plusFunction() {
    plusTime.setAttribute("style", "opacity: 1")
    setTimeout(function () {
        plusTime.setAttribute("style", "opacity: 0")
    }, 1000)
}


// up to +9 years with tackling diabetes, up to 9 years with other healthy lifestyle changes

// animation so that when they click a slider, there's a "+3" in green that briefly appears, and then disappears next to the life expectancy years


