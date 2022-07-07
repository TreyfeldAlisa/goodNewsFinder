document.registration?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const res = await fetch('/reg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: event.target.inputemail.value,
      password: event.target.inputpassword.value,
    }),
  });
  const result = await res.json();
  if (result.status === 'ok') {
    window.location.href = '/login';
  } else {
    document.querySelector('.errorMessage').innerText = result.errorMessage;
  }
});
document.login?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const res = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: event.target.inputmail.value,
      password: event.target.inputemail.value,
    }),
  });
  const result = await res.json();
  if (result.status === 'ok') {
    window.location.assign('/');
  } else {
    document.querySelector('errorMessage').innerText = result.errorMessage;
  }
});
