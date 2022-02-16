import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {login, logout} from "../redux/user";
import { useSelector } from "react-redux";



function Login() {
    const dispatch = useDispatch()
    const themeColor = useSelector((state) => state.theme.value);
    const [isTrue, setIsTrue] = useState(false)

    const handleLogin = () => {
        if (!isTrue){
            dispatch(login({
                name: "Zokirkhon",
                age: 23,
                email: "zokirxonkotibxanov@gmail.com"
            }))
            setIsTrue(true)
        } else {
            dispatch(logout())
            setIsTrue(false)
        }
    }


    return (
        <div>
            <div className={isTrue ? "loginSucces": "login"} style={{backgroundColor: themeColor}}>Login Successfully</div>
            <button onClick={handleLogin}>{isTrue?"Logout":"Login"}</button>
        </div>
    )
}

export default Login
