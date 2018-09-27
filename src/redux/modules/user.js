// imports

// actions
const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";

function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token
  };
}

function logout() {
  return {
    type: LOGOUT
  };
}

const initialState = {
  isLoggedIn: true,
  _id: "593e9297df21e62e0465f91f",
  name: "kissian",
  profile: {
    nickname: "kissian",
    profileImage: "/assets/img/kissian.jpg"
  }
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action);
    case LOGOUT:
      return applyLogout(state, action);
    default:
      return state;
  }
}

// reducer functions

function applySetToken(state, action) {
  const { token } = action;
  localStorage.setItem("jwt", token);
  return {
    ...state,
    isLoggedIn: true,
    // token: token
  };
}

function applyLogout(state, action) {
  localStorage.removeItem("jwt");
  return {
    isLoggedIn: false
  };
}

// exports

const actionCreators = {
  // usernameLogin,
  // createAccount,
  // logout,
  saveToken,
  logout
};

export { actionCreators };

// export reducer by default

export default reducer;