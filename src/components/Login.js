import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
              required: true,
              maxLength: 15,
              })}
            placeholder="Username"
          />
          {errors.username && <span>Username can't have more than 15 characters</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              })}
            placeholder="Password"
          />
          {errors.password && <span>Password must have at least 6 characters</span>}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
