const regex = /^https?:\/\/[a-zA-Z0-9\-\.]+$/;
const url = prompt("Enter a URL: ");
if (regex.test(url)) {
  console.log("Valid URL");
} else {
  console.log("Invalid URL");
}