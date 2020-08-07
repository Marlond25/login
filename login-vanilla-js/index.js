// import db from "./modules/mck-db.js";

function search(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const url = "http://127.0.0.1:5000/hash";
  let data = new FormData();
  data.append("password", password);

  // const request = new Request(url, {
  //     method: "POST",
  //     // mode: "no-cors",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: data
  // });
  // const response = await fetch(request);
  // const text = await response.json();
  // console.log(text.password);

var requestOptions = {
  method: "POST",
  body: data,
  redirect: "follow"
};

fetch(url, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result.password))
  .catch(error => console.log("error", error));
}

document.getElementById("send").addEventListener("click", search);
