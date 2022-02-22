import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../App";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const userContext = useContext(UserContext);
  
  const handleRegistration = (data) => {
    userContext.isLogged = true;
    userContext.setAuth();
    console.log(data);
  };

  
  const onSubmit = () => console.log('onSubmit');
  console.log(userContext.isLogged);

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
          {errors.username && (
            <span>Username can't have more than 15 characters</span>
          )}
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
          {errors.password && (
            <span>Password must have at least 6 characters</span>
          )}
        </div>
        {userContext.isLogged ? (
          <button className="button" onClick={onSubmit}>
            Se déconnecter
          </button>
        ) : (
          <button className="button" type="submit">
            Se connecter
          </button>
        )}
      </form>
    </div>
  );
}
