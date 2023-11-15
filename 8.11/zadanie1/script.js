function oblicz(x,y){
    if(x <= y){
        console.log(y);
        y--;
        oblicz(x,y);
    }
}
oblicz(8,11)