document.querySelector('.formReg').addEventListener('submit', async (event) => {
  event.preventDefault();
  const response = await fetch('/auth/reg', {
    method: 'POST',
    body: JSON.stringify({
      login: event.target.login.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await response.json();
  if (result.registration) {
    window.location.href = '/auth/log';
    return;
  }
  const error = (document.querySelector('.errorDiv').innerHTML =
    'Такой пользователь уже есть');
});
