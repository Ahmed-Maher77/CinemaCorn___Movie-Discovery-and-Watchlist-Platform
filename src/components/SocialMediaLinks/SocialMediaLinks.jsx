import linkedinIcon from "../../assets/images/linkedin.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import githubIcon from "../../assets/images/github.svg";
import "./SocialMediaLinks.css";

const socialMediaLinks = [
    {
        name: "GitHub",
        url: "https://github.com/ahmed-maher-algohary",
        icon: githubIcon,
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/ahmed.maher.algohary",
        icon: facebookIcon,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmed-maher-algohary",
        icon: linkedinIcon,
    },
];

const SocialMediaLinks = () => {
    return (
        <ul className="socialMediaLinks">
            {socialMediaLinks.map((link) => (
                <li key={link.name}>
                    <a href={link.url} target="_blank" rel="noreferrer">
                        <img src={link.icon} alt={link.name} />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialMediaLinks;
