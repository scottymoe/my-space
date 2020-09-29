import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormInput } from "../Hooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";

const Register = (props) => {
  const email = useFormInput("testx@test.com", "Email");

  const password = useFormInput("123456", "Password");

  const passwordConfirmation = useFormInput("123456", "password Confrimation");

  const { handleRegister, authLoading, authErrors } = useContext(AuthContext);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.value !== passwordConfirmation.value) {
      alert("passwords don not match");
    } else {
      handleRegister(
        {
          email: email.value,
          password: password.value,
        },
        history
      );
    }
  };
  
  console.log(authErrors)
  return (
    <div>
      {authErrors && (
        <>
          {authErrors.map((err) => (
            <p>{err}</p>
          ))}
        </>
      )}

      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <p>{email.label}</p>
        <input autoFocus {...email} />
        <p>{password.label}</p>
        <input type="password" {...password} />
        <p>{passwordConfirmation.label}</p>
        <input type="password" {...passwordConfirmation} />
        {authLoading ? (
          <button disabled> spinner goes here</button>
        ) : (
          <button type="submit">register</button>
        )}
      </form>
    </div>
  );
};

export default Register;
