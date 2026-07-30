function sayMyName(name){
    console.log ("Hello " + "Yasmin")
}

let timer = setInterval(sayMyName, 1000)

setTimeout(function(){
    clearInterval(timer)
}, 10000)