import React,{useState} from "react"
import {InputChange,FormSubmit} from "../../utils/TypeScript";
import {useDispatch} from "react-redux";
import {login} from "../../redux/actions/authAction";

const LoginPass = () => {
	const initailState = {account:"",password:""};
	const [userLogin,setLogin] = useState(initailState);
	const {account,password} = userLogin;
	const dispatch = useDispatch();
	const [togglePasswordShow,setPasswordShow] = useState(false);

	const hendleChangeInput = (e:InputChange)=>{
		const {value,name} = e.target;
		setLogin({...userLogin,[name]:value});
	}

	const hendleSubmit = (e:FormSubmit)=>{
		e.preventDefault();
		dispatch(login(userLogin))
	}
	
	return (
		<form onSubmit={(e)=>hendleSubmit(e)}>
		<div className="form-group mb-5">
		<label className="form-label" htmlFor="account">Email / Phone Number</label>
			<input type="text" className="form-control" name="account" id="account" value={account} onChange={hendleChangeInput}/>
		</div>
					<div className="form-group mb-5">
		<label className="form-label" htmlFor="Password">Password</label>
			<input type={togglePasswordShow?"text":"password"} name="password" className="form-control" id="Password"  value={password} onChange={hendleChangeInput}/>
						<small className="text-primary" role="button" onClick={()=>setPasswordShow(!togglePasswordShow)}>Show Password</small>
		</div>
			<button type="submit" disabled={(account && password)?false:true} className="btn btn-dark w-100">Login</button>
		</form>
	)
}

export default LoginPass;