const URI_AUTH = 'http://localhost:4000/api/users/auth';
const URI_LOGIN = 'http://localhost:4000/api/users/login';

let body, container, submitBtn, loadingCover;
let credentials = {};
let showContainer = false;

function verifyAuth() {

  const token = localStorage.getItem('token');
  if (!token) return showContainer = true;

  fetch(URI_AUTH, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  })
  .then(res => res.json())
  .then(res => {
    if (res.status != 200) throw new Error(res.message);
    document.location.href = './user/index.html';
  })
  .catch(err => {
    console.error('err:', err)
    container ? container.style.display = 'flex' : showContainer = true;
    setLoadingStatus(false);
  })

}

function init() {
  body = document.getElementsByTagName('body')[0];
  container = document.getElementById('login-container');
  loadingCover = document.getElementById('loading-cover');
  submitBtn = document.getElementById('submit');
  inputs = document.getElementsByClassName('form__input');

  if (showContainer) {
    container.style.display = 'flex'
  } else {
    setLoadingStatus();
  };

  submitBtn.addEventListener('click', logIn);
  Array.from(inputs).forEach(input => {
    input.addEventListener('keyup', handleChange);
  })
}

function handleChange({ target }) {
  const { name, value } = target;
  credentials = {
    ...credentials,
    [name]: value,
  }
}

function logIn(e) {
  e.preventDefault();
  setLoadingStatus();
  fetch(URI_LOGIN, {
    method: 'post',
    // mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials),
  })
  .then(res => res.json())
  .then(res => {
    if (res.status != 200) throw new Error(res.message)
    localStorage.setItem('token', res.token);
    document.location.href = './user/index.html';
    setLoadingStatus(false);
  })
  .catch(err => {
    console.error(err);
    setLoadingStatus(false); 
  })
}

function setLoadingStatus(loading = true) {
  body.style.filter = loading ? 'blur(2px)' : '';
  loadingCover.style.display = loading ? 'flex' : 'none';
}

window.onload = function() {
  init();
}

verifyAuth();