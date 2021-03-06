import axios from "axios";
import * as actionTypes from "./actionTypes";
import {serverUrl} from "../../backend_route";


export const authStart = () => {
	return {
		type: actionTypes.AUTH_START,
	};
};

export const authSuccess = (token) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		token: token,
	};
};

export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error,
	};
};

export const checkAuthTimeout = (expirationTime) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(logout());
		}, expirationTime * 1000);
	};
};

export const logout = () => {
	localStorage.removeItem("user");
	localStorage.removeItem("expirationDate");
	return {
		type: actionTypes.AUTH_LOGOUT,
	};
};

export const authLogin = (username, password) => {
	return (dispatch) => {
		dispatch(authStart());
		axios
			.post(`${serverUrl}/rest-auth/login/`, {
				username: username,
				password: password,
			})
			.then((res) => {
				console.log("-----auth----res.data", res);
				const token = res.data.key;
				// user = User.objects.filter(user=serializer.instance)
				const expirationDate = new Date(new Date().getTime() + 3600 * 1000); // 1 hour
				localStorage.setItem("token", token);
				localStorage.setItem("expirationDate", expirationDate);
				dispatch(authSuccess(token));
				dispatch(checkAuthTimeout(3600));
			})
			.catch((err) => {
				dispatch(authFail(err));
			});
	};
};

export const authSignup = (username, email, password1, password2) => {
	return (dispatch) => {
		dispatch(authStart());
		axios
			.post(`${serverUrl}/rest-auth/registration/`, {
				username: username,
				email: email,
				password1: password1,
				password2: password2,
			})
			.then((res) => {
				console.log("-----auth----res.data", res.data);
				const token = res.data.key;
				const expirationDate = new Date(new Date().getTime() + 3600 * 1000); // 1 hour
				localStorage.setItem("token", token);
				localStorage.setItem("expirationDate", expirationDate);
				dispatch(authSuccess(token));
				dispatch(checkAuthTimeout(3600));
			})
			.catch((err) => {
				dispatch(authFail(err));
			});
	};
};

export const authCheckState = () => {
	return (dispatch) => {
		const token = localStorage.getItem("token");
		if (token === undefined) {
			dispatch(logout());
		} else {
			const expirationDate = new Date(localStorage.getItem("expirationDate"));
			if (expirationDate <= new Date()) {
				dispatch(logout());
			} else {
				dispatch(authSuccess(token));
				dispatch(
					checkAuthTimeout(
						(expirationDate.getTime() - new Date().getTime()) / 1000,
					),
				);
			}
		}
	};
};
