import Button from "../components/Button";
import InputGroup from "../components/InputGroup";

import DefaultLink from "../components/DefaultLink";

const Register = () => {
  return (
    <form className="mx-auto my-8 self-baseline rounded-md border px-8 py-8 shadow-sm sm:w-80 md:w-96">
      <h2 className="text-center text-2xl font-semibold text-orange-300">
        Join us
      </h2>
      <InputGroup
        type="text"
        placeholder="Please enter your name"
        name="fullname"
      />
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
      <InputGroup
        type="password"
        placeholder="Please confirm your password"
        name="confirmPassword"
      />
      <Button>Register</Button>
      <span className="mt-4 block text-center">
        Already have an account ?
        <DefaultLink to="/login"> Login here</DefaultLink>
      </span>
    </form>
  );
};

export default Register;
