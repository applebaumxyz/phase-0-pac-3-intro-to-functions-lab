
function exampleFunction() {
    console.log('hello from this example!')
}


function shout(string) {
    return string.toUpperCase();
}



function whisper(string) {
    return string.toLowerCase()
}

whisper("IT'S WORKING?")

function logShout(string) {
    console.log(string.toUpperCase())
}

logShout("this is working - keep it up")


function exampleFunction () {
    console.log('hello from this example!')
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

logWhisper("YOU DID IT!!!!")


function exampleFunction() {
    console.log()
}


function sayHiToGrandma(string) {
    if (string.toLowerCase() === string) {
        return ("I can't hear you!")
    } else if (string.toUpperCase() === string) {
        return ("YES INDEED!")
    } else if (string === "I love you, Grandma.") {
        return ("I love you, too.")
    } 
}

sayHiToGrandma("hey i'm lowercase")
sayHiToGrandma("I love you, Grandma")
sayHiToGrandma("I'M ALL CAPS'")

/*
if (sayHiToGrandma(string).toUpperCase() == true) {
    return
}

if (sayHiToGrandma("I love you, Grandma") == true)

console.log(sayHiToGrandma("I love you, Grandma"))
*/

