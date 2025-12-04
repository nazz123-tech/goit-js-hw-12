import { refs } from "../main";

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


let lightbox = null;


export function imageTemplate({
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
</li>`;
}


export function createImages(arr) {
  return arr.map(imageTemplate).join('');
}


export function clearGallery() {
  refs.gallery.innerHTML = '';
}

export function renderGallery(images, { append = false } = {}) {
  const markup = createImages(images);

  if (append) {
    refs.gallery.insertAdjacentHTML('beforeend', markup);
  } else {
    refs.gallery.innerHTML = markup;
  }


  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }

  lightbox.refresh();
}

export function showLoader() {
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
}