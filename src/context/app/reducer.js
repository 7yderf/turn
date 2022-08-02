export default function reducer(state, action) {
  switch (action.type) {
    case "INFO_AVALUO":
      return {
        ...state,
        avaluo: action.payload
      };
    default:
      return state;
  }
}
