import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function imageTemplate({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${likes}</p>
        <p><b>Views:</b> ${views}</p>
        <p><b>Comments:</b> ${comments}</p>
        <p><b>Downloads:</b> ${downloads}</p>
      </div>
    </li>
  `;
}

function createGallery(images) {
  return images.map(imageTemplate).join('');
}

function clearGallery() {
  galleryEl.innerHTML = '';
}

function renderGallery(images, { append = false } = {}) {
  const markup = createGallery(images);

  if (append) {
    galleryEl.insertAdjacentHTML('beforeend', markup);
  } else {
    galleryEl.innerHTML = markup;
  }

  lightbox.refresh();
}

function showLoader() {
  loaderEl.classList.remove('hidden');
}

function hideLoader() {
  loaderEl.classList.add('hidden');
}

function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}

export {
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
};