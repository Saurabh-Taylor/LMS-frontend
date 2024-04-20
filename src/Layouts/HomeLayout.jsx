import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";

const HomeLayout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // for checking if user is logged in or not
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  // for displaying the options acc to role
  const role = useSelector((state) => state?.auth?.role);

  const handleLogout = (e)=>{
    e.preventDefault()
    // const res = await dispatch(logout)
    navigate("/")
  }

  const changeWidth = () => {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  };

  const hideDrawer = () => {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    // collapsing the drawer-side width to zero
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = 0;
  };

  return (
    <div className="min-h-[90vh]">
      {/* adding the daisy ui drawer */}
      <div className="drawer absolute z-50 left-0 w-fit">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="font-bold text-white m-4"
            />
          </label>
        </div>

        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-100 text-base-content relative">
            {/* close button for drawer */}
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>

            <li>
              <Link to={"/"}>Home</Link>
            </li>
            {isLoggedIn && role === "ADMIN" && (
              <li>
                <Link to={"/admin/dashboard"}>Admin DashBoard</Link>
              </li>
            )}
            <li>
              <Link to={"/courses"}>All Courses</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            {!isLoggedIn && (
              <li className="absolute bottom-4 w-[90%]" >
                <div className="w-full flex items-center justify-between ">
                  <button className=" btn-primary btn rounded-md w-[45%] font-semibold">
                    <Link to={"/login"}>Login</Link>
                  </button>
                  <button className=" btn-secondary btn  font-semibold rounded-md w-[45%]">
                    <Link to={"/signup"}>Signup</Link>
                  </button>
                </div>
              </li>
            )}
            {isLoggedIn && (
              <li className="absolute bottom-4 w-[90%]" >
                <div className="w-full flex items-center justify-between ">
                  <button className=" btn-primary btn rounded-md w-[45%] font-semibold">
                    <Link to={"/user"}>Profile</Link>
                  </button>
                  <button className=" btn-secondary btn  font-semibold rounded-md w-[45%]">
                    <Link onClick={handleLogout} >Logout</Link>
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
