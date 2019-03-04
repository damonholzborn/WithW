var headerArea;
var menuButton;
var firstRun = true;

var hasRun = localStorage.hasRun;
if (hasRun === undefined) {
    localStorage.setItem('hasRun', JSON.stringify(true));
}
else {
    firstRun = false;
}

window.onload = function() {
    headerArea = document.getElementById('header');
    menuButton = document.getElementById('menu_button');
    
    menuButton.onclick = function () {
        if (!menuButton.classList.contains('open')) {
            menuButton.classList.add('open');
            headerArea.style.height = (document.getElementById('welcome_message').clientHeight + 130) + 'px';
        }
        else {
            menuButton.classList.remove('open');
            headerArea.style.height = 'var(--headerheight)';
        }
    }; 

    if (firstRun) {
        setTimeout(function() {
            menuButton.click();

        }, 2100);
    }
}
