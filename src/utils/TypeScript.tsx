import { ChangeEvent, FormEvent } from "react";

export type InputChange = ChangeEvent<HTMLInputElement>
export type FormSubmit = FormEvent<HTMLFormElement>

export interface IUserLogin {
	account: string;
	password: string;
}

export interface IUser extends IUserLogin {
	name: string;
	avatar: string;
	role: string;
	type: string;
	updateAt: string;
	_id: string;
}
