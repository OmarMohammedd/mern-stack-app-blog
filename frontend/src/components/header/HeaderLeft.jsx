import { Link } from "react-router-dom"
import { BsPencil } from "react-icons/bs"
import { AiOutlineMenu } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"

const HeaderLeft = ({ toggle, setToggle }) => {
  return (
    <div className="header-left">
      <div className="header-logo">
         <Link to="/" style={{color: "#fff"}}><strong>BLOG</strong></Link>
         <BsPencil/>
      </div>
      <div onClick={() => setToggle((prev) => !prev)} className="header-menu">
        {toggle ? (
          <AiOutlineClose className="icon"/>
        ) : (
          <AiOutlineMenu className="icon"/>
        )}
      </div>
    </div>
  );
};

export default HeaderLeft;
