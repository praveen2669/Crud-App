import React, { useState } from "react";
import { useFormik } from "formik";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [dark, setDark] = useState(false);

  const login = {
    username: "praveen",
    password: "123",
  };

  const form = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      if (form.values.username === "" || form.values.password === "") {
        alert("Please enter your username and password");
      } else if (
        form.values.username === login.username &&
        form.values.password === login.password
      ) {
        navigate("/crud");
      } else {
        alert("Check the username and password");
      }
    },
  });

  return (
    <div className={dark ? "dark" : "light"}>
      <Button className="mode" onClick={() => setDark(!dark)}>
        mode
      </Button>
      <div className="login">
        <Form>
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              placeholder="Enter your username"
              name="username"
              id="username"
              onChange={form.handleChange}
              value={form.values.username}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password"> Password </Label>
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              id="password"
              onChange={form.handleChange}
              value={form.values.password}
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit" variant="dark" onClick={form.handleSubmit}>
              Sign in
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default Login;
