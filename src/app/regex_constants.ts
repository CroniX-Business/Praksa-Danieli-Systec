export const usernameRegex: RegExp = /^[a-zA-Z0-9_.]{3,20}$/;
export const passwordRegex: RegExp =
/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])^[^\s]{8,20}$/;
export const emailRegex: RegExp = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const nowhitespaceRegex: RegExp = /^\S+$/;
