async function loadProjects() {
    const container = document.getElementById('project-list');
    try {
        const response = await fetch('http://localhost:5000/api/projects');
        const data = await response.json();
        
        container.innerHTML = ""; 

        data.forEach(p => {
            container.innerHTML += `
                <div class="card">
                    <h3>${p.title}</h3>
                    <p>${p.description}</p>
                    <p class="tech-tag">${p.tech}</p>
                </div>
            `;
        });
    } catch (error) {
        container.innerHTML = "<p>Server not running. Please start server.js</p>";
    }
}

window.onload = loadProjects;