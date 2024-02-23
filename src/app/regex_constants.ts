export const usernameRegex: RegExp = /[a-zA-Z0-9_.]{3,20}$/;
export const passwordRegex: RegExp =
  /(?=.*[0-9])(?=.*[a−z])(?=.*[A-Z])^[^\s]+$/;
export const emailRegex: RegExp = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
