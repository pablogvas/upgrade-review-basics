// Iteración #4 // 

let animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    for(i=0; i<array.length; i++) {
        if(array[i] === text) {
            console.log(array.indexOf(array[i]));
        }
    }
    
}

findArrayIndex(animales, 'Caracol');
findArrayIndex(animales, 'Mosquito');
findArrayIndex(animales, 'Salamandra');
findArrayIndex(animales, 'Ajolote');
