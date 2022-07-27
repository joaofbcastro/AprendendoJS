const url = "https://api.github.com/users/joaofbcastro"

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data);
        userName.textContent = response.data.name
        userAvatar.src = response.data.avatar_url
    })
    .catch(error => console.error(error))
}

getUsers()