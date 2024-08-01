document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });

    // Change cursor on hover over clickable elements
    document.querySelectorAll('a, button').forEach(elem => {
        elem.addEventListener('mouseover', () => cursor.classList.add('hovered'));
        elem.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });
});
