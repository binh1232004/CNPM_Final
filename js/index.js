let app = document.getElementById('app');


// load template file
const loadTemplate = () => {
    fetch ('./template.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
    })
}

loadTemplate();