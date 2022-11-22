import { AUTH, IAuth, IAuthType } from "../types/authTypes";

const authReducers = (state: IAuth, action: IAuthType): IAuth => {
	switch (action.type) {
		case AUTH:
			return action.payload;
		default:
			return state;
	}

}

export default authReducers;
