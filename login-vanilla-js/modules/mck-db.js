let users = {
  "marlonryzen@gmail.com": "PerecedorMartell55",
  "enginer00@gmail.com": "AndrajosoLagarto24"
}

const getData = (username, password) => {
  return users[username] === password ? true : false;
}

export default getData;
