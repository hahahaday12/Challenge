import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TokenService } from "../../../../apis/TokenService";
import { UserService } from "../../../../apis/userService";
import useInput from "../../../../hooks/useInput";
import { flexCenter } from "../../../../styles/common";

const LoginForm = () => {
    const [email, onChangeEmail, setEmail] = useInput("");
    const [password, onChangPassword, setPassword] = useInput("");
    const navigate = useNavigate();

    const onLoginHandler = useCallback(
        async (e) => {
            e.preventDefault();
            try {
                const response = await UserService.login({
                    email,
                    password,
                });

                console.log(response);

                const { token } = response.data.data;
                TokenService.set({ key: process.env.REACT_APP_TOKEN_KEY, value: token });
                if (TokenService.get(process.env.REACT_APP_TOKEN_KEY)) {
                    navigate("/todo");
                }
            } catch (err) {
                throw new Error(err);
            }
        },
        [email, password]
    );

    return (
        <LoginFormWrapper>
            <LoginFormContainer>
                <p>
                    <input
                        type="text"
                        placeholder="이메일을 입력하세요"
                        value={email}
                        onChange={onChangeEmail}
                    />
                </p>
                <p>
                    <input
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        value={password}
                        onChange={onChangPassword}
                    />
                </p>
                <LoginButtonWapper>
                    <button onClick={onLoginHandler}>로그인</button>
                </LoginButtonWapper>
            </LoginFormContainer>
        </LoginFormWrapper>
    );
};
export default LoginForm;

const LoginFormWrapper = styled.div`
    width: calc(100% - 620px);
    height: 100%;
    ${flexCenter}
`;

const LoginFormContainer = styled.form`
    & > p {
        margin: 8px 0;
    }

    & input {
        border: 1px solid #999999;
        width: 380px;
        height: 60px;
        border-radius: 8px;
        padding-left: 32px;
    }
`;

const LoginButtonWapper = styled.div`
    text-align: center;

    & > button {
        width: 100%;
        height: 48px;
        border-radius: 8px;
        font-weight: ${(props) => props.theme.fontWeight.bold};
        color: ${(props) => props.theme.palette.fontColor};
        background-color: ${(props) => props.theme.palette.mainColor};
    }
`;
