import Container from "../Container";
import Logo from "../Logo";
import NavLinks from "./NavLinks";


const NavBar = () => {
return(
   <Container>
      <div className="flex justify-between">
         <Logo />
         <div className="flex items-center gap-10">
            <NavLinks />
         </div>
      </div>
   </Container>
)}
export default NavBar;