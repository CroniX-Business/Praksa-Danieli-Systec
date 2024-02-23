export const usernameRegex: RegExp = /^(?=.{4,20}$)[a-zA-Z0-9_.]+$/;
export const passwordRegex: RegExp =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
