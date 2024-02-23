export const PasswordRegex: RegExp =
  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])^[^\s]{8,20}$/;
export const EmailRegex: RegExp =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const UsernameRegex: RegExp = /^[a-zA-Z0-9_.]{3,20}$/;
