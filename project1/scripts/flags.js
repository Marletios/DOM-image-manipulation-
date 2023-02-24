//Canada
//Preload images
var caMapImage = new Image();
caMapImage.src = "images/canadaMap.jpg";
var caFlagImage = new Image();
caFlagImage.src = "images/ca-flag.jpg";

//Attach event listeners to element with ID "canadaFlag"
document.getElementById("canadaFlag").addEventListener("mouseover", setNewImage);
document.getElementById("canadaFlag").addEventListener("mouseleave", setOldImage);

//Canada functions
function setNewImage(){
     document.getElementById("canadaFlag").src = caMapImage.src; 
     document.getElementById("primary_h1").textContent = "Canada!"
}
function setOldImage(){
    document.getElementById("canadaFlag").src = caFlagImage.src;
    document.getElementById("primary_h1").textContent = "Countries and Flags"; 
}


//END CANADA

//Start USA

//Preload images
var usMapImage = new Image();
usMapImage.src = "images/usaMap.jpg";
var usFlagImage = new Image();
usFlagImage.src = "images/usaflag.jpg";

//Attach event listeners to element with ID "usaFlag"
document.getElementById("usaFlag").addEventListener("mouseover", setNewImageUS);
document.getElementById("usaFlag").addEventListener("mouseleave", setOldImageUS);

//USA functions
function setNewImageUS(){
     document.getElementById("usaFlag").src = usMapImage.src; 
     document.getElementById("primary_h1").textContent = "USA!"
}
function setOldImageUS(){
    document.getElementById("usaFlag").src = usFlagImage.src; 
    document.getElementById("primary_h1").textContent = "Countries and Flags";
}

//Start Mexico

//Preload images
var mxMapImage = new Image();
mxMapImage.src = "images/MexicoMap.jpg";
var mxFlagImage = new Image();
mxFlagImage.src = "images/MexicoFlag.jpg";

//Attach event listeners to element with ID "mxFlag"
document.getElementById("mxFlag").addEventListener("mouseover", setNewImageMx);
document.getElementById("mxFlag").addEventListener("mouseleave", setOldImageMx);

//Mex functions
function setNewImageMx(){
     document.getElementById("mxFlag").src = mxMapImage.src; 
     document.getElementById("primary_h1").textContent = "Mexico!"
}
function setOldImageMx(){
    document.getElementById("mxFlag").src = mxFlagImage.src; 
    document.getElementById("primary_h1").textContent = "Countries and Flags";
}