import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { userLoginSchema, type LoginInputState } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const loading = false;
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<LoginInputState>>({});
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const result = userLoginSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<LoginInputState>);
      return;
    }
    console.log("data", input);
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full">
        <form
          onSubmit={loginSubmitHandler}
          // className="md:p-8 w-full max-w-md md:border border-gray-200 mx-4 rounded-lg"
          className="md:p-8 w-full max-w-md md:border border-gray-200 mx-4 rounded-lg"
        >
          <div className="mb-4  text-center">
            <h1 className="font-bold text-2xl center">SohilEats</h1>
          </div>
          <div className="mb-4">
            <div className="relative">
              <Input
                className="pl-10 focus-visible:ring-0"
                type="email"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
                placeholder="Email"
              />
              <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"></Mail>
              {errors && (
                <span className="text-sm text-red-500"> {errors.email}</span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <Input
                className="pl-10  focus-visible:ring-0"
                type="password"
                name="password"
                value={input.password}
                onChange={changeEventHandler}
                placeholder="password"
              />
              <LockKeyhole className="absolute inset-y-2 text-gray-500 left-2"></LockKeyhole>
              {errors && (
                <span className="text-sm text-red-500"> {errors.password}</span>
              )}
            </div>
          </div>
          <div className="mb-6">
            {loading ? (
              <Button
                disabled
                className=" bg-orange-400 hover:bg-orange-300 w-full"
              >
                <Loader2 className="mr-2 h-4 w-4  animate-spin"></Loader2>Please
                Wait
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-orange-400 hover:bg-orange-300 w-full"
              >
                Login
              </Button>
            )}
          </div>

          <p className=" mb-2 text-center">
            <Link to="/forget-password" className="hover:text-blue-500">
              Forgot Password
            </Link>
          </p>
          <Separator></Separator>
          <p className="text-center">
            Don't have Account?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
