import React, { useState } from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    dateOfBirth: "",
    selfDescription: "",
    address: "SkillHunt User Address",
    education: "",
    certifications: "",
    skills: [
      { skill: "JavaScript", percentage: 80 },
      { skill: "Python", percentage: 70 },
      { skill: "React", percentage: 60 },
    ],
    otherAccounts: {
      github: "",
      linkedin: "",
      twitter: "",
    },
    posts: [],
    otherDetails: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const addPost = (newPost) => {
    setProfile({ ...profile, posts: [...profile.posts, newPost] });
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <header className="profile-header">
        <h1>Welcome, {profile.name || "Your Name"}</h1>
        <p>{profile.selfDescription || "Add a self-description here..."}</p>
      </header>

      {/* Edit Profile Form */}
      <section className="profile-edit">
        <h2>Edit Profile</h2>
        <form>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
          />

          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={profile.dateOfBirth}
            onChange={handleInputChange}
          />

          <label>Self Description:</label>
          <textarea
            name="selfDescription"
            value={profile.selfDescription}
            onChange={handleInputChange}
          />

          <label>Education:</label>
          <input
            type="text"
            name="education"
            value={profile.education}
            onChange={handleInputChange}
          />

          <label>Certifications:</label>
          <input
            type="text"
            name="certifications"
            value={profile.certifications}
            onChange={handleInputChange}
          />

          <label>Other Details:</label>
          <textarea
            name="otherDetails"
            value={profile.otherDetails}
            onChange={handleInputChange}
          />
        </form>
      </section>

      {/* Other Accounts */}
      <section className="profile-other-accounts">
        <h2>Social Links</h2>
        <form>
          <label>GitHub:</label>
          <input
            type="url"
            name="github"
            value={profile.otherAccounts.github}
            onChange={(e) =>
              setProfile({
                ...profile,
                otherAccounts: {
                  ...profile.otherAccounts,
                  github: e.target.value,
                },
              })
            }
          />

          <label>LinkedIn:</label>
          <input
            type="url"
            name="linkedin"
            value={profile.otherAccounts.linkedin}
            onChange={(e) =>
              setProfile({
                ...profile,
                otherAccounts: {
                  ...profile.otherAccounts,
                  linkedin: e.target.value,
                },
              })
            }
          />

          <label>Twitter:</label>
          <input
            type="url"
            name="twitter"
            value={profile.otherAccounts.twitter}
            onChange={(e) =>
              setProfile({
                ...profile,
                otherAccounts: {
                  ...profile.otherAccounts,
                  twitter: e.target.value,
                },
              })
            }
          />
        </form>
      </section>

      {/* Skills */}
      <section className="profile-skills">
        <h2>Skills</h2>
        <ul>
          {profile.skills.map((skill, index) => (
            <li key={index}>
              {skill.skill} - {skill.percentage}%
              <div className="skill-bar">
                <div
                  className="skill-bar-filled"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Posts */}
      <section className="profile-posts">
        <h2>Your Posts</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const post = e.target.post.value;
            if (post.trim()) {
              addPost(post);
              e.target.reset();
            }
          }}
        >
          <input type="text" name="post" placeholder="Write a post..." />
          <button type="submit">Post</button>
        </form>
        <ul>
          {profile.posts.map((post, index) => (
            <li key={index}>{post}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProfilePage;
