const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(varivelArray) {
    // escreva seu código aqui
    // const processoFlatten = varivelArray.reduce((juntador, valorAtual) => juntador.concat(valorAtual));
    const processoFlatten = varivelArray.reduce((juntador, valorAtual) => {
      valorAtual.forEach((valor) => {
        juntador.push(valor);
      });
      return juntador;
    }, []);
    return processoFlatten;
  }

  console.log(flatten(arrays));

  const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  function reduceNames(arrayBooks) {
    // escreva seu código aqui
    return arrayBooks.map((book) => book.author.name).reduce((juntaLivro, livroAtual) => `${juntaLivro} ${livroAtual}.`);
  }

  console.log(reduceNames(books));

  function averageAge(arrayBooks) {
    // escreva seu código aqui
    const somaIdade = arrayBooks.reduce((juntaIdade, book) => {
      let age = book.releaseYear - book.author.birthYear;
      return juntaIdade + age;
    }, 0);
    return somaIdade / arrayBooks.length;
  }
  console.log(averageAge(books));

  function longestNamedBook(arrayBooks) {
    // escreva seu código aqui
    return arrayBooks.reduce((maiorNome, book) => maiorNome.name.length > book.name.length ? maiorNome : book);
  }

  console.log(longestNamedBook(books));

  const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  // const expectedResult = 20;
  
  // function containsA(arrayNames) {
  //   // escreva seu código aqui
  //   let totalOfLettersA = 0;
  //   arrayNames.forEach((nome) => {
  //     const caracteres = nome.split('');
  //     totalOfLettersA += caracteres.reduce((contador, caracterAtual) => {
  //       if (caracterAtual === 'a' || caracterAtual === 'A') {
  //         return contador + 1;
  //       }
  //       return contador;
  //     }, 0);
  //   });
  //   return totalOfLettersA;
  // }

  function containsA(arrayNames) {
    // escreva seu código aqui
    let totalOfLettersA = 0;
    totalOfLettersA = arrayNames.reduce((contador, nomeAtual) => {
      let caracterAtual = nomeAtual.split('');
      caracterAtual.forEach((caracter) => caracter === 'a' || caracter === 'A' ? contador += 1 : contador += 0);
      return contador;
    }, 0);
    return totalOfLettersA;
  }

  console.log(containsA(names));

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(arrayStudents, arrayGrades) {
  // escreva seu código aqui
  return arrayStudents.map((student, index) => ({
    name: student,
    average: (arrayGrades[index].reduce((somaNotas, notaAtual) => somaNotas + notaAtual) / arrayGrades[index].length)
  }));
}

console.log(studentAverage(students, grades));

let texto = 'J. R. R. Tolkien';

// let retorno = texto.match(/[^\.]{3}/g);

let retorno = texto.match(/^(\w*\.\s*){3}[^.]+$/g);

console.log(retorno);
