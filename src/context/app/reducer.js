const DEFAULT_IMAGE = "";

export default function reducer(state, action) {
  switch (action.type) {
    case "SIGNIN":
      const { sessionId, profileImage: imageUrl, ...defaultUser } = action.payload;
      const profileImage = (imageUrl === "" || imageUrl === null || imageUrl === undefined) ? DEFAULT_IMAGE : imageUrl;
      const user = { ...defaultUser, profileImage };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("sessionId", sessionId);
      return {
        ...state,
        user,
        sessionId
      };
    case "SIGNOUT":
      localStorage.removeItem("user");
      localStorage.removeItem("sessionId");
      return {
        ...state,
        user: {},
        sessionId: null
      };
    case "INFO_AVALUO":
      return {
        ...state,
        avaluo: action.payload
      };
    default:
      return state;
  }
}
