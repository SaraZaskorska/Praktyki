const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2},
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5},
];
//zadanie6
  const filtr = (list) => list.filter((book) => book.pages%2 == 0 && book.genre.endsWith("y"));
  const suma = (book) => book.reduce((razem, book) => razem + book.title.replace(/\s/g, '').length, 0);
  const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
  let wynik = compose(filtr, suma);

console.log("Zadanie 6: " + wynik(books));

//zadanie 7
  const filtr1 = (list) => list.filter((book) => book.rating > 5 && book.pages%2 == 1 && /\d+/.test(book.title));
  const suma1 = (book) => book.reduce((rating) => rating + 1, 0);
  const compose1 = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
  let wynik1 = compose1(filtr1, suma1);

  console.log("Zadanie 7: " + wynik1(books));
//zadanie8
    const mapper = (arr) => arr.map(({title}) => title);
    const sorter = (arr) => arr.sort((a, b) => (a.length < b.length) - (a.length > b.length))
    const compose2 = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x)
    let wynik2 = compose2(sorter, mapper)(books)[1]
    console.log("zadanie 8: "+ wynik2)

//zadanie 9
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Udało się!');
      }, 5000);
    });

    promise.then((result) => {
      console.log(result);
    });


  
//zadanie10
    const liczenie = (x, y) => {
      return new Promise((resolve, reject) => {
        if (typeof x !== 'number' || typeof y !== 'number') {
          reject(new Error('Jeden z argumentów nie jest liczbą!'));
        } else {
          const result = x * y;
          resolve(result);
        }
      });
    };

    liczenie(5, 10)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  
//zadanie11
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Błąd! Status nie jest równy 200');
        }
      })
      .then((data) => {
        data.forEach(({ title, body }) => {
          console.log('Tytuł:', title);
          console.log('Body:', body);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  
