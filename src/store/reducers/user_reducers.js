export default function(state = {}, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        auth: {
          email: action.payload.email || false,
          token: action.payload.token || false
        }
      };
    case "REGISTER":
      return {
        ...state,
        auth: {
          email: action.payload.email || false,
          token: action.payload.token || false
        }
      };
  }
}
