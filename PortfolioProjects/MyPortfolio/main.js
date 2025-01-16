let highlight = document.getElementsByClassName('navigation-item');
for (let item of highlight) {
    item.addEventListener('mouseenter', function(){
        item.style.fontSize = '1.2em';
    });

    item.addEventListener('mouseleave', function() {
        item.style.fontSize = ''; 
    });
    
    
};

let theme = document.querySelector('.day-night');
const body = document.body;


if (body.classList.contains('dark-theme')) {
    document.querySelector('.fa-moon').style.display = 'none';
    document.querySelector('.fa-sun').style.display = 'inline-block';
} else {
    document.querySelector('.fa-moon').style.display = 'inline-block';
    document.querySelector('.fa-sun').style.display = 'none';
}

theme.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    
    
    if (body.classList.contains('dark-theme')) {
        document.querySelector('.fa-moon').style.display = 'none';
        document.querySelector('.fa-sun').style.display = 'inline-block';
    } else {
        document.querySelector('.fa-moon').style.display = 'inline-block';
        document.querySelector('.fa-sun').style.display = 'none';
    }
});
