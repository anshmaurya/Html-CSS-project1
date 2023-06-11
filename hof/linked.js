const regex = /^https?:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_\-]{5,30}$/;
const url = prompt("Enter a LinkedIn profile URL: ");
if (regex.test(url)) {
  console.log("Valid LinkedIn profile URL");
} else {
  console.log("Invalid LinkedIn profile URL");
}