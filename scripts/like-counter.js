const gallery = document.querySelector('.gallery');
const likeButton = gallery.querySelectorAll('.like-button');

const activeHeart = (heartsArray) => {
    for (heart of heartsArray) {
        heart.classList.toggle('like-button__heart--active');
    }
}

const likeCounter = (likes) => {
    if (likes.classList.contains('js-active-like')) {
        likes.textContent = Number(likes.textContent) - 1;
        likes.classList.remove('js-active-like');
    } else {
        likes.classList.add('js-active-like');
        likes.textContent = Number(likes.textContent) + 1;
    }
}

likeButton.forEach((item) => {
    item.addEventListener('click', () => {
        let currentHearts = item.querySelectorAll('.like-button__heart');
        activeHeart(currentHearts);

        let likeAmount = item.querySelector('.like-button__counter');
        likeCounter(likeAmount);
    })
})