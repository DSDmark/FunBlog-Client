import { postAPI } from "../../utils/FetchData";
import { IUserLogin } from "../../utils/TypeScript";

export const login = (userLogin: IUserLogin) => async (dispatch: any) => {
	try {
		const res = await postAPI("login", userLogin);
		console.log(res);
	} catch (err: any) {
		console.log(err.response.data.msg);
	}
}