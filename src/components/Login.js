import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);

  return (
    <div>
      LOGIN
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
          <label>Username</label>
          <input
            name="username"
            type="text"
            {...register("username", {
              required: "Name is required",
              maxLength: {
                value: 15,
                message: "Username can have 15 characters maximum",
              },
            })}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters",
              },
            })}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
