const loader = document.getElementById('preloader');
window.addEventListener('load', () => {
    loader.style.display = 'none';
});

const loadData = () => {
    fetch('https://randomuser.me/api/?results=52')
        .then(response => response.json())
        .then(data => display(data))
        .catch(error => console.log(error));
};
const display = data => {
    users = data.results;
    const containerDiv = document.getElementById('container-div');
    users.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
                    <img src="${user.picture.large}" alt="image">
                    <h2>${user.name.title}. ${user.name.first} ${user.name.last}</h2>
                    <p>
                        Street: ${user.location.street.number}, ${user.location.street.name}<br>
                        City: ${user.location.city}<br>
                        Coordinate: ${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}<br>
                        Timezone: ${user.location.timezone.offset}, ${user.location.timezone.description}<br>
                    </p>
                `;
        containerDiv.appendChild(div);
    });
};
loadData();