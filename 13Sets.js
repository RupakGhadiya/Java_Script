// Sets in js setInterval and setTimeout 

// arroy function 

// function method 
function summ(a, b) {
    return a + b
}
// can write as arrow funcion 
summ = (a, b) => {
    return a + b
}



login = ()=>{
    console.log("you are login")
}

// it will display message after 5sec 
setTimeout(login, 5000)

// it will run function and display message wvwry 5sec in a loop 
setInterval(login, 5000)

