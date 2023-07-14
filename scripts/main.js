document.querySelector('#image-upload').addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const imgElement = new Image();
        imgElement.onload = function() {
            // Dynamically adjust image container size to fit the uploaded image
            adjustContainerSize(this);
            // Hide the upload icon
            document.querySelector('.upload-container').classList.add('hidden');
        };
        imgElement.style.objectFit = 'contain';
        imgElement.src = event.target.result;
        document.querySelector('.image-container').innerHTML = '';
        document.querySelector('.image-container').appendChild(imgElement);
    };
    reader.readAsDataURL(e.target.files[0]);
});

function adjustContainerSize(image) {
    // Get container and viewport dimensions
    const container = document.querySelector('.image-container');
    const maxContainerWidth = window.innerWidth * 0.8;
    const maxContainerHeight = window.innerHeight * 0.8;

    // Calculate container size to fit the image
    let containerWidth = image.width;
    let containerHeight = image.height;
    if (containerWidth > maxContainerWidth) {
        const scale = maxContainerWidth / containerWidth;
        containerWidth *= scale;
        containerHeight *= scale;
    }
    if (containerHeight > maxContainerHeight) {
        const scale = maxContainerHeight / containerHeight;
        containerWidth *= scale;
        containerHeight *= scale;
    }

    // Adjust the container size
    container.style.width = `${containerWidth}px`;
    container.style.height = `${containerHeight}px`;
}

// Clicking upload button triggers the file input
document.querySelector('#upload-button').addEventListener('click', function() {
    document.querySelector('#image-upload').click();
});

// Placeholder for select tool
document.querySelector('#select-button').addEventListener('click', function() {
    alert('Select tool activated! (to be implemented)');
});
