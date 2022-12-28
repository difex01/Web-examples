const URI_AUTH = 'http://localhost:4000/api/users/auth';
const URI_SIGNUP = 'http://localhost:4000/api/users/signup';

let body, container, submitBtn, loadingCover;
let userData = {
  avatar: 'purple'
};
let showContainer = false;

function verifyAuth() {

  const token = localStorage.getItem('token');
  if (!token) return showContainer = true;

  fetch(URI_AUTH, {
    method: 'post',
    // mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  })
  .then(res => res.json())
  .then(res => {
    if (res.status != 200) throw new Error(res.message);
    document.location.href = '../user/index.html';
  })
  .catch(err => {
    console.error('err:', err)
    container ? container.style.display = 'flex' : showContainer = true;
    setLoadingStatus(false);
  })

}


function init() {
  body = document.getElementsByTagName('body')[0];
  container = document.getElementById('signup-container');
  loadingCover = document.getElementById('loading-cover');
  submitBtn = document.getElementById('submit');
  inputs = document.getElementsByClassName('form__input');

  if (showContainer) {
    container.style.display = 'flex'
  } else {
    setLoadingStatus();
  };

  submitBtn.addEventListener('click', submitData);
  Array.from(inputs).forEach(input => {
    input.addEventListener('keyup', handleChange);
  })
}

function handleChange({ target }) {
  const { name, value } = target;
  userData = {
    ...userData,
    [name]: value,
  }
}

function submitData(e) {
  e.preventDefault();
  setLoadingStatus();
  fetch(URI_SIGNUP, {
    method: 'post',
    // mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData),
  })
  .then(res => res.json())
  .then(res => {
    if (res.status != 200) throw new Error(res.message);
    // todo: continue to login meessage
    window.location.href = '../index.html';
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