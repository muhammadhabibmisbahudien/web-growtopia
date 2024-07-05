import { redirect } from "next/navigation";
import Input from "../../components/Input";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-10">
        <img
          className="w-[100px] h-[100px] rounded-full"
          src=".\logo-white.png"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center w-3/4 lg:w-1/3 bg-primary p-10 border rounded-xl">
        <h1 className="font-bold text-3xl mb-3">Log In</h1>
        <div className="space-y-4 w-full mb-10">
          <div className="">
            <h1>Email or mobile phone number</h1>
            <Input></Input>
          </div>
          <div className="">
            <h1>Your Password</h1>
            <Input></Input>
          </div>
          <div className="space-y-3">
            <button className="border p-3 rounded-3xl w-full  text-white">
              Sign In
            </button>
            <p>
              By Continuing, you agree to the Terms of use and Privacy Policy
            </p>
          </div>
        </div>
        <p>
          Dont have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-blue-900 cursor-pointer hover:underline"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
