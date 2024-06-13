import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { signUp } from "../feture/userAxios";

const initialState = [
  {
    fullName: null,
    email: null,
    phone: null,
    password: null,
    confirmPassword: null,
  },
];

export const UserForm = () => {
  const [form, setFrom] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFrom({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      window.alert("password do not match");
    }
    const userData = await signUp(rest);
  };

  return (
    <div className="d-flex align-items-center justify-content-center p-3">
      <Form className="bg-secondary rounded" onSubmit={handleOnSubmit}>
        <h1>SignUp Form</h1>
        <hr />
        <Form.Group className="mb-3 text-center ">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 text-center ">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 text-center ">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            name="phone"
            placeholder="Phone Number"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 text-center">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 text-center">
          <Form.Label>ConfirmPassword</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleOnChange}
          />
        </Form.Group>
        <div className="d-flex align-items-center justify-content-center p-3">
          <Button variant="primary" type="submit">
            Submit Form
          </Button>
        </div>
      </Form>
    </div>
  );
};
