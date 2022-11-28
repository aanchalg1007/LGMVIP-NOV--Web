var form=document.getElementById("form");
var submit = document.querySelector(".submit");
var element = form.elements;
var display = document.querySelector(".display");
var i;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    data();
    form.reset();
});

var loadFile = function(event){
    i=URL.createObjectURL(event.target.files[0]);
}

function data(){
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    var name = document.createElement("div");
    var email= document.createElement("div");
    var website = document.createElement("div");
    var gender = document.createElement("div");
    var img = document.createElement("img");

    name.innerHTML="NAME: "+element[0].value;
    email.innerHTML="EMAIL: "+element[1].value;
    website.innerHTML="WEBSITE: "+element[2].value;
    gender.innerHTML="GENDER: "+element[3].value;
    if(element[4].checked){gender.innerHTML="GENDER:Male"}
    if(element[5].checked){gender.innerHTML="GENDER:Female"}
    img.src="images/user-img.jpg";
    img.alt="student image";
    if(element[6].value !=""){
        img.src=i;
    }

    div1.appendChild(name);
    div1.appendChild(email);
    div1.appendChild(website);
    div1.appendChild(gender);
    div.appendChild(div1);
    div.appendChild(img);
    display.appendChild(div);

    img.classList.add("img");
    div.classList.add("d");
    div1.classList.add("div1");
    display.classList.add("display");
}