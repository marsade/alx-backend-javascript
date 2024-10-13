/* eslint-disable */
import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  let promise1 = uploadPhoto();
  let promise2 = createUser();

  return Promise.all([promise1, promise2]).then((values) => {
    const users = Object.values(values[1]);
    const body = Object.values(values[0]);
    const ele = [body[1], ...users];
    console.log(ele.join(' '));
  }).catch((error) => {
    console.log('Signup system offline');
  });
}
