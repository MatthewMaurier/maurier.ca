const dialContainer = document.querySelector('.dial-container');
const currentTheme = localStorage.getItem('theme');

if (currentTheme == 'dark') {
    document.body.classList.add('dark-mode');
}

dialContainer.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    
    localStorage.setItem('theme', theme);
});