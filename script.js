const title = document.getElementById("title");
const modal = document.getElementById("modal");
const closeButton = document.createElement("span");

title.addEventListener("click", () => {
	modal.style.display = "block";
	document.body.style.overflow = "hidden";
});

closeButton.innerHTML = "&times;";
closeButton.className = "close-button";
closeButton.addEventListener("click", () => {
	modal.style.display = "none";
	document.body.style.overflow = "auto";
});

modal.addEventListener("click", (event) => {
	if (event.target === modal) {
		modal.style.display = "none";
		document.body.style.overflow = "auto";
	}
});

document.querySelector("form").addEventListener("submit", (event) => {
	event.preventDefault();
	const name = document.getElementById("name").value;
	alert("Welcome, " + name + "! See the door in front you? There is your destination.");
	modal.style.display = "none";
	document.body.style.overflow = "auto";
});


const dateElement = document.getElementById("date");

fetch("https://worldtimeapi.org/api/timezone/America/New_York")
  .then(response => response.json())
  .then(data => {
    const datetime = new Date(data.datetime);
    dateElement.textContent = datetime.toLocaleString();
  })
  .catch(error => {
    console.error(error);
    dateElement.textContent = "Unable to retrieve date";
  });