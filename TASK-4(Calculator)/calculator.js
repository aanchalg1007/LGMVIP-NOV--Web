let Screenans = document.getElementById("answer");

function display(num){
    Screenans.value += num;
}

function Calculate(){
    try{
        Screenans.value = eval(Screenans.value);

    }
    catch(error)
    {
        alert("Invalid")
    }
}

function Clr(){
    Screenans.value ="";
}

function del(){
    Screenans.value = Screenans.value.slice(0,-1);
}