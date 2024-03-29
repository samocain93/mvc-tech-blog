async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.getElementById('comment').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
alert('comment_text')
  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
      document.getElementById('comment-form').style.display = 'block';
    }
  }
}

document
  .getElementById('comment-form')
  .addEventListener('submit', commentFormHandler);
