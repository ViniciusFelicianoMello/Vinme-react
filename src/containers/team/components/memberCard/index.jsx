/* eslint-disable react/prop-types */
import './memberCard.sass'

const MemberCard = ({ member }) => {
    return (
        <>
            <div className="member_profile">
                <img src={member.image} alt={`${member.name}'s image`} />
                <span>{member.name}</span>
                <p>{member.title}</p>
            </div>
            <div className="member_skills">
                <span></span>
                <span></span>
                <ul>
                    {member.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                    ))}
                </ul>
                <ul>
                    {member.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="member_links">
                <a href={member.portfolio} target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-image-portrait"></i>
                    <span>Portfólio</span>
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                    <span>LinkedIn</span>
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                    <span>Instagram</span>
                </a>
            </div>
        </>
    );
  }
  
  export default MemberCard;