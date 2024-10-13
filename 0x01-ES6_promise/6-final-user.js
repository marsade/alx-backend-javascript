import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
   .then((result) => {
      console.log([{
        status: `${Promise.status}`,
        value: result,
      }]);
    })
}
