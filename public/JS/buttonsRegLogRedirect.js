document.querySelector('#regbtn').addEventListener('click', (event) => {
  event.preventDefault();
  window.location.assign('/reg');
});

document.querySelector('#logbtn').addEventListener('click', (event) => {
  event.preventDefault();
  window.location.assign('/login');
});
