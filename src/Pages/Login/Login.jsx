import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
return(
    <div style={{ backgroundImage: `url(${''})` }} className="min-h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center">
        <div className='w-[80%] mx-auto min-h-[600px] shadow-[10px_10px_10px_10px_rgba(0,0,0,0.25)] my-20'>
            <div className={'flex w-[90%] mx-auto gap-5 justify-between items-center'}>

                <div className='w-2/5 my-10'>
                    <h2 className='text-2xl font-bold text-center mb-5'>Register</h2>
                    <form >
                        <div className='w-full'>
                            <label htmlFor="name" className="text-xl font-medium "> Name</label>
                            <input type="text" name="name" required id="name" placeholder="Name here" className=" h-14 w-full mt-2 mb-5 rounded-[8px]  bg-white px-4  outline-none" />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="photoUrl" className="text-xl font-medium "> Photo Url</label>
                            <input type="url" name="photoUrl" required id="photoUrl" placeholder="Photo Url here" className=" h-14 w-full mt-2 mb-5 rounded-[8px]  bg-white px-4  outline-none" />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="email" className="text-xl font-medium "> Email</label>
                            <input type="email" name="email" required id="email" placeholder="Email" className=" h-14 w-full mt-2 mb-5 rounded-[8px]  bg-white px-4  outline-none" />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="password" className="text-xl  font-medium "> Password</label>
                            <input type="password" name="password" required id="password" placeholder="Enter your password" className=" h-14 w-full mt-2 mb-5 rounded-[8px]  bg-white px-4  outline-none" />
                        </div>

                        <div className='w-full'>
                            <LoadCanvasTemplate />
                        </div>
                        <div className='w-full'>
                            <input type="text" name="captchaInput" required id="captchaInput" placeholder='Type the Captcha above' className=" h-14  w-full mt-1 rounded-[8px] bg-white px-4 outline-none" />
                        </div>

                        <button type='submit' className='btn w-full  btn-ghost normal-case bg-[rgba(209,160,84,0.5)] mt-5 text-white hover:bg-[rgba(209,160,84,0.7)]'>
                            Register
                        </button>
                    </form>

                    <div className='text-center'>
                        <p className='text-[#D1A054] my-5'>Already registered? <Link to='/login' className='font-bold hover:text-[#ffa620]'>Go to log in</Link></p>
                        <p className='font-medium mb-5'>Or Sign up With</p>
                    </div>

                    <div className='flex items-center justify-center gap-5'>
                        
                        <div className='cursor-pointer'>
                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26" cy="26" r="25" fill="#F1F2F4" stroke="#444444" strokeWidth="2" />
                                <g clipPath="url(#clip0_3_100)">
                                    <path d="M14 26C14 19.3832 19.3832 14 26 14C28.6723 14 31.2017 14.8598 33.3147 16.4864L30.5262 20.1088C29.2197 19.1031 27.6545 18.5714 26 18.5714C21.9039 18.5714 18.5714 21.9039 18.5714 26C18.5714 30.0961 21.9039 33.4286 26 33.4286C29.2991 33.4286 32.1026 31.2671 33.0688 28.2857H26V23.7143H38V26C38 32.6168 32.6168 38 26 38C19.3832 38 14 32.6168 14 26Z" fill="#444444" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_100">
                                        <rect width="24" height="24" fill="white" transform="translate(14 14)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        
                    </div>
                </div>
                <div className=''>
                    <img src={''} alt="" />
                </div>
            </div>
        </div>
    </div>
)}
export default Login;