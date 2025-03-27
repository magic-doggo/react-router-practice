import Spinach from "./Spinach";
import Popeye from "./Popeye";
import { Link } from "react-router-dom";


const DefaultProfile = () => {
  return (
    <div>
      <p>Profile page</p>
      <div>Did you instead mean one of the following?</div>
      <Link to="/profile/popeye">Popeye</Link>
      <br />
      <Link to="/profile/spinach">Spinach</Link>
      <br />
      <Link to="/">Home page</Link>
    </div>

  )
  
};

export default DefaultProfile;