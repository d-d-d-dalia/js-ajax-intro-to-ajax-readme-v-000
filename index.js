function getRepositories() {
  const req = new XMLHttpRequest()
  req.open("GET", 'https://api.github.com/users/d-d-d-dalia/repos')
  req.send()
}