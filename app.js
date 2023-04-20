const textContainer = document.querySelector('.about-container');
const text = textContainer.querySelector('.about-text');
const showMoreBtn = document.querySelector('.show-more-btn');

showMoreBtn.addEventListener('click', function() {
  if (textContainer.style.maxHeight) {
    textContainer.style.maxHeight = null;
    showMoreBtn.textContent = 'Show More';
  } else {
    textContainer.style.maxHeight = textContainer.scrollHeight + 'px';
    showMoreBtn.textContent = 'Show Less';
  }
});

