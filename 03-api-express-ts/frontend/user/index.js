const URI = 'http://localhost:4000/api/users/current';

let body, layout, loadingCover, header, postModal, homePage, openCreator,
closeCreator, postField, userPreviewName, userPreviewEmail;


function verifyAuth() {

  const token = localStorage.getItem('token');
  if (!token) return document.location.href = '../index.html';

  fetch(URI, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  })
  .then(res => res.json())
  .then(res => {
    if (res.status != 200) throw new Error(res.message);
    layout.style.display = 'block';
    userPreviewName.innerText = res.user.firstname + ' ' + res.user.lastname;
    userPreviewEmail.innerText = res.user.email;
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
  userPreviewName = document.getElementById('user-preview__name');
  userPreviewEmail = document.getElementById('user-preview__email');

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
