function Calculate(){
    let licz1 = parseInt(liczba1.value);
    let licz2 = parseInt(liczba2.value);
    let wybor =document.getElementById("lista").value;

    if(wybor==1){
        let dodaj = licz1+licz2;
        wynik.innerHTML= "Wynik dodawania "+licz1+"+"+licz2+"="+dodaj;
    }
    else if(wybor==2){
        let odejmij = licz1-licz2;
        wynik.innerHTML= "Wynik odejmowania "+licz1+"-"+licz2+"="+odejmij;
    }
    
    else if(wybor==3){
        let pomnoz = licz1*licz2;
        wynik.innerHTML= "Wynik mnozenia "+licz1+"*"+licz2+"="+pomnoz;
    }
    else if(wybor==4){
        if(licz2==0 || licz1==0){
            wynik.innerHTML= "Nie można dzielic przez 0 ;)";
        }else{
            let podziel = licz1/licz2;
            wynik.innerHTML= "Wynik dzielenia "+licz1+"/"+licz2+"="+podziel;
        }
    }
    
}