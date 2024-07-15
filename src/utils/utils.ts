export const Login = () => {
    const userData =  localStorage.getItem("user");
    return userData != null ? true : false
  }
export const Logout = () => {
    localStorage.removeItem("user")
  }