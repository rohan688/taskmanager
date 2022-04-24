import React, { useEffect, useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import NotesIcon from '@mui/icons-material/Notes';
export const Profile = ({ username, token }) => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setProfile(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding:"3px",textAlign:"left", lineHeight:"15px"}} className="user_details">
      <h3>Profile Details</h3>
      <p><b>Username:</b> {profile.username}</p>
      <p>{<PersonIcon/>} {profile.name}</p>
      <p>{<MailOutlineIcon/>} {profile.email}</p>
      <p>{<PhoneIphoneIcon/>} {profile.mobile}</p>
      <p>{<NotesIcon/>} {profile.description}</p>
   
    </div>
  );
};
