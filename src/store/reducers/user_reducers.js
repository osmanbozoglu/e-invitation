export default function(state = {}, action) {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        auth: {
          email: action.payload.email || false
        }
      };
    case "SIGN_UP":
      return {
        ...state,
        auth: {
          email: action.payload.email || false
        }
      };
  }
}
