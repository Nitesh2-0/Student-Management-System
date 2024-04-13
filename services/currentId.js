function setCuuentUser(email,password){
  this.email = email,
  this.password = password
}

function getCurrentUserDetails(){
  data = {
    email:email,
    password:password
  }
}

module.exports = {
  setCuuentUser,
  getCurrentUserDetails
}