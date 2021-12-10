function fun1(){
    setTimeout(() => {
        console.log("im first function")
    }, 2000);
}
function fun2(){
    setInterval(() => {
        for(i=0;i<10;i++){
        console.log(i)}
    }, 1000);        
}
fun1();
fun2()