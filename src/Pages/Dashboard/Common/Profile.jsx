
import { Helmet } from 'react-helmet-async'
import useAuth from '../../../Hooks/useAuth'
import { Link } from 'react-router-dom'
import useGetCurrentUser from '../../../Hooks/useGetCurrentUser'

const Profile = () => {
  const { user } = useAuth()
  const { role} = useGetCurrentUser()
  // console.log(user)

  return (
    <div className='flex justify-center items-center h-screen'>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className='bg-white shadow-lg rounded-2xl w-3/5'>
        <img
          alt='profile'
          src='https://dynamic.brandcrowd.com/template/preview/design/27cf7d12-34a4-4ecd-bd87-c4c30d5c8ce7?v=4&designTemplateVersion=1&size=design-preview-standalone-1x'
          className='w-full mb-4 rounded-t-lg h-36 object-'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user?.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 px-4 text-xs text-white bg-orange-500 rounded-full uppercase'>
            {role === 'user' && 'User' || role === 'deliveryMan'&& 'Delivery Man' || 'Admin'}
          </p>
          
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                  {user?.displayName}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>{user?.email}</span>
              </p>

              <div>
                <Link to='/dashboard/update-profile' className='bg-orange-500 px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-orange-600 block'>
                  Update Profile
                </Link>
                {/* <button className='bg-orange-500 px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-orange-600' >
                  Change Password
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
