export const PasswordRegex: RegExp =
  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])^[^\s]{8,20}$/;
export const EmailRegex: RegExp = /^([\w.-]+)@([\w-]+)((\.(\w){2,9})+)$/;
export const UsernameRegex: RegExp = /^[a-zA-Z0-9_.]{3,20}$/;
export const NameRegex: RegExp = /^[a-zA-Z]{3,20}$/;
