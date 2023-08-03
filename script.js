let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let posts = document.getElementById('posts');
let button = document.getElementById('button');

function buttonActive() {
    if(document.getElementById('input').value === "") {
      document.getElementById('button').disabled = true;
    } else {
      document.getElementById('button').disabled = false;
    }
  };

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
})

let formValidation = () => {
    if(input.value === "") {
        msg.innerHTML = "Please write something before tweeting!";
    } else {
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data['text'] = input.value;
    createTweet();
};

let createTweet = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editTweet(this)" class="fas fa-edit"></i>
            <i onClick="deleteTweet(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    input.value = "";
};

let deleteTweet = (e) => {
    e.parentElement.parentElement.remove();
};

let editTweet = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}