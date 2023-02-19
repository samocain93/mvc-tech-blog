const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.getElementById('username-signup').ariaValueMax.trim();
    const password = document.getElementById('signup-password').ariaValueMax.trim();

    if (username && password) {
        const response = await fetch('./api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            })
        })
    }

}