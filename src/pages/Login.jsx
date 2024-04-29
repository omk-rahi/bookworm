import Button from "../components/Button";
import InputGroup from "../components/InputGroup";

import DefaultLink from "../components/DefaultLink";

const Login = () => {
  return (
    <form className="mx-auto my-8 self-baseline rounded-md border px-8 py-8 shadow-sm sm:w-80 md:w-96">
      <h2 className="text-center text-2xl font-semibold text-orange-300">
        Welcom back
      </h2>
      <InputGroup
        type="email"
        placeholder="Please enter your email"
        name="email"
      />
      <InputGroup
        type="password"
        placeholder="Please enter your password"
        name="password"
      />
      <Button>Login</Button>
      <span className="mt-4 block text-center">
        Don&apos;t have an account ?
        <DefaultLink to="/register"> Register here</DefaultLink>
      </span>
    </form>
  );
};

export default Login;
