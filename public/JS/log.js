document.querySelector('.formLog').addEventListener('submit', async (event) => {
  event.preventDefault();

  const response = await fetch('/auth/log', {
    method: 'POST',
    body: JSON.stringify({
      email: event.target.email.value,
      password: event.target.password.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await response.json();
  if (result.login) {
    window.location.href = '/news';
    return;
  }
  const error = (document.querySelector('.errorDivLog').innerHTML =
    'Такого пользователя нет');
});
