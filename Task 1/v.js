document.addEventListener('DOMContentLoaded', function () {
    const articleForm = document.getElementById('article-form');
    const articleList = document.getElementById('article-list');
    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', function () {
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const imageInput = document.getElementById('image');
        const videoInput = document.getElementById('video');

        if (title.trim() === '' || content.trim() === '') {
            alert('Title and content fields are required');
            return;
        }

        // Create a new row for the article in the table
        const newRow = articleList.insertRow();
        const titleCell = newRow.insertCell(0);
        const contentCell = newRow.insertCell(1);
        const actionsCell = newRow.insertCell(2);

        titleCell.textContent = title;
        contentCell.textContent = content;

        // Handle image upload
        if (imageInput.files.length > 0) {
            const image = document.createElement('img');
            const file = imageInput.files[0];
            image.src = URL.createObjectURL(file);
            contentCell.appendChild(image);
        }

        // Handle video upload
        if (videoInput.files.length > 0) {
            const videoElement = document.createElement('video');
            const videoFile = videoInput.files[0];
            videoElement.src = URL.createObjectURL(videoFile);
            videoElement.controls = true;
            contentCell.appendChild(videoElement);
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            articleList.deleteRow(newRow.rowIndex - 1);
        });

        actionsCell.appendChild(deleteButton);

        // Clear the form fields
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
        document.getElementById('image').value = '';
        document.getElementById('video').value = '';
    });
});
