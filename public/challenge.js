const content = document.getElementById('content');

function loadHome() {
    content.innerHTML = `
        <div class="container">
            <h1>Bienvenido a la Página Basica de Xiomara</h1>
            <p>Aqui aprenderas lo que no se debe hacer.</p>
        </div>
    `;
}



function handleRouting() {
    const path = window.location.pathname;
    if (path === '/' || path === '/challenge.html') {
        loadHome();
    } else if (path === '/index1.htmlt') {
        loadAbout();
    } else if (path === '/idk') {
        loadAbout();
    } else {
        content.innerHTML = '<h1>Página no encontrada</h1>';
    }
}

window.addEventListener('DOMContentLoaded', handleRouting);
