function SkillList() {
  const skills = [
    "JavaScript",
    "React",
    "HTML & CSS",
    "SQL",
    "Python",
    "Data Analytics"
  ];

  return (
    <div className="skills-section">
      <h2>My Skills</h2>

      <div className="skills-list">
        {skills.map((skill) => (
          <span className="skill" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillList;