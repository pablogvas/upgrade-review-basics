// Iteración 1 //

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
];

let categorias = [];

for(movie of movies) {
    for(categoria of movie.categories) {
        if(!categorias.includes(categoria)) {
            categorias.push(categoria);
        }
    }
}

console.log(categorias);