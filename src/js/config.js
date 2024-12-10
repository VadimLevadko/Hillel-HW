export const API = {
  global: 'https://jsonplaceholder.typicode.com',
  posts: 'posts',
  comments: 'comments',

  get findComments() {
    return `${this.comments}?postId=`;
  },
};

export const MAX_POST_ID = 100;
export const errorMessage = `Please enter the correct ID for the post (from 1 to ${MAX_POST_ID})`;

export const form = document.querySelector('[data-form-find-post]');
export const formContainer = document.querySelector('[data-form-container]');
export const inputId = document.querySelector('[data-form-input-id]');
