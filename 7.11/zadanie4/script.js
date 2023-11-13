function czyToAnagram(slowo1, slowo2) {
    if (slowo1.length !== slowo2.length) {
      return false;
    }

    const slowo1Chars = slowo1.split('');
    const slowo2Chars = slowo2.split('');

    for (let i = 0; i < slowo1.length; i++) {
      const char = slowo1Chars[i];
      const index = slowo2Chars.indexOf(char);

      if (index === -1) {
        return false;
      }

      slowo2Chars.splice(index, 1);
    }

    return true;
  }

  function anagramy() {
    const slowo1 = document.getElementById('slowo1').value;
    const slowo2 = document.getElementById('slowo2').value;

    if (czyToAnagram(slowo1, slowo2)) {
      wynik.innerHTML="Jest to anagram";
    } else {
      wynik.innerHTML="nie jest to anagram";
    }
  }