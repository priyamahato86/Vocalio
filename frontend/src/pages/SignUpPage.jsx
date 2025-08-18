import { useState } from "react";
import { Mic2Icon } from "lucide-react";
import { Link } from "react-router";

import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8"
      data-theme="light"
    >
      <div className="border border-purple-300 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* LEFT SIDE - SIGNUP FORM */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col">
          {/* LOGO */}
          <div className="mb-6 flex items-center justify-start gap-2">
            <Mic2Icon className="size-9 text-purple-600" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 tracking-wider">
              Vocalio
            </span>
          </div>

          {/* ERROR MESSAGE */}
          {error && (
  <div className="alert alert-error mb-4 break-words text-sm sm:text-base w-full max-w-full">
    <span className="whitespace-pre-wrap">
      {error.response?.data?.message || "Signup failed. Please try again."}
    </span>
  </div>
)}

          <div className="w-full">
            <form onSubmit={handleSignup}>
              <div className="space-y-5">
                <div>
                  <h2 className="text-2xl font-semibold text-purple-700">Create an Account</h2>
                  <p className="text-sm opacity-70">
                    Join Vocalio and start your language learning journey today!
                  </p>
                </div>

                <div className="space-y-4">
                  {/* FULL NAME */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-gray-700">Full Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="input input-bordered w-full focus:border-purple-500 focus:ring-purple-500"
                      value={signupData.fullName}
                      onChange={(e) =>
                        setSignupData({ ...signupData, fullName: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-gray-700">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@gmail.com"
                      className="input input-bordered w-full focus:border-purple-500 focus:ring-purple-500"
                      value={signupData.email}
                      onChange={(e) =>
                        setSignupData({ ...signupData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* PASSWORD */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-gray-700">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="********"
                      className="input input-bordered w-full focus:border-purple-500 focus:ring-purple-500"
                      value={signupData.password}
                      onChange={(e) =>
                        setSignupData({ ...signupData, password: e.target.value })
                      }
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Password must be at least 6 characters long
                    </p>
                  </div>

                  {/* TERMS */}
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input type="checkbox" className="checkbox checkbox-sm border-purple-400" required />
                      <span className="text-xs leading-tight text-gray-600">
                        I agree to the{" "}
                        <span className="text-purple-600 hover:underline">terms of service</span> and{" "}
                        <span className="text-purple-600 hover:underline">privacy policy</span>
                      </span>
                    </label>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <button className="btn bg-gradient-to-r from-purple-600 to-pink-500 text-white w-full border-none hover:opacity-90 transition" type="submit">
                  {isPending ? (
                    <>
                      <span className="loading loading-spinner loading-xs"></span>
                      Loading...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>

                {/* LOGIN LINK */}
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-purple-600 hover:underline font-medium">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE - ILLUSTRATION */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-gradient-to-br from-purple-600 to-pink-500 items-center justify-center">
          <div className="max-w-md p-10 text-white">
            <div className="relative aspect-square max-w-sm mx-auto">
              <img
                src="https://img.freepik.com/premium-vector/online-language-school-students-learn-english-onlineonline-education-concept_651800-301.jpg"
                alt="Language learning illustration"
                className="w-full h-full drop-shadow-xl rounded-lg"
              />
            </div>
            <div className="text-center space-y-3 mt-6">
              <h2 className="text-2xl font-semibold">Learn languages with ease</h2>
              <p className="opacity-90">
                Connect with global partners, practice real conversations, and grow together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
