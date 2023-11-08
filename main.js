const owner = 'Hyper2109';
const repo = 'frontendMentor';
const path = 'challenges';

fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        const folders = data.filter(item => item.type === 'dir');

        // Crea gli elementi <h1> per ogni cartella
        const foldersContainer = document.getElementById('folders');
        folders.forEach(folder => {
            const li = document.createElement('li');
            li.textContent = folder.name;
            const a = document.createElement('a')
            a.href = `https://${owner}.github.io/${repo}/${path}/${folder.name}/index.html`
            foldersContainer.appendChild(a);
            a.appendChild(li)
        });
    })
    .catch(error => {
        console.error('API Error ' + error.message);
    });