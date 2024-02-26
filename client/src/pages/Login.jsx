import React from 'react'
import { useState } from 'react';

const Login = () => {

const [user, setUser] = useState({
  email:"",
  password:""
});

const handleInput = (e) => {
  let name = e.target.name;
  let value = e.target.value;

  setUser({
    ...user,
    [name]: value,
  });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful");
  };

  return (
    <div>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/public/images/register.png"
                  alt="login form"
                  width={500}
                  height={500}
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                    <div>
                      <label htmlFor="password">password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        required
                        autoComplete="off"
                        value={user.password}
                        onChange={handleInput}
                      />
                    </div>
                    <button type="submit" className="btn btn-submit">
                      Register{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Login
