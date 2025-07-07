const shapes = document.querySelectorAll('.shape');

document.addEventListener('mousemove', (e) => {
    shapes.forEach((shape, index) => {
        const delay = index * 50; // Задержка между фигурами
        setTimeout(() => {
            shape.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }, delay);
       
    });
});
