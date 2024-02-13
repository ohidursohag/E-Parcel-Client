/* eslint-disable no-useless-escape */

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "../../assets/lottie/parcelDeliver.json";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { uploadImage } from "../../Api/imageUpload";
import toast from "react-hot-toast";
import { getAccessToken, saveUserData } from "../../Api/Auth";
import { randomphoneNumber } from "../../Components/Shared/Utilities/randomphoneNumber";
import loginPageBg from "../../assets/image/loginPageBg.jpg";
import Logo from "../../Components/Shared/Logo";
import bgimg from "../../assets/image/bg-footer.jpg";
const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser, updateUserProfile, signInWithGoogle, logOut } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const loc = useLocation();
  useEffect(() => {
    loadCaptchaEnginge(6, "white", "#D1A054");
  }, []);
  const onSubmit = async (data) => {
    console.log(data);
    const toastId = toast.loading("Registering...");
    const name = data?.name;
    const email = data?.email;
    const password = data?.password;
    const userRole = data?.userRole;
    const captchaInput = data?.captchaInput;
    const phone = data?.phone;
    console.log(phone);
    if (!validateCaptcha(captchaInput)) {
      toast.error("Invalid Captcha,Please try again", { id: toastId });
      return;
    }
    try {
      //1. User Registration
      const { user } = await createUser(email, password);
      //2. upload image
      const imageUploadResponse = await uploadImage(data?.image[0]);
      const image = imageUploadResponse?.data?.url;
      console.log(imageUploadResponse, image);
      //3. Save username & profile photo
      await updateUserProfile({ name, image, phone });
      const accessToken = await getAccessToken(user?.email);

      if (accessToken?.success) {
        // save/update user info to database
        const data = await saveUserData(user, userRole, phone);
        console.log(data);
        toast.success("Registration Successful and Logged In", { id: toastId });
        navigate(loc?.state ? loc.state : "/", { replace: true });
      } else {
        logOut();
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
      // navigate('/login');
    }
  };

  const handleRegisterWithGoogle = async () => {
    const toastId = toast.loading("Registering ...");

    try {
      const { user } = await signInWithGoogle();
      // get AccessToken
      const accessToken = await getAccessToken(user?.email);
      if (accessToken?.success) {
        const data = await saveUserData(user, "user", randomphoneNumber());
        console.log(data);
        toast.success("Successfully Registered", { id: toastId });
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
        backgroundImage: `url(${loginPageBg})`,
      }}
      className="min-h-screen bg-cover bg-no-repeat bg-fixed bg-center bg-black/30 bg-blend-overlay flex justify-center items-center overflow-hidden">
      <div className=" w-full mx-2 sm:mx-5 md:mx-14 md:max-w-[700px] lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[1200px] lg:mx-10 bg-slate-600/70 rounded-xl backdrop-blur shadow-[10px_10px_10px_10px_rgba(0,0,0,0.4)] my-10 lg:my-12">
        <div
          style={{ backgroundImage: `url(${bgimg})` }}
          className="bg-contain bg-center bg-blend-overlay flex  px-4 py-1 shadow-[0px_2px_3px_0px_rgba(249,115,22)] rounded-lg justify-center sm:justify-between items-center -mt-5 lg:-mt-8 bg-black bg-opacity-80 mx-5">
          <Logo />
          <h2 className=" hidden sm:block text-2xl md:text-3xl text-gray-100  font-Black-Ops-One text-center ">
            Register
          </h2>
        </div>
        <div
          className={
            " lg:flex mx-auto px-5 sm:px-10 lg:px-5 xl:px-10 lg:gap-5 lg:justify-between lg:items-center"
          }>
          <div className=" my-5  ">
            <h2
              className="  sm:hidden  text-2xl md:text-3xl  text-gray-100  font-Black-Ops-One text-center tracking-[2px]">
              Register
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="">
              {/* Name & Phone-number */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-2">
                <div className="w-full mb-2">
                  <label className="text-white font-medium ">
                    {" "}
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Name here"
                    className="h-11 w-full mt-1 rounded-[5px] bg-white px-4  outline-none"
                  />
                  {errors.name?.type === "required" && (
                    <p className="text-red-500">Name is required</p>
                  )}
                </div>
                <div className="w-full mb-2">
                  <label className="text-white font-medium ">
                    {" "}
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="phone"
                    {...register("phone", { required: true })}
                    placeholder="Phone number here"
                    className=" h-11 w-full mt-1  rounded-[5px]  bg-white px-4  outline-none"
                  />
                  {errors.phone?.type === "required" && (
                    <p className="text-red-500">Phone number is required</p>
                  )}
                </div>
              </div>
              {/* Email  */}
              <div className="w-full mb-2">
                <label className="text-white font-medium ">
                  {" "}
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className=" h-11 w-full mt-1  rounded-[5px]  bg-white px-4  outline-none"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500">email is required</p>
                )}
              </div>
              {/* Password */}
              <div className="w-full mb-2 relative">
                <label className="text-white  font-medium ">
                  {" "}
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type={`${showPass ? "text" : "password"}`}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
                  })}
                  placeholder="Enter your password"
                  className=" h-11 w-full mt-1  rounded-[5px]  bg-white px-4  outline-none"
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
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    password must be more than 6 chracters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    password must have contain minimum 1 uppercase, 1 lowercase,
                    1 number and 1 spcial chracter
                  </p>
                )}
              </div>
              {/* User Role & image */}
              <div className="mb-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <label className="block mb-1 text-white  font-medium ">
                    Select Role <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register("userRole")}
                    className="rounded-[5px] py-[11px] pl-2 w-full outline-none">
                    <option value="user">User</option>
                    <option value="deliveryMan">Delivery Man</option>
                  </select>
                </div>
                <div className="mb-2">
                  <label className="block mb-1 text-white  font-medium ">
                    Select Image <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="file:mr-4 file:bg-[#D1A054] file:py-1 file:px-4  file:border-0 file:text-base file:font-semibold file: text-[#D1A054] file:rounded-[4px] file:text-white file:normal-case text-  file:btn"
                    type="file"
                    accept="image/*"
                    {...register("image", { required: true })}
                  />
                  {errors.image?.type === "required" && (
                    <p className="text-red-500">image is required</p>
                  )}
                </div>
              </div>

              <div className="w-max border bg-white p-1 rounded">
                <LoadCanvasTemplate reloadColor="green" />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  {...register("captchaInput", { required: true })}
                  placeholder="Type the Captcha above"
                  className=" h-11  w-full mt-1 rounded-[5px] bg-white px-4 outline-none"
                />
                {errors.captchaInput?.type === "required" && (
                  <p className="text-red-500">Captcha validation is required</p>
                )}
              </div>

              <button
                type="submit"
                className="btn w-full h-[55px] rounded-md border-none text-lg bg-[rgba(209,160,84,0.5)] mt-5 text-white hover:bg-[rgba(209,160,84,0.7)]">
                Register
              </button>
            </form>

            <div className="text-center">
              <p className="text-[#D1A054] mt-3">
                Already registered?{" "}
                <Link to="/login" className="font-bold hover:text-[#ffa620]">
                  Go to log in
                </Link>
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 my-2">
              <hr className="border border-[#D1A054] flex-1" />
              <p className="text-lg text-[#D1A054] font-bold">Or</p>
              <hr className="border border-[#D1A054] flex-1" />
            </div>
            <button
              onClick={handleRegisterWithGoogle}
              className="cursor-pointer group border-[#D1A054]   inline-flex  w-full items-center justify-center gap-2  rounded-lg border px-4 py-3 transition-colors duration-300  hover:bg-[#D1A054]  focus:outline-none">
              <FcGoogle size={26} />
              <span className="text-lg font-medium text-[#D1A054] group-hover:text-white">
                Google
              </span>
            </button>
          </div>
          <div className="hidden  lg:flex lg:flex-col justify-between">
            
              <Lottie animationData={animation} loop={true} />
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
