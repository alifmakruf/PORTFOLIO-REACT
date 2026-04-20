function Profile() {
  const teamMembers = [
    {
      name: "MOHAMMAD FIRMAN ALIF MA'RUF",
      avatar: "M",
      bio: "Mahasiswa Teknik Komputer dengan minat di IoT dan Web Development.",
      skills: ["React(Learning)", "HTML5 & CSS3(Intermediate)", "IoT Programming", "Arduino"],
      experience: [
        "Pengembangan landing page tim",
        "Projek IoT menggunakan ESP32",
        "Laravel Project(smarthome, smartcafe)",
        "Integrasi sensor dan hardware",
      ],
    },
    {
      name: "MEILANDRI FREZZY ADITYA",
      avatar: "M",
      bio: "Fokus pada IoT dan Troubleshooting jaringan serta PC",
      skills: ["IoT Development", "Web Development", "Troubleshooting"],
      experience: [
        "Best Project IMCE IoT 2025",
        "EPIM TI Juara 3",
        "Desain Skematik dan PCB",
      ],
    },
    {
      name: "NOUVELANNITA AKSAM MAULIANADEA",
      avatar: "N",
      bio: "Web designer dengan keahlian dalam desain interface dan user experience.",
      skills: ["Web Design", "Canva", "Microsoft Office"],
      experience: [
        "Desain interface untuk web dan mobile",
        "Projek Pet Feeder Otomatis",
        "Projek Drone Monitoring Kualitas Udara",
      ],
    },
  ];

  return (
    <div className="profile-section">
      {teamMembers.map((member, idx) => (
        <div key={idx} className="card">
          <div className="section-header">CV - {member.name}</div>
          <div className="profile-top">
            <div className="profile-avatar">{member.avatar}</div>
            <div>
              <h2>{member.name}</h2>
              <p>{member.bio}</p>
            </div>
          </div>
          <div className="skill-grid">
            <div>
              <h3>Skill</h3>
              <ul>
                {member.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Experience</h3>
              <ul>
                {member.experience.map((exp, i) => (
                  <li key={i}>{exp}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Profile;
