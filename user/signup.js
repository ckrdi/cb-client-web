// save user info when they submit, then redirect to profile

const signUpForm = document.forms.SignUp;

signUpForm.addEventListener("submit", function(event) {

  // stop the page from refreshing
  event.preventDefault();
  // get the data out of the form
  const name = signUpForm.elements.name.value;
  const jobTitle = signUpForm.elements.jobTitle.value;
  // use utility method to save user data
  saveUserToLocalStorage(name, jobTitle);
  // send user off to their profile page
  window.location.href = "/user/profile.html";
});

// utility method

function saveUserToLocalStorage(name, jobTitle) {
  const userJSON = {
    "name": name,
    "jobTitle": jobTitle
  }
  // serialize the data i.e. convert it to format
  // your storage layer uses. localStorage will only store strings.
  const userStringified =  JSON.stringify(userJSON);

  // save the serialized data to localStorage.
  localStorage.setItem("\_cb_user", userStringified);
};
