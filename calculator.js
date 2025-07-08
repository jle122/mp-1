

function addition() {
    let num1 = document.getElementById("first-number").value
    let num2 = document.getElementById("second-number").value

    first = Number(num1)
    second = Number(num2)

    let result = first + second
    document.getElementById("output").innerHTML = `<h3>${result}</h3>`

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "rgb(255,194,14)";
    }
}

function subtraction() {
    let num1 = document.getElementById("first-number").value
    let num2 = document.getElementById("second-number").value

    first = Number(num1)
    second = Number(num2)

    let result = first - second
    document.getElementById("output").innerHTML = `<h3>${result}</h3>`

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "rgb(255,194,14)";
    }
}

function multiplication() {
    let num1 = document.getElementById("first-number").value
    let num2 = document.getElementById("second-number").value

    first = Number(num1)
    second = Number(num2)

    let result = first * second
    document.getElementById("output").innerHTML = `<h3>${result}</h3>`

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "rgb(255,194,14)";
    }
}

function division() {
    let num1 = document.getElementById("first-number").value
    let num2 = document.getElementById("second-number").value

    first = Number(num1)
    second = Number(num2)

    let result = first / second
    document.getElementById("output").innerHTML = `<h3>${result}</h3>`

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "rgb(255,194,14)";
    }
}

function power() {
    let num1 = document.getElementById("first-number").value
    let num2 = document.getElementById("second-number").value

    first = Number(num1)
    second = Number(num2)

    let result = 1
    for (let i = 0; i < second; i++) {
        result = result * first
    }
    document.getElementById("output").innerHTML = `<h3>${result}</h3>`
    
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "rgb(255,194,14)";
    }
}

function clearInputs() {
    let num1 = document.getElementById("first-number").value
    let num2 = document.getElementById("second-number").value

    document.getElementById("first-number").value = ""
    document.getElementById("second-number").value = ""
    document.getElementById("output").innerHTML = ""
}