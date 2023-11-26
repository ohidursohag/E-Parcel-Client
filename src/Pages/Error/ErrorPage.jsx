import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import Lottie from 'lottie-react'
import errorAnim from '../../assets/lottie/error.json'
const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <section className='bg-white '>
      <div className='container flex items-center justify-center min-h-screen mx-auto'>
        <div className='flex flex-col items-center  mx-auto text-center'>
          <div className='max-w-sm'>
            <Lottie animationData={errorAnim} />
          </div>
          <h1 className='mt-3 text-2xl font-semibold text-gray-800  md:text-3xl'>
            Something Went Wrong!
          </h1>
          

          <div className='flex items-center w-full mt-6 gap-x-3  '>
            <button onClick={() => navigate(-1)} className='w-full  flex items-center justify-center gap-2 border transition-colors duration-200 border-orange-500 rounded-lg py-3 text-orange-500'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-5 h-5 rtl:rotate-180 text-orange-500'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                  />
                </svg>
              </span>
              Go Back</button>

            <Button label={'Take Me Home'} onClick={() => navigate('/')} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
