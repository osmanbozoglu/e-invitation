import axios from "axios";

export function signUp() {
  return {
    type: "SIGN_UP",
    payload: {
      user: "osman@gmail.com",
      token: "dsfasdfasdf"
    }
  };
}

export function signIn() {
  return {
    type: "SIGN_IN",
    payload: {
      email: "osman@gmail.com",
      token: "dsfasdfasdf"
    }
  };
}
