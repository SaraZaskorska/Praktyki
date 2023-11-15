function filtruj(tablica, elementDoWyfiltrowania) {
    var wynikowaTablica = [];

    for (var i = 0; i < tablica.length; i++) {
      if (tablica[i] === elementDoWyfiltrowania) {
        wynikowaTablica.push(tablica[i]);
      }
    }

    return wynikowaTablica;
  }

  function sprawdz() {
    var x = [10, 11, "ania", 11];
    var f = 11;
    var wynik2 = filtruj(x, f);
    
    
  
    wynik.innerHTML = "Wynik: " + wynik2;
  }