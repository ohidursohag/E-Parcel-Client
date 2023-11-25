import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import animation from '../../assets/lottie/parcelDeliver.json'
import toast from "react-hot-toast";
import { getAccessToken, saveUserData } from "../../Api/Auth";
const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { signIn, signInWithGoogle, logOut } = useAuth();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const loc = useLocation();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const onSubmit = async (data) => {
        // console.log(data);
        const toastId = toast.loading('Loginingg...')
        const email = data.email;
        const password = data.password;
        const captchaInput = data.captchaInput;
        if (!validateCaptcha(captchaInput)) {
            toast.error('Invalid Captcha,Please try again', { id: toastId });
            return;
        }

        try {
            //1. User Login
            const { user } = await signIn(email, password);
            const accessToken = await getAccessToken(user?.email)
            if (accessToken?.success) {
                toast.success('Successfully Logged In', { id: toastId })
                navigate(loc?.state ? loc.state : '/', { replace: true })

            } else {
                logOut()
            }
        } catch (error) {
            toast.error(error.message, { id: toastId });
        }
    }
    const handleLoginWithGoogle = async () => {
        const toastId = toast.loading('logining ...')
        
        try {
            const { user } = await signInWithGoogle();
            const accessToken = await getAccessToken(user?.email)
            if (user?.email && accessToken?.success) {
                const data = await saveUserData(user, 'user')
                console.log(data);
                toast.success('Successfully Registered', { id: toastId })
                navigate(loc?.state ? loc.state : '/', { replace: true })

            } else {
                logOut()
            }
        } catch (error) {
            toast.error(error.message, { id: toastId });
        }
    }
    return (
        <div style={{ backgroundImage: `url(${'https://getpaidstock.com/tmp/[GetPaidStock.com]-656108bc03856.jpg'})` }} className="min-h-screen bg-cover bg-no-repeat bg-fixed bg-center flex justify-center items-center overflow-hidden">
            <div className='md:w-[80%] mx-auto min-h-[600px] bg-slate-600/70 rounded-xl backdrop-blur shadow-[10px_10px_10px_10px_rgba(0,0,0,0.25)] my-20'>
                <div className={'flex flex-col-reverse lg:flex-row w-[90%] mx-auto gap-5 justify-between items-center'}>

                    <div className='w-11/12 lg:w-3/5 xl:w-1/2  my-16'>
                        <h2 className='text-4xl font-bold text-center mb-5'>Log In</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>                           
                            <div className='w-full mb-5'>
                                <label className="text-xl font-medium "> Email <span className='text-red-500'>*</span></label>
                                <input type="email" {...register("email", { required: true })} placeholder="Email" className=" h-14 w-full mt-2  rounded-[8px]  bg-white px-4  outline-none" />
                                {errors.email?.type === 'required' && <p className='text-red-500'>email is required</p>}
                            </div>
                            <div className='w-full mb-5 relative'>
                                <label className="text-xl  font-medium "> Password <span className='text-red-500'>*</span></label>
                                <input type={`${showPass ? 'text' : 'password'}`} {...register("password", { required: true, minLength: 6 })} placeholder="Enter your password" className=" h-14 w-full mt-2  rounded-[8px]  bg-white px-4  outline-none" />
                                <div onClick={() => setShowPass(!showPass)} className='absolute top-[48px] right-5 cursor-pointer'>
                                    {
                                        !showPass
                                            ? <IoMdEye size={32} />
                                            : <IoMdEyeOff size={32} color='red' />
                                    }
                                </div>
                                {errors.password?.type === 'required' && <p className='text-red-500'>password is required</p>}

                            </div>

                            <div className='w-full'>
                                <LoadCanvasTemplate />
                            </div>
                            <div className='w-full'>
                                <input type="text" {...register("captchaInput", { required: true })} placeholder='Type the Captcha above' className=" h-14  w-full mt-1 rounded-[8px] bg-white px-4 outline-none" />
                                {errors.captchaInput?.type === 'required' && <p className='text-red-500'>Captcha validation is required</p>}
                            </div>

                            <button type='submit' className='btn w-full py-4 rounded-md text-lg bg-[rgba(209,160,84,0.5)] mt-5 text-white hover:bg-[rgba(209,160,84,0.7)]'>
                                Sign In
                            </button>
                        </form>

                        <div className='text-center'>
                            <p className='text-[#D1A054] mt-3'>Already registered? <Link to='/register' className='font-bold hover:text-[#ffa620]'>Go to register</Link></p>
                        </div>
                        <div className='flex justify-between items-center gap-2 my-2'>
                            <hr className='border border-[#D1A054] flex-1' />
                            <p className='text-lg text-[#D1A054] font-bold'>Or</p>
                            <hr className='border border-[#D1A054] flex-1' />
                        </div>
                        <button onClick={handleLoginWithGoogle} className="cursor-pointer group border-[#D1A054]   inline-flex  w-full items-center justify-center gap-2  rounded-lg border px-4 py-3 transition-colors duration-300  hover:bg-[#D1A054]  focus:outline-none">
                            <FcGoogle size={26} />
                            <span className="text-lg font-medium text-[#D1A054] group-hover:text-white">Google</span>
                        </button>
                    </div>
                    <div className='lg:w-1/2'>
                        <Lottie animationData={animation} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;