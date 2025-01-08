

function rating() {
    var rating =$('input[name="impression-rating"]:checked').val();
    const impressionText = $('#impression').val();
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
    alert(`Ваша оценка: ${rating}\nВашиот коментар: ${impressionText}\n${message}`);
}


function contactform() {
    const kola = $("#model").val();
    const ime = $("#name").val();
    const mail = $("#email").val();
    const date = $("#date").val();

    alert(`Здраво ${ime}, ќе ве контактираме на вашата емаил адреса: ${mail} со цел да го пробате ${kola} на ${date}`);
}


//mini insta

let brojLikes = 0;
let Liked = false;

function toggleLike() {
    const likeButton = $('.like-button');
    const brojLikesDisp = $('#like-br');
    
    if (Liked) {
        brojLikes--;
        likeButton.text('Like');
    } else {
        brojLikes++;
        likeButton.text('Unlike');
    }
    Liked = !Liked;
    brojLikesDisp.text(`${brojLikes} Likes`);
}

function submitComment() {
    const commentInput = $('#comment-input');
    const commentText = commentInput.val().trim();
    
    if (commentText === '') {
        alert('Please write a comment before submitting.');
        return;
    }

    const commentList = $('#comments-list');
    const newComment = $('<div>').addClass('comment');
    
    const commentContent = $('<p>').text(commentText);

    const deleteButton = $('<button>')
    .addClass('delete-button')
    .text('Delete')
    .on('click',function() {
        newComment.remove();
    });

    newComment.append(commentContent).append(deleteButton);
    commentList.append(newComment);

    commentInput.val(''); 
}