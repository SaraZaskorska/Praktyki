const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2},
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5},
];

const zadanie6 = () => {
    let wynik = 0;
    for (const book of books) {
        if (book.pages % 2 === 0 && book.genre.endsWith('y')) {
            const tytulBezSpacji = book.title.replace(/\s/g, '');
            wynik += tytulBezSpacji.length;
        }
    }
    console.log(wynik);
};

const zadanie7 = () => {
    let wynik = 0;
    for (const book of books) {
        if (book.pages % 2 !== 0 && /\d/.test(book.title) && book.rating > 5) {
            wynik++;
        }
    }
    console.log(wynik);
};

const zadanie8 = () => {
    const mapper = (arr) => arr.map(({title}) => title);
    const sorter = (arr) => arr.sort((a, b) => (a.length < b.length) - (a.length > b.length))
    
    const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x)

    console.log(compose(sorter, mapper)(books)[1])
};