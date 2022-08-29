const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => display(data))
        .catch(error => console.log(error));
};
const display = users => {
    const main = document.getElementsByTagName('main')[0];
    users.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('div');
        div.innerHTML = `
                            <h2>${user.name}</h2>
                            <button onclick="loadComment(${user.id})" >Show Comments</button>
                        `;
        main.appendChild(div);
    });
};
const loadComment = id => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => res.json())
        .then(data => displayComment(data))
        .catch(error => console.log(error));
};
const displayComment = user => {
    document.getElementById('name').innerText = user.name;
    document.getElementById('comment').innerText = user.body;
};

loadData();