document.addEventListener('DOMContentLoaded', function () {
    const next_button = document.getElementById('next_button');
    const previous_page = document.getElementById('previous_page');
    
    next_button.addEventListener('click', () => {
        window.location.href = 'account-types.html';
    });

    previous_page.addEventListener('click', () => {
        window.location.href = 'user-details.html';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const goMain = document.getElementById("goMain");
    
    goMain.addEventListener('click', () => {
        window.location.href = 'main-page.html';
    });
});

