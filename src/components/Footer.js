import {BsInstagram, BsFacebook, BsLinkedin, BsGithub} from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer(props){
    return (
        <>
        <Link><BsInstagram /></Link> <Link><BsFacebook /></Link> <Link><BsLinkedin/></Link> <Link><BsGithub/></Link>
        <p style={{fontSize: "8px", color: "gray"}}>(These above images would eventually link to professional pages)</p>
        </>
    )
}

export default Footer;