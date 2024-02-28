import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import animation from "../../assets/lottie/parcelDeliver.json";
import toast from "react-hot-toast";
import { getAccessToken, saveUserData } from "../../Api/Auth";
import loginPageBg from "../../assets/image/loginPageBg.jpg";
import bgimg from "../../assets/image/bg-footer.jpg";
import Logo from "../../Components/Shared/Logo";
// import useLazyLoading from "../../Hooks/useLazyLoading";
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [demoEmail, setDemoEmail] = useState("");
  const [demoPassword, setDemoPassword] = useState("");
  const { signIn, signInWithGoogle, logOut } = useAuth();
  // const bgLoded = useLazyLoading(loginPageBg);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const loc = useLocation();

  useEffect(() => {
    loadCaptchaEnginge(6, "white", "#D1A054");
  }, []);

  const onSubmit = async (data) => {
    // console.log(data);
    const toastId = toast.loading("Logining...");
    const email = data.email;
    const password = data.password;
    const captchaInput = data.captchaInput;
    if (!validateCaptcha(captchaInput)) {
      toast.error("Invalid Captcha,Please try again", { id: toastId });
      return;
    }

    try {
      //1. User Login
      const { user } = await signIn(email, password);
      const accessToken = await getAccessToken(user?.email);
      if (accessToken?.success) {
        toast.success("Successfully Logged In", { id: toastId });
        navigate(loc?.state ? loc.state : "/", { replace: true });
      } else {
        logOut();
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };
  const handleLoginWithGoogle = async () => {
    const toastId = toast.loading("logining ...");

    try {
      const { user } = await signInWithGoogle();
      const accessToken = await getAccessToken(user?.email);
      if (user?.email && accessToken?.success) {
        const data = await saveUserData(user, "user");
        console.log(data);
        toast.success("Successfully Logged In", { id: toastId });
        navigate(loc?.state ? loc.state : "/", { replace: true });
      } else {
        logOut();
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${loginPageBg })`,
      }}
      className="min-h-screen bg-cover bg-no-repeat bg-fixed bg-center bg-black/30 bg-blend-overlay flex justify-center items-center overflow-hidden">
      <div className=" w-full mx-2 sm:mx-5 md:mx-14 md:max-w-[700px] lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[1200px] lg:mx-10 bg-slate-600/70 rounded-xl backdrop-blur shadow-[10px_10px_10px_10px_rgba(0,0,0,0.4)] my-10 lg:my-12">
        {/* Title bar */}
        <div
          style={{ backgroundImage: `url(${bgimg})` }}
          className="bg-contain bg-center bg-blend-overlay flex  px-4 py-1 shadow-[0px_2px_3px_0px_rgba(249,115,22)] rounded-lg justify-center sm:justify-between items-center -mt-5 lg:-mt-8 bg-black bg-opacity-80 mx-5">
          <Logo />
          <h2 className="hidden sm:block text-2xl md:text-3xl text-gray-100  font-Black-Ops-One text-center">
            Login
          </h2>
        </div>
        {/*  */}
        <div
          className={
            "lg:flex mx-auto px-5 sm:px-10 lg:px-5 xl:px-10 lg:gap-5 lg:justify-between lg:items-center"
          }>
          {/* From Contents */}
          <div className="my-5 flex-1">
            <h2 className="  sm:hidden  text-2xl md:text-3xl  text-gray-100  font-Black-Ops-One text-center tracking-[2px]">
              Login
            </h2>
            {/* Demo Acount */}
            <div className="border rounded-lg p-2 text-center my-3">
              <h3 className="text-xl font-medium text-[#D1A054] mb-2">
                Demo Acounts
              </h3>
              <div className="flex justify-center gap-5 ">
                <button
                  onClick={() => {
                    reset();
                    setDemoEmail("sohag@gmail.com");
                    setDemoPassword("@User123");
                  }}
                  className="btn btn-ghost btn-sm text-base bg-[#D1A054] text-white">
                  User
                </button>
                <button
                  onClick={() => {
                    reset();
                    setDemoEmail("abulhashem@gmail.com");
                    setDemoPassword("@Deliveryman123");
                  }}
                  className="btn btn-ghost btn-sm text-base bg-[#D1A054] text-white">
                  Delivery Man
                </button>
                <button
                  onClick={() => {
                    reset();
                    setDemoEmail("ohidursohag@gmail.com");
                    setDemoPassword("@Admin123");
                  }}
                  className="btn btn-ghost btn-sm text-base bg-[#D1A054] text-white">
                  Admin
                </button>
              </div>
            </div>
            {/* Login Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full mb-2">
                <label className="text-white font-medium">
                  {" "}
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  defaultValue={demoEmail}
                  className="h-11 w-full mt-1 rounded-[5px]  bg-white px-4  outline-none"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500">email is required</p>
                )}
              </div>
              <div className="w-full mb-2 relative">
                <label className="text-white font-medium ">
                  {" "}
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type={`${showPass ? "text" : "password"}`}
                  {...register("password", { required: true, minLength: 6 })}
                  placeholder="Enter your password"
                  defaultValue={demoPassword}
                  className=" h-11 w-full mt-1 rounded-[5px] bg-white px-4  outline-none"
                />
                <div
                  onClick={() => setShowPass(!showPass)}
                  className="absolute top-[35px] right-2 cursor-pointer">
                  {!showPass ? (
                    <IoMdEye size={32} />
                  ) : (
                    <IoMdEyeOff size={32} color="red" />
                  )}
                </div>
                {errors.password?.type === "required" && (
                  <p className="text-red-500">password is required</p>
                )}
              </div>

              <div className="w-max border bg-white p-1 rounded">
                <LoadCanvasTemplate reloadColor="green" />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  {...register("captchaInput", { required: true })}
                  placeholder="Type the Captcha above"
                  className="h-11  w-full mt-1 rounded-[5px] bg-white px-4 outline-none"
                />
                {errors.captchaInput?.type === "required" && (
                  <p className="text-red-500">Captcha validation is required</p>
                )}
              </div>

              <button
                type="submit"
                className="btn w-full border-none rounded-md text-lg bg-[rgba(209,160,84,0.5)] mt-5 text-white hover:bg-[rgba(209,160,84,0.7)]">
                Sign In
              </button>
            </form>

            <div className="text-center">
              <p className="text-[#D1A054] mt-3">
                Already registered?{" "}
                <Link to="/register" className="font-bold hover:text-[#ffa620]">
                  Go to register
                </Link>
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 my-2">
              <hr className="border border-[#D1A054] flex-1" />
              <p className="text-lg text-[#D1A054] font-bold">Or</p>
              <hr className="border border-[#D1A054] flex-1" />
            </div>
            <button
              onClick={handleLoginWithGoogle}
              className="cursor-pointer group border-[#D1A054]   inline-flex  w-full items-center justify-center gap-2  rounded-lg border px-4 py-3 transition-colors duration-300  hover:bg-[#D1A054]  focus:outline-none">
              <FcGoogle size={26} />
              <span className="text-lg font-medium text-[#D1A054] group-hover:text-white">
                Google
              </span>
            </button>
          </div>
          {/* Animation */}
          <div className="mb-5 lg:mb-0 flex-1">
            <div className="hidden  lg:flex lg:flex-col justify-between">
              <Lottie animationData={animation} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
