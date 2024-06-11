document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    
    var firstName = document.getElementById('first-name').value.trim();
    var lastName = document.getElementById('last-name').value.trim();
    var message = document.getElementById('message').value.trim();

    
    var errorMessage = document.getElementById('error-message');

    
    if (firstName === '' || lastName === '' || message === '') {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';

       
        var newComment = document.createElement('div');
        newComment.className = 'flex space-x-4 text-sm text-gray-500 border-t border-gray-200 py-10';
        newComment.innerHTML = `
            <div class="flex-1">
                <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
                <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>${message}</p>
                </div>
            </div>
        `;

        
        document.getElementById('comment-list').appendChild(newComment);

        
        document.getElementById('first-name').value = '';
        document.getElementById('last-name').value = '';
        document.getElementById('message').value = '';
    }
});