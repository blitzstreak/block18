// after creating test folder. doing index.test.js
// npm install jest <-- command in terminal
// make sure you're in the folder, you will get node_modules and package-json.

function logIn(username, password){

    // return boolean whether username and password is there

    if(username.length===0||password.length===0){
        return false
    }else if(username==="antixlag"&&password==="pass"){
        return true
    } else{
        return false
    }
}

function createAccount(email,password){

    // boolean to create character
    if(email.length===0 || password.length ===0){
        return false
    }else if (email === "antixlag@gmail.com" && password === "pass"){
        return true
    }else{
        return false
    }

}


function googleEmail(email){
    if(email.length===0 || verificationCode===0) { 
        return false
    }else if(email==="antixlag@exampleemail.com" && verificationCode==="3 2 1 5 4"){
        return true
    } else {
        return false
    }
}

module.exports = {logIn,createAccount, googleEmail}