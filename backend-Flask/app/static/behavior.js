userContainerBtn = document.querySelector("#get-btn")
singleUserBtn = document.querySelector("#get-btn-singleUser")
singleUserNotFoundBtn = document.querySelector("#get-btn-singleUserNotFound")

userContainerBtn.addEventListener("click", showDataOnSuccess)
singleUserBtn.addEventListener("click", showSingleUserOnSuccess)
singleUserNotFoundBtn.addEventListener("click", showSingleUserOnErr)
     

function showDataOnSuccess(){
    jsonData = document.querySelector("#get-successs-data")
    jsonData.style.display = "inline-block"
    previousData1 = document.querySelector("#get-singleUserData")
    previousData2 = document.querySelector("#get-singleUserDataNotFound")
    previousData1.style.display = "none"
    previousData2.style.display = "none"
    updateResponseRequest("/users")
}
function showSingleUserOnSuccess(){
    jsonData = document.querySelector("#get-singleUserData")
    previousData1 = document.querySelector("#get-successs-data")
    previousData2 = document.querySelector("#get-singleUserDataNotFound")
    previousData1.style.display = "none"
    previousData2.style.display = "none"
    jsonData.style.display = "inline-block"
    updateResponseRequest("/users/1")
}

function showSingleUserOnErr(){
    jsonData = document.querySelector("#get-singleUserDataNotFound")
    previousData1 = document.querySelector("#get-singleUserData")
    previousData2 = document.querySelector("#get-successs-data")
    previousData1.style.display = "none"
    previousData2.style.display = "none"
    jsonData.style.display = "inline-block"
    updateResponseRequest("/users/101", 404)
   
}





function updateResponseRequest(path, statuscode=200){
    
    codeStatus = document.querySelector("#code-status")
    statuscode == 200 ? codeStatus.style.color = "lightgreen" : codeStatus.style.color = "red"
    pathUrl = document.querySelector("#path")
    codeStatus.textContent = statuscode
    pathUrl.textContent = path
    
}