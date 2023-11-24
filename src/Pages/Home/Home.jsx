import Logo from "../../Components/Shared/Logo";
import auth from "../../Config/Firebase.config";


const Home = () => {
    console.log(auth);
return(
    <div>
        <Logo/>
       <p> HELLO I Am Home </p>
   </div>
)}
export default Home;