import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  renderGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
export const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('input'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = refs.input.value.trim();

  if (!query) {
    iziToast.warning({ message: 'Enter a search query!' });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (!data.hits.length) {
      hideLoader();
      iziToast.error({ message: 'No images found!' });
      return;
    }

    renderGallery(data.hits);

  } catch (err) {
    iziToast.error({ message: 'Something went wrong' });
  }

  hideLoader();
});