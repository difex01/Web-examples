const URI = 'http://localhost:3000/api/users/auth';

let body, layout, loadingCover, header, postModal, homePage, openCreator,
closeCreator, postField;


function verifyAuth() {

  const token = localStorage.getItem('token');
  if (!token) return document.location.href = '../index.html';

  fetch(URI, {
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
    console.log('res', res);
    layout.style.display = 'block';
    setLoadingStatus(false);
  })
  .catch(err => {
    console.error('err:', err);
    // todo: Error view
    document.location.href = '../index.html';
  })

}

function init() {
  body = document.getElementsByTagName('body')[0];
  layout = document.getElementById('principal-layout');
  loadingCover = document.getElementById('loading-cover');
  header = document.getElementById('header');
  postModal = document.getElementById('create-post-modal');
  homePage = document.getElementById('home-page');
  openCreator = document.getElementById('open-creator-btn');
  closeCreator = document.getElementById('close-creator-btn');
  postField = document.getElementById('create-post-field');

  setLoadingStatus();

  openCreator.addEventListener('click', openCreatorModal);
  closeCreator.addEventListener('click', closeCreatorModal);
}

function openCreatorModal() {
  const blurStyle = 'blur(2px)';
  body.style.overflow = 'hidden';
  header.style.filter = blurStyle;
  homePage.style.filter = blurStyle;
  postModal.style.display = 'flex';
}

function closeCreatorModal() {
  const blurStyle = 'blur(0px)';
  postField.value = '';
  body.style.overflow = 'auto';
  header.style.filter = blurStyle;
  homePage.style.filter = blurStyle;
  postModal.style.display = 'none';
}

function setLoadingStatus(loading = true) {
  body.style.filter = loading ? 'blur(2px)' : '';
  loadingCover.style.display = loading ? 'flex' : 'none';
}

window.onload = function() {
  verifyAuth();
  init();
}
