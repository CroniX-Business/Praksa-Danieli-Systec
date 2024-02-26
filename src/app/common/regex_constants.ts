export const usernameRegex: RegExp = /^(?=.{4,20}$)[a-zA-Z0-9_.]+$/;
export const passwordRegex: RegExp =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
export const emailRegex =
  /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/;
