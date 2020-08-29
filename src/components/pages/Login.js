import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  PageLayout,
  Input,
  PasswordInput,
  Button,
  Spinner
} from 'components/common';

const Form = styled.form`
  display: block;
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0 0;
  }

  > ${Button}:first-of-type {
    margin-top: 20px;
  }

  > ${Input} {
    margin-top: 20px;
  }
`;

let timeout;

export function Login() {
  const [formFields, setFormFields] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    e.persist();
    setFormFields((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <span>Login with your account</span>
            <Input
              value={formFields.username}
              onChange={handleInputChange}
              name="username"
              type="text"
              placeholder="Username"
            />
            <PasswordInput
              value={formFields.password}
              onChange={handleInputChange}
              name="password"
            />
          </>
        )}
        <Button large type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">
              or <a href="/register">register</a>
            </div>
            {/* <Button secondary type="button">
          Register
        </Button> */}
          </>
        )}
      </Form>
    </PageLayout>
  );
}