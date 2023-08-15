const sidebar = document.getElementById('side-bar');

sidebar.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

document.querySelector('.content')
    .addEventListener("click", () => {
        sidebar.classList.remove('active');
        console.log('dedde')
    })