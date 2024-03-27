// // Generar estrellas aleatorias
// document.addEventListener("DOMContentLoaded", function() {
//     var additionalStarsContainer = document.querySelector('.additional-stars');
//     var numStars = 200; // Cambia este valor según la cantidad de estrellas que desees
//     for (var i = 0; i < numStars; i++) {
//         var star = document.createElement('div');
//         star.className = 'star';
//         star.style.top = Math.random() * 100 + '%';
//         star.style.left = Math.random() * 100 + '%';
//         star.style.animationDelay = Math.random() * 50 + 's';
//         additionalStarsContainer.appendChild(star);
//     }
// });


// Generar estrellas aleatorias de cinco picos
document.addEventListener("DOMContentLoaded", function() {
    var additionalStarsContainer = document.querySelector('.additional-stars');
    var numStars = 200; // Cambia este valor según la cantidad de estrellas que desees
    for (var i = 0; i < numStars; i++) {
        var star = document.createElement('div');
        star.className = 'star';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 50 + 's';
        additionalStarsContainer.appendChild(star);
        
        // Crear estrella de cinco picos
        for (var j = 0; j < 5; j++) {
            var spike = document.createElement('div');
            spike.className = 'spike';
            star.appendChild(spike);
        }
    }
});
