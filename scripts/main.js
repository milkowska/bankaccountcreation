document.addEventListener('DOMContentLoaded', function () {

    const next_button = document.getElementById('next_button');
    const previous_page = document.getElementById('previous_page');
    
    next_button.addEventListener('click', () => {
        window.location.href = 'page_two.html';
    });

    previous_page.addEventListener('click', () => {
        window.location.href = 'user_details.html';
    });
    
});
