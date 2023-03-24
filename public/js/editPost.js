const editFormHandler = async (event) => {
    event.preventDefault();
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const title = document.getElementById('post-title').value.trim();
    const content = document.getElementById('post-content').value.trim();
    alert(title)
    if (post_id) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content,
          }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to edit post');
      }
    }
  };
  
  document
    .querySelector('.edit-btn')
    .addEventListener('click', editFormHandler);