import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input id="wd-username" value="Josh" placeholder="username" 
             className="form-control mb-2" />
      <input id="wd-password" value="666" placeholder="password"
             type="password" className="form-control mb-2" />
      <input id="wd-firstname" value="Josh" placeholder="First Name" 
             className="form-control mb-2" />
      <input id="wd-lastname" value="Walker" placeholder="Last Name" 
             className="form-control mb-2" />
      <input id="wd-dob" value="2020-09-15" type="date" 
             className="form-control mb-2" />
      <input id="wd-email" value="josh123@gmail.com" type="email" 
             className="form-control mb-2" />
      <input id="wd-role" value="User" placeholder="Role" 
             className="form-control mb-2"/>
      
      <Link to="/Kanbas/Account/Signin" className="btn btn-danger w-100">Sign Out</Link>
    </div>
  );
}
