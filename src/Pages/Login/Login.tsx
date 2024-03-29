import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { login } from './Login.thunks';
import { Link } from 'react-router-dom';
import { Title } from './Login.styles';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/paths';

const mapStateToProps = state => ({
  loading: state.loading,
});

const mapDispatchToProps = {
  login,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {}

const Login = (props: Props) => {
  const { login, loading } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!loading) {
      const payload = { email, password };
      login(payload)
        .then(res => {
          console.log(res);
          navigate(PATH.HOME);
        })
        .catch(err => {
          setError(err.payload.response?.data.message);
        });
    }
  };

  return (
    <div className="container">
      <div className="min-vh-100 row">
        <div className="col-md-6 m-auto">
          <form className="p-5 rounded-sm shadow text-center" onSubmit={submit}>
            <Title>Login</Title>
            <p className="text-muted">Please enter your login and password!</p>
            <input
              type="text"
              placeholder="Email"
              onChange={handleEmail}
              className="form-control form-control-lg mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handlePassword}
              className="form-control form-control-lg mb-4"
            />
            {error && (
              <div className="mb-3 text-danger text-xl-center">{error}</div>
            )}
            <button type="submit" className="btn btn-block btn-primary btn-lg">
              Login
            </button>
            <p>"Don't have an account yet? <Link to={PATH.SIGNUP}>Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connector(Login);
