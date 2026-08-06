import { useEffect, useState } from "react";
import apiRequest from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function CaptainProfile() {
  const [captain, setCaptain] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("captainToken");

        console.log(token);

        const data = await apiRequest("/captains/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        

        setCaptain(data.captain);
      } catch (errorData) {
        setError(errorData.message || "Unable to load profile");
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!captain) {
    return <p>Loading profile...</p>;
  }

  const handleLogout = async () => {
  try {
    const token = localStorage.getItem("token");

    await apiRequest("/captains/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    localStorage.removeItem("captainToken");
    localStorage.removeItem("captain");
    navigate("/login");
  }
};

  return (
    <main>
      <h1>Captain Profile</h1>
      <p>Name: {captain.name}</p>
      <p>Email: {captain.email}</p>
      <p>Phone: {captain.phone}</p>


      <button type="button" onClick={handleLogout} className="px-3 py-2 ml-2 border border-red-200 text-white bg-red-500">Logout</button>
    </main>
  );
}