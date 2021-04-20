function validate(){
    event.preventDefault();
    var user = document.getElementById("name").value;
    var pwd = document.getElementById("password").value;
    let wrong = document.getElementById("invalid");
    if((user==9626848802)&&(pwd=="raja")){
      alert("succesfully logged in");
      window.location="afterLogin.html";
      
      
    }
    else{
      wrong.style.visibility="visible";
     
  
    }
  return false;
  }
  //onsubmit take the contents of the form to another page
  //onclick button does not take the contents to another page
  //reset button reset the contents we entered
