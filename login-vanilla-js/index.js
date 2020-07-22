import db from "./modules/mck-db.js";

document.getElementByName("send").addEventListenner("click", search);

const search = () => {
  preventDefault();
  const username = document.getElementByName("username").value;
  const password = document.getElementByName("password").value;
  return console.log(db(username, password));
}
