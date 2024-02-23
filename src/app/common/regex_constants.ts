export const passwordRegex: RegExp =
  /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])^[^\s]+$/;
export const usernameRegex: RegExp = /^[a-zA-Z0-9_.]+$/;
export const emailRegex: RegExp =
  /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const nameRegex: RegExp = /^[a-zA-Z]$/;
