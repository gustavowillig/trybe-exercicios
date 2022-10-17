function techList(array, name) {
    const ListaObjetos =[];
    const arrayOrdenado = array.sort();
    for (let index = 0; index < arrayOrdenado.length; index += 1) {
        ListaObjetos.push({tech: arrayOrdenado[index], name: name});
    }
    if (arrayOrdenado.length === 0) {
        return 'Vazio!';
    }
    return ListaObjetos;
}

module.exports = techList;