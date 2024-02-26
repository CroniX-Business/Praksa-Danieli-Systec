export const passwordRegex: RegExp =
  /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])^[^\s]+$/;
export const usernameRegex: RegExp = /^[a-zA-Z0-9_.]+$/;
export const emailRegex: RegExp = /^([\w.-]+)@([\w-]+)((\.(\w){2,9})+)$/;
export const nameRegex: RegExp = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;

// ^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$
