const generatePassword = () => {
  const length = document.querySelector("#slider").value;
  const includeSpecialChars = document.querySelector("#checkbox").checked;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";
  let charSet = charset;
  if (includeSpecialChars) {
    charSet += specialChars; 
  }
  for (let i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return password; 
};

const generateBtn = document.querySelector("#generate");
const passwordTxt = document.querySelector("#pwd_txt");
const clipboardBtn = document.querySelector("#clipboard");

generateBtn.addEventListener("click", () => {
  passwordTxt.innerText = generatePassword();
});

clipboardBtn.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = passwordTxt.innerText;
  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard!");
});