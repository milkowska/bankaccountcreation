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
