function fun(){
    let input = document.getElementById("password");
    let inputtype = input.getAttribute("type");
    if (inputtype == "password"){
        input.setAttribute("type","text");
    }
    else{
        input.setAttribute("type","password");
    }
}