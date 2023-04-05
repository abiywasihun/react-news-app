import React, { useState } from "react"
import { connect, ConnectedProps } from "react-redux"
import { signup } from "./SignUp.thunks"
import { Link } from "react-router-dom";
import { Title } from "./SignUp.styles"
import { useNavigate } from 'react-router-dom';
import { PATH } from "../../constants/paths"

const mapStateToProps = state => ({
  loading: state.loading
})

const mapDispatchToProps = {
  signup
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> {}

const SignUp = (props: Props) => {
  const { signup, loading } = props
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!loading) {
      const payload = { username, password }
      signup(payload)
        .then(res => {
          navigate(PATH.HOME)
        })
        .catch(err => {
          setError(err.payload.message)
        })
    }
  }

  return (
    <div className="container">
      <div className="min-vh-100 row">
        <div className="col-md-6 m-auto">
          <form className="p-5 rounded-sm shadow text-center" onSubmit={submit}>
            <Title>Sign Up</Title>
            <p className="text-muted">Create Account!</p>
            <input
              type="text"
              placeholder="Name"
              onChange={handleName}
              className="form-control form-control-lg mb-4"
            />
            <input
              type="text"
              placeholder="Username"
              onChange={handleUsername}
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
            <button type="submit" className="btn btn-block btn-info btn-lg">
              SignUp
            </button>
            <p>already have an account <Link to={PATH.LOGIN}>Sign in</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default connector(SignUp)
