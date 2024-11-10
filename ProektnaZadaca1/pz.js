//api calls

function loadContent(elementId, url) {
    console.log(`Fetching data from ${url} for element #${elementId}`);
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.text();  // We fetch the HTML content
        })
        .then(html => {
            // Now we need to extract the text content from the HTML
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, 'text/html');
            
            // Example: Extract the main content (adjust based on the website structure)
            let content = doc.querySelector('.ChapterElement_classBodyText__d_L_J CopyText_copy__text__m7Eua').innerText;  // Adjust selector as needed
            
            // You can also target a specific element by its ID or class
            // let content = doc.querySelector('.main-content').innerText;

            // Insert the extracted content into the designated HTML element
            document.getElementById(elementId).innerHTML = content;
        })
        .catch(error => {
            console.error('Error fetching content:', error);
            document.getElementById(elementId).innerHTML = 'Could not load content.';
        });
}

function rating() {
    var rating = document.querySelector('input[name="impression-rating"]:checked').value;
    const impressionText = document.getElementById('impression').value;
    let message = "";

    switch (rating) {
        case "excellent":
            message = "Вие сте задоволен со сајтот! Благодариме за позитивниот фидбек!";
            rating = "одлично";
            break;
        case "good":
            message = "Ви благодарам за вашето мислење.";
            rating = "добро";
            break;
        case "average":
            message = "Имаме уште простор за подобрување!";
            rating = "средно";
            break;
        case "soso":
            message = "Ох, тоа не е најдобро. Ќе работиме на тоа!";
            rating = "онака";
            break;
        case "awful":
            message = "Жал ни е што не сте задоволни. Ќе се потрудиме да го поправиме!";
            rating = "никакво";
            break;
    }
    window.alert(`Ваша оценка: ${rating}\nВашиот коментар: ${impressionText}\n${message}`)
}


function contactform() {
    const kola = document.getElementById("model").value;
    const ime = document.getElementById("name").value;
    const mail = document.getElementById("email").value;
    const date = document.getElementById("date").value;

    window.alert(`Здраво ${ime}, ќе ве контактираме на вашата емаил адреса: ${mail} со цел да го пробате ${kola} на ${date}`);
}


//mini insta

let likeCount = 0;
let isLiked = false;

function toggleLike() {
    const likeButton = document.querySelector('.like-button');
    const likeCountDisplay = document.getElementById('like-count');
    
    if (isLiked) {
        likeCount--;
        likeButton.textContent = 'Like';
    } else {
        likeCount++;
        likeButton.textContent = 'Unlike';
    }
    isLiked = !isLiked;
    likeCountDisplay.textContent = `${likeCount} Likes`;
}

function submitComment() {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();
    
    if (commentText === '') {
        alert('Please write a comment before submitting.');
        return;
    }

    const commentList = document.getElementById('comments-list');
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    
    const commentContent = document.createElement('p');
    commentContent.textContent = commentText;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        newComment.remove();
    };

    newComment.appendChild(commentContent);
    newComment.appendChild(deleteButton);
    commentList.appendChild(newComment);

    commentInput.value = ''; // Clear the input after submitting
}