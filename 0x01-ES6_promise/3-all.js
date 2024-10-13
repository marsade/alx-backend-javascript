/* eslint-disable */
import { createUser, uploadPhoto } from "./utils";

export default function handleProfileSignup(){
  let promise1 = uploadPhoto();
  let promise2 = createUser();

  Promise.all([promise1, promise2]).then((values) => {
    const ele = Object.values(values[1]);
    console.log(ele.join(' '));
  })
}