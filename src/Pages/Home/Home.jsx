import useAuth from "../../Hooks/useAuth";


const Home = () => {
    const { logOut } = useAuth()
    
    
return(
    <div>       
        <p> HELLO I Am Home </p>
        <button onClick={async()=>await logOut()} type="button" className="border px-1 py-2">log out</button>
   </div>
)}
export default Home;