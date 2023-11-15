function licz(n){
    if(n<2){
        return n;
    }
    else{
        return (licz(n-1)+licz(n-2));
    }
}
function myExec(){
    for(let i =0; i<30; i++){
        console.log(licz(i))
    }
}
myExec()

