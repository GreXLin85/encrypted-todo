import {LoginWrapper, ColFifty, LoginH1, LoginInput, LoginBtn} from "../assets/style/styled";
import todoLogo from "../assets/img/todoloog.svg"


const Login = () => {
    return (
        <ColFifty>
            <LoginWrapper>
                <img src={todoLogo} alt="todo logo"/>
                <LoginH1>Hi 👋 Please login or register</LoginH1>

                <form>
                    <label>
                        <LoginInput type="text" placeholder="Enter room name"/>
                    </label>
                    <LoginBtn type="submit">Check</LoginBtn>
                </form>
            </LoginWrapper>
        </ColFifty>
    )
}

export default Login;