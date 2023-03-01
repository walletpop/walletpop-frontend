import fetchData from "./fetchData";

export default async function registerUser(userObj) {
  try {
    await fetchData("/register", "POST", userObj);
  } catch (e) {
    console.log(e);
  }
}
