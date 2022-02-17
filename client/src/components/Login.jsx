import { LoginWrapper, ColFifty, LoginH1, LoginInput, LoginBtn } from "../assets/style/styled";
import todoLogo from "../assets/img/todoloog.svg"
import { useEffect, useState } from "react";
import isUUID from 'validator/lib/isUUID';

const Login = () => {
    const [roomUUID, setRoomUUID] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // check if UUID is valid
        if (roomUUID.length === 0 || !isUUID(roomUUID, 4)) {
            // TODO: show error about invalid UUID
            console.error("Please enter a valid UUID (must be version 4)");
            return;
        }

        let todos = await fetch(`http://localhost:3001/todopage/${roomUUID}`)
        todos = await todos.json();

        localStorage.setItem("roomToken", todos.status);

        
    }

    return (
        <ColFifty>
            <LoginWrapper>
                <img src={todoLogo} alt="todo logo" />
                <LoginH1>Hi 👋 Please enter your todo id</LoginH1>

                <form>
                    <LoginInput type="text" onChange={(e) => setRoomUUID(e.target.value)} placeholder="Enter todo uuid" />
                    <LoginInput type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Enter todo password" />
                    <LoginBtn type="submit" onClick={(e) => handleSubmit(e)}>Check</LoginBtn>

                </form>
            </LoginWrapper>
        </ColFifty>
    )
}

export default Login;