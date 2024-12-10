import { API, formContainer, inputId } from './config.js';
import { appendElement, fetchData, fetchById } from './commonFunc.js';

const posts = await fetchData(API.posts);

const renderPost = async (post) => {
  if (typeof post !== 'object' || Array.isArray(post)) throw new Error('Argument is not an object');
  const { id, title, body: description } = post;

  const div = document.createElement('div');
  div.setAttribute('data-card-id', id);
  div.className = 'card';
  div.innerHTML = `
    <div class="card-header">
        Post ID - #${id}
    </div>
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${description}</p>
      <a data-form-find-comments class="btn btn-primary">Find comments</a>
    </div>
  `;

  return appendElement(formContainer, div);
};

const renderComments = async (event) => {
  event.target.removeEventListener('click', renderComments, false);

  const commentsId = document.querySelector('[data-card-id]').getAttribute('data-card-id');

  const comments = await fetchData(API.findComments + Number(commentsId));

  const commentsContainer = document.createElement('div');
  commentsContainer.className = 'comments-container';
  appendElement(formContainer, commentsContainer);

  comments.forEach((comment) => {
    const { email, name: title, body: description } = comment;

    const div = document.createElement('div');
    div.className = 'card';

    div.innerHTML = `
      <div class="card-header">
          ${email}
      </div>
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
      </div>
    `;

    return appendElement(commentsContainer, div);
  });
};

export default async function formHandler(event) {
  event.preventDefault();
  const postCard = document.querySelector('[data-card-id]');

  if (+inputId.value === Number(postCard?.getAttribute('data-card-id'))) return;

  const post = fetchById(posts, +inputId.value);

  if (postCard) {
    postCard.replaceWith(await renderPost(post));
    document.querySelector('.comments-container')?.remove();
  } else {
    await renderPost(post);
  }

  const btnFindComments = document.querySelector('[data-form-find-comments]');
  btnFindComments.addEventListener('click', renderComments);
}
