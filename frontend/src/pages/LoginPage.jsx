import { useState } from "react";
import { Mic2Icon } from "lucide-react";
import { Link } from "react-router";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-b from-purple-50 to-white">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-white/80 backdrop-blur-xl border border-purple-200 rounded-2xl shadow-lg overflow-hidden">
        
        {/* LOGIN FORM SECTION */}
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
            <div className="alert alert-error mb-4 rounded-lg">
              <span>{error.response.data.message}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div>
              <h2 className="text-2xl font-bold text-purple-800">Welcome Back 👋</h2>
              <p className="text-sm text-gray-600">
                Sign in to continue your language learning journey
              </p>
            </div>

            {/* EMAIL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="input input-bordered w-full rounded-xl"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full rounded-xl"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                required
              />
            </div>

            {/* SIGN IN BUTTON */}
            <button
              type="submit"
              className="btn w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white border-0 shadow-md hover:opacity-90 transition"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <span className="loading loading-spinner loading-xs"></span>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>

            {/* SIGNUP LINK */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-700">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-purple-600 font-semibold hover:underline"
                >
                  Create one
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* IMAGE / ILLUSTRATION SECTION */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-gradient-to-br from-purple-600/10 to-pink-500/10 items-center justify-center">
          <div className="max-w-md p-10 text-center">
            <div className="relative aspect-square max-w-sm mx-auto drop-shadow-lg">
               <img
                src="https://img.freepik.com/premium-vector/online-language-school-students-learn-english-onlineonline-education-concept_651800-301.jpg"
                alt="Language learning illustration"
                className="w-full h-full drop-shadow-xl rounded-lg"
              />
            </div>

            <div className="space-y-3 mt-6">
              <h2 className="text-2xl font-semibold text-purple-700">
                Connect with language partners worldwide 🌍
              </h2>
              <p className="text-gray-600">
                Practice conversations, make friends, and grow your fluency with
                the global Vocalio community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
