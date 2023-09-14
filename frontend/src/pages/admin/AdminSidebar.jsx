import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs"
import { BsFillTagFill } from "react-icons/bs"
import { BsFilePost } from "react-icons/bs"
import { BsChatLeftText } from "react-icons/bs"

const AdminSidebar = () => {
    return ( 
        <div className="admin-sidebar">
            <Link to="/admin-dashboard" className="admin-sidebar-title">
                <i className="bi bi-columns"></i>
                Dashboard
            </Link>
            <ul className="admin-dashboard-list">
                <Link 
                 className="admin-sidebar-link" 
                 to="/admin-dashboard/users-table">
                    {/* <i className="bi bi-person"></i> */}
                    <BsFillPersonFill className="icons"/>
                    Users
                </Link>
                <Link className="admin-sidebar-link" to="/admin-dashboard/posts-table">
                    {/* <i className="bi bi-file-post"></i> */}
                    <BsFilePost className="icons"/>
                    Posts
                </Link>
                <Link className="admin-sidebar-link" to="/admin-dashboard/categories-table">
                    {/* <i className="bi bi-tag-fill"></i> */}
                    <BsFillTagFill className="icons"/>
                    Categories
                </Link>
                <Link className="admin-sidebar-link" to="/admin-dashboard/comments-table">
                    {/* <i className="bi bi-chat-left-text"></i> */}
                    <BsChatLeftText className="icons"/>
                    Comments
                </Link>
            </ul>
        </div>
     );
}
 
export default AdminSidebar;