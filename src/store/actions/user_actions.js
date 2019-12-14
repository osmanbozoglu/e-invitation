import axios from "axios";

export function register() {
  return {
    type: "REGISTER",
    payload: {
      user: "osman@gmail.com",
      token: "dsfasdfasdf"
    }
  };
}

export function login() {
  return {
    type: "LOGIN",
    payload: {
      email: "osman@gmail.com",
      token: "dsfasdfasdf"
    }
  };
}
