const deleteFormHandler = async (event) => {
  event.preventDefault();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  if (post_id) {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.delete-btn')
  .addEventListener('click', deleteFormHandler);
