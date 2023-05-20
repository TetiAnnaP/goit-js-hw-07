import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const markUp = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class='gallery__item'>
        <a class='gallery__link' href='${original}'>
          <img
            class='gallery__image'
            src='${preview}'
            data-source='${original}'
            alt='${description}'
          />
        </a>
      </li>`
);

galleryEl.insertAdjacentHTML('afterbegin', markUp.join(''));

galleryEl.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const imgDataSource = event.target.dataset.source;
  const currentImg = event.target;

  const instance = basicLightbox.create(`
  <div class="modal">
            <img
            class='modal__image'
            src= ${imgDataSource}
            
            alt='${currentImg.description}'
          />
        </div>
     `);

  instance.show();

  // const modalWindow = document.querySelector(
  //   '.basicLightbox .basicLightbox--visible'
  // );

  // modalWindow.addEventListener('keydown', (e) => {

  // if ((e.code = 'Escape')) {
  //   console.log('Closing window...');
  // }
  // });
}

// const modalImg = document.querySelector('.modal__image');
// modalImg.addEventListener('click', () => instance.close());

console.log(HTMLImageElement.prototype);
