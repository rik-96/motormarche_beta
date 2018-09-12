

function appearDropDown(){
  var x = document.getElementById("navbar");
  if (x.className === "topnav" || x.className === "topnav sticky"){
    x.className += " responsive";
    console.log("yeo")
  } else if (x.className === "topnav responsive") {
    x.className = "topnav";
    console.log('naa');
  } else {
    x.className = "topnav sticky";
  }
}