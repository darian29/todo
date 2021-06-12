


var userEmailInput = $("#emailInput")
var userPasswordInput = $("#passwordInput")
var testData = [{user:"TeStEr", password:"Testing"},
{user:"Michael@gmail.com", password:"abcd1234"}]
var testVerifiedEmail = []
var testVerifiedPassword = []
var testUser = "Michael@gmail.com"
var testPassword = "abcd1234"

localStorage.setItem('users',JSON.stringify(testData))
function loadData(){
    testData = localStorage.getItem("users")
    testData = JSON.parse(testData)
}

function saveVerifiedInfo(testVerifiedEmail,testVerifiedPassword){
    for(var i = 0; i < testData.length; i++){
        console.log(testData[i], testVerifiedEmail, testVerifiedPassword)
    if(testData[i].user == testVerifiedEmail){
        console.log(testData[i])
        if(testData[i].password == testVerifiedPassword)
        {
            console.log("TRUE")
            saveData(testData[i])
            return
        } else {
            return alert("Password Does not Match")
        }
    } 
    }
    return alert("User Does not Exist")
}
function saveData(testData)
{  
    localStorage.setItem("LoggingDataOnline", JSON.stringify(testData))
}
loadData()
saveVerifiedInfo(testUser,testPassword)
