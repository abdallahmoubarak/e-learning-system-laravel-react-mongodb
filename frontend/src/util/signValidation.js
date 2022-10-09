const regularExpression =
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

/************** Sign Validation Function **************/
export const validSign = (signType, email, password, name, type) => {
  let valid = true;
  if (
    signType === "signup" &&
    (!type ||
      name.length < 5 ||
      !(
        email.includes("@") &
        (email.indexOf("@") > 2) &
        (email.length - email.indexOf("@") > 5)
      ) ||
      !regularExpression.test(password))
  ) {
    valid = false;
  } else if (
    (signType === "signin" &&
      !(
        email.includes("@") &
        (email.indexOf("@") > 2) &
        (email.length - email.indexOf("@") > 5)
      )) ||
    !regularExpression.test(password)
  ) {
    valid = false;
  }
  return valid;
};
