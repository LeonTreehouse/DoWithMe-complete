import { CgProfile } from "react-icons/cg";
import { BiHome } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillChatFill } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import { BsCalendarWeek } from "react-icons/bs";

const FooterNavigation = () => {
  return (
    <div className="navFooterContainer">
      <div className="navFooterIcons">
        <a href="/home">
          <BiHome size={25} />
        </a>
        
        <a href="/calendar">
          <BsCalendarWeek size={25} />
        </a>
        
        <a href="/chat">
          <BsFillChatFill size={25} />
        </a>
        
        <a href="/friends">
          <AiOutlineHeart size={25} />
        </a>
        
        <a href="/profile">
          <CgProfile size={25} />
        </a>
        
        <a href="/">
          <FaSignOutAlt size={25} />
        </a>
      </div>
      <div className="navFooterText">
      <p className="home">Hem</p>
      <p className="meeting">Träffar</p>
      <p className="chatt">Chatt</p>
      <p className="friends">Vänner</p>
      <p className="profile">Profil</p>
      <p className="signout">Logga Ut</p>
      </div>
    </div>
  );
};

export default FooterNavigation;
