document.addEventListener('DOMContentLoaded', function () {
    const chooseFileButton = document.getElementById('chooseFileButton');
    const selectedFileName = document.getElementById('selectedFileName');
    const fileInput = document.getElementById('fileInput');
    const nextButton = document.getElementById('nextButton');

    chooseFileButton.addEventListener('click', () => {
        if (!fileInput.value) {
            fileInput.click();
        }
    });

    fileInput.addEventListener('change', () => {
        const selectedFile = fileInput.files[0];
        if (selectedFile) {
            console.log('Selected file:', selectedFile.name);
            selectedFileName.textContent = `Selected File: ${selectedFile.name}`;
            nextButton.removeAttribute('disabled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {

    const nextButton = document.getElementById('nextButton');

    nextButton.addEventListener('click', () => {
        window.location.href = 'final_check.html';
    });

});
