const generalAPI = 'http://localhost:3000/images/1';

fetch (generalAPI)
    .then(res => res.json())
    .then(data => renderPost(data))
    
const postPic = document.querySelector('.image');
const postTitle = document.querySelector('.title');
const postLikes = document.querySelector('.likes');
const postComments = document.querySelector('.comments');
const commentForm = document.querySelector('.comment-form');
const commentList = document.getElementById('comments-list');
const likeButton = document.getElementById('like-button');

commentList.innerHTML = `<li id="firstComment">Get rid of these comments</li>
<li id="secondComment">And replace them with the real ones</li>
<li id="thirdComment">From the server</li>`;

const firstComment = document.getElementById('firstComment');
const secondComment = document.getElementById('secondComment');
const thirdComment = document.getElementById('thirdComment');


function renderPost(data) {
    postPic.src = data.image;
    postTitle.innerText = data.title;
    postLikes.innerText = `${data.likes} likes`;

    likeButton.addEventListener('click', (e) => handleClick(e, data, postLikes));
    commentForm.addEventListener('submit', (e) => handleSubmit(e));

    firstComment.innerText = data.comments[0].content;
    secondComment.innerText = data.comments[1].content;
    thirdComment.innerText = data.comments[2].content;
}

function handleClick(e, data, postLikes) {
    e.preventDefault();
    postLikes.innerText = `${++data.likes} likes`;
}

function handleSubmit(e) {
    e.preventDefault();
    const newComment = document.createElement('li');
    newComment.id = "new-comment";
    newComment.innerText = e.target.comment.value;;
    commentList.appendChild(newComment);
}
