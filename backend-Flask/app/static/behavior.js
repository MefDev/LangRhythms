
registerUserBtn = document.querySelector("#registerUserBtn")
registerUserBtnOnErr = document.querySelector("#registerUserBtnOnErr")
loginUserBtn = document.querySelector("#loginUserBtn")
loginUserBtnOnErr = document.querySelector("#loginUserBtnOnErr")
loginUserGoogleBtn = document.querySelector("#loginUserGoogleBtn")
userContainerBtn = document.querySelector("#get-btn")
singleUserBtn = document.querySelector("#get-btn-singleUser")
singleUserNotFoundBtn = document.querySelector("#get-btn-singleUserNotFound")

registerUserBtn.addEventListener("click", ShowPostDataOnSuccess)
registerUserBtnOnErr.addEventListener("click", ShowPostDataOnErr)
loginUserBtn.addEventListener("click", ShowPostDataLoginOnSuccess)
loginUserBtnOnErr.addEventListener("click", ShowPostDataLoginOnErr)
loginUserGoogleBtn.addEventListener("click", ShowResponseGoogleApi)
userContainerBtn.addEventListener("click", showDataOnSuccess)
singleUserBtn.addEventListener("click", showSingleUserOnSuccess)
singleUserNotFoundBtn.addEventListener("click", showSingleUserOnErr)
     



/* SHOW Auth POST data */
function ShowPostDataOnSuccess(){
    HideAllElements()
    jsonData = document.querySelector("#registerUserData")
    jsonData.style.display = "inline-block"
    updateResponseRequest("/auth/signup")
}
function ShowPostDataOnErr(){
    HideAllElements()
    jsonData = document.querySelector("#registerUserDataOnErr")
    jsonData.style.display = "inline-block"
    updateResponseRequest("/auth/signup", 409)
}

function ShowPostDataLoginOnSuccess(){

    HideAllElements()
    jsonData = document.querySelector("#loginUserData")
    jsonData.style.display = "inline-block"
    updateResponseRequest("/auth/login")

}

function ShowPostDataLoginOnErr(){
    HideAllElements()
    jsonData = document.querySelector("#loginUserDataOnErr")
    jsonData.style.display = "inline-block"
    updateResponseRequest("/auth/login", 401)

}


/* SHOW Get data */
function showDataOnSuccess(){
    HideAllElements()
    jsonData = document.querySelector("#get-successs-data")
    jsonData.style.display = "inline-block"
    updateResponseRequest("/users")
}


function showSingleUserOnSuccess(){
    HideAllElements()
    jsonData = document.querySelector("#get-singleUserData")
    jsonData.style.display = "inline-block"
    updateResponseRequest("/users/1")
}

function ShowResponseGoogleApi(){
    HideAllElements()
    jsonData = document.querySelector("#loginUserGoogleData")
    jsonData.style.display = "inline-block"
    updateResponseRequest("/api/google/auth/login")
}


/**** Helper functions *****/
function showSingleUserOnErr(){
    HideAllElements()
    jsonData = document.querySelector("#get-singleUserDataNotFound")
    jsonData.style.display = "inline-block"
    updateResponseRequest("/users/101", 404)
   
}

function HideAllElements(){
    allDataID = ["#get-singleUserDataNotFound", "#get-singleUserData", "#get-successs-data", "#registerUserData", "#registerUserDataOnErr", "#loginUserData", "#loginUserDataOnErr", "#loginUserGoogleData"]
    allDataID.map((e) => {
        data = document.querySelector(e)
        data.style.display = "none"
    })
}







function updateResponseRequest(path, statuscode=200){
    
    codeStatus = document.querySelector("#code-status")
    statuscode == 200 ? codeStatus.style.color = "lightgreen" : codeStatus.style.color = "red"
    pathUrl = document.querySelector("#path")
    codeStatus.textContent = statuscode
    pathUrl.textContent = path
    
}