import axios from "axios";

const baseURL = "https://FunBlog-Server.sanskarsahu.repl.co"

export const postAPI = async (url: string, post: object, token?: string) => {
	const res = await axios.post(`${baseURL}/api/${url}`, post, {
		headers: { Authorization: token }
	});
	return res;
}