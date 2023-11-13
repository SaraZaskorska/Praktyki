function sprawdz() {
    const nazwa = document.getElementById('nazwa').value;

    if (palindrome(nazwa)) {
       wynik.innerHTML=nazwa+" jest palindromem"
    } else {
        wynik.innerHTML=nazwa+" nie jest palindromem"
    }
}

function palindrome(str) {
    const dlugosc = str.length;

    for (let i = 0; i < Math.floor(dlugosc / 2); i++) {
        if (str[i] !== str[dlugosc - 1 - i]) {
            return false;
        }
    }

    return true;
}