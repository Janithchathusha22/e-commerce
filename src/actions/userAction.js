import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const data = { email, password };

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    alert("login successfull");
    window.location.href = "/customer-home";
    

  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


//clear the localstorage 

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
   window.location.href = "/";
  dispatch({ type: USER_LOGOUT });
};


export const register = (name, password, email, phone) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const data = { name, password, email, phone };

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

    localStorage.setItem("user", JSON.stringify(data));
 
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
