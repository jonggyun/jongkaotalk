import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../modules/index';
import { userRegister } from '../../modules/auth';

import InputSection from '../../components/main/InputSection';

interface InputSectionContainer {
  type: string;
  userRegister: Function;
}
const InputSectionContainer: React.FC<InputSectionContainer> = ({
  type,
  userRegister,
}) => {
  const [pageType, pageTypeState] = useState('login');
  const [email, emailState] = useState('');
  const [password, passwordState] = useState('');
  const [confirmPassword, confirmPasswordState] = useState('');
  const [comparePassword, comparePasswordState] = useState(false);

  const handleType = () => {
    pageType === 'login' ? pageTypeState('signup') : pageTypeState('login');
  };

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    name === 'email'
      ? emailState(value)
      : name === 'password'
      ? passwordState(value)
      : confirmPasswordState(value);

    if (name === 'confirmPassword') {
      password === value
        ? comparePasswordState(true)
        : comparePasswordState(false);
    }
  };

  const handleOnSubmit = () => {
    pageType === 'login'
      ? console.log('login')
      : userRegister({ email, password });
  };

  useEffect(() => {
    emailState('');
    passwordState('');
    confirmPasswordState('');
  }, [pageType]);

  return (
    <InputSection
      type={type}
      pageType={pageType}
      handleType={handleType}
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      comparePassword={comparePassword}
    />
  );
};

export default connect(
  (state: RootState, ownProps) => ({
    type: state.auth.type,
  }),
  {
    userRegister,
  }
)(InputSectionContainer);
