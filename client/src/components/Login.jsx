import { LoginWrapper, ColFifty, LoginH1, LoginInput, LoginBtn } from "../assets/style/styled";
import todoLogo from "../assets/img/todoloog.svg"
import { useState } from "react";
import isUUID from 'validator/lib/isUUID';

const Login = () => {
    const [roomUUID, setRoomUUID] = useState("");

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

        console.log(todos);

        localStorage.setItem("roomToken", todos.status);
    }

    return (
        <ColFifty>
            <LoginWrapper>
                <img src={todoLogo} alt="todo logo" />
                <LoginH1>Hi 👋 Please enter your todo id</LoginH1>

                <form>
                    <label>
                        <LoginInput type="text" onChange={(e) => setRoomUUID(e.target.value)} placeholder="Enter room name" />
                    </label>
                    <LoginBtn type="submit" onClick={(e) => handleSubmit(e)}>Check</LoginBtn>
                </form>
            </LoginWrapper>
        </ColFifty>
    )
}

export default Login;