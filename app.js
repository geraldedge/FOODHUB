var loginbutton = document.querySelector(".button");
var loginpanel = document.querySelector(".login");
var cartlogo = document.querySelector(".cart");
var cancel=document.getElementById('cancel')
var cancel1=document.getElementById('cancel1')
var createcallbutton = document.querySelector('.createbutton')
var registerpanelankasa= document.querySelector('.register')
var logincallbutton= document.querySelector('.logincallbutton')
var loginapibutton = document.getElementById('loginbuttonapi')
var logoutbutton=document.querySelector('.logoutbutton')


//call listeners
loginbox = () => {
  loginpanel.style.top = "40%";
  loginpanel.style.opacity = "0.7";

 
 
};
cancelloginpanel=()=>{
  loginpanel.style.top = "-100%";
  loginpanel.style.opacity = "0";
}

cancelregisterpanel=()=>{
  registerpanelankasa.style.top = "-100%";
  registerpanelankasa.style.opacity = "0";
}

registerpanel=()=>{
  cancelloginpanel()
  registerpanelankasa.style.top = "40%";
  registerpanelankasa.style.opacity = "0.7";

}
logincallregister=()=>{
  cancelregisterpanel()
  loginpanel.style.top = "40%";
  loginpanel.style.opacity = "0.7";

}



loginbutton.addEventListener("click", loginbox);
cancel.addEventListener("click",cancelloginpanel)
cancel1.addEventListener("click",cancelregisterpanel)
createcallbutton.addEventListener("click",registerpanel)
logincallbutton.addEventListener("click",logincallregister)



//////////////////////////////////////

//api listeners

api_login=()=>{
  cancelloginpanel()
  loginbutton.style.zIndex=-5
  logoutbutton.style.zIndex=1

}


api_logout=()=>{

  logoutbutton.style.zIndex=-5
  loginbutton.style.zIndex=1
  cartlogo.style.zIndex = "-10";
  cartlogo.style.opacity = "0";


}





loginapibutton.addEventListener('click',()=>{
  api_login()
})

logoutbutton.addEventListener("click",api_logout)