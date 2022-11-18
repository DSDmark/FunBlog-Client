import React,{useState} from "react"


const LoginPass = () => {
	const [phone,setPhone]  = useState("");
	return (
		<form>
		<div className="form-group mb-5">
		<label className="form-label" htmlFor="phone">Phone Number</label>
			<input type="text" className="form-control" name="phone" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
		</div>
			<button type="submit" disabled={phone?false:true} className="btn btn-dark w-100">Login</button>
		</form>
	)
}

export default LoginPass;