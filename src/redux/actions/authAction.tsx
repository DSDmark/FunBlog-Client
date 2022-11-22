import { Dispatch } from "redux";
import { AUTH, IAuthType } from "../types/authTypes";}
import { postAPI } from "../../utils/FetchData";
import { IUserLogin } from "../../utils/TypeScript";

export const login = (userLogin: IUserLogin) =>
	async (dispatch: Dispatch<IAuthType>)
		=> {
		try {
			const res = await postAPI("login", userLogin);
			console.log(res);
			dispatch({
				type: AUTH,
				payload: {
					user: res.data.user,
					token: res.data.accesstoken,
				}
			})
		} catch (err: any) {
			console.log(err.response.data.msg);
		}
	}