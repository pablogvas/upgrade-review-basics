// Iteración #6 //

let jugadores = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(arr, index1, index2) {
    var jug = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = jug;
    return arr;
}

console.log(swap(jugadores, 0, 2));

