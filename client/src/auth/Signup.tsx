import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { userSignupSchema, type SignupInputState } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail, PhoneOutgoing, User } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const loading = false;
  const [input, setInput] = useState<SignupInputState>({
    email: "",
    password: "",
    contact: "",
    fullname: "",
  });
  const [errors, setErrors] = useState<Partial<SignupInputState>>({});
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const result = userSignupSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<SignupInputState>);
      return;
    }
    console.log("data", input);
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={loginSubmitHandler}
          className="md:p-8 w-full max-w-md md:border border-gray-200 mx-4 rounded-lg"
        >
          <div className="mb-4  text-center">
            <h1 className="font-bold text-2xl center">SohilEats</h1>
          </div>
          <div className="mb-4">
            <div className="relative">
              <Input
                className="pl-10 focus-visible:ring-0"
                type="text"
                name="fullname"
                value={input.fullname}
                onChange={changeEventHandler}
                placeholder="fullname"
              />
              <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"></User>
              {errors && (
                <span className="text-sm text-red-500">{errors.fullname}</span>
              )}
            </div>
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
                className="pl-10 focus-visible:ring-0"
                type="text"
                name="contact"
                value={input.contact}
                onChange={changeEventHandler}
                placeholder="contact"
              />
              <PhoneOutgoing className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"></PhoneOutgoing>
              {errors && (
                <span className="text-sm text-red-500">{errors.contact}</span>
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
                <span className="text-sm text-red-500">{errors.password}</span>
              )}
            </div>
          </div>
          <div className="mb-10">
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
                SIgn Up
              </Button>
            )}
          </div>
          <Separator></Separator>
          <p className=" mt-2 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
