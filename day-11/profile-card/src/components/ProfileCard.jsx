import Avatar from "./Avatar";
import ProfileInfo from "./ProfileInfo";
import SkillList from "./SkillList";

function ProfileCard() {
  return (
    <div className="profile-card">
      <Avatar />

      <ProfileInfo />

      <SkillList />

      <div className="contact-section">
        <h2>Contact Me</h2>

        <a href="kabir.a@appifest.com.au">
          Email Me
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;