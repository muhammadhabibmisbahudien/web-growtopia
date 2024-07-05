import Input from "../../components/Input";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-10">
        <img
          className="w-[100px] h-[100px] rounded-full"
          src="./logo-white.png"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center lg:w-1/3 w-3/4 bg-primary p-10 border rounded-xl">
        <h1 className="font-bold text-3xl mb-3">Sign Up</h1>
        <div className="space-y-4 w-full mb-10">
          <div className="">
            <h1>Name</h1>
            <Input></Input>
          </div>
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
              Create Account
            </button>
            <p>
              By Continuing, you agree to the Terms of use and Privacy Policy
            </p>
          </div>
        </div>
        <p>
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-blue-900 cursor-pointer hover:underline"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
