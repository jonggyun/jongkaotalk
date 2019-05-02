import { signUp, login, googleAuth } from '../firebase';

interface UserInfoProps {
  email: string;
  password: string;
}

const userRegister = async ({ email, password }: UserInfoProps) => {
  try {
    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // 비밀번호 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력
    const passwordRegex = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;

    if (!email.match(emailRegex)) throw new Error('email error');
    if (!password.match(passwordRegex)) throw new Error('password error');

    await signUp({ email, password });
  } catch (err) {
    throw new Error(`Error!!: ${err}`);
  }
};

const userLogin = async ({ email, password }: UserInfoProps) => {
  try {
    await login({ email, password });
  } catch (err) {
    throw new Error(`Error!!: ${err}`);
  }
};

const googleLogin = () => {
  googleAuth();
};

const endpoints = {
  userRegister,
  userLogin,
  googleLogin,
};

export default endpoints;