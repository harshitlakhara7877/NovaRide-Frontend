import { useEffect, useState } from "react";
import apiRequest from "../../services/api";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const data = await apiRequest("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        

        setUser(data.user);
      } catch (errorData) {
        setError(errorData.message || "Unable to load profile");
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>Loading profile...</p>;
  }

  const handleLogout = async () => {
  try {
    const token = localStorage.getItem("token");

    await apiRequest("/users/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }
};

  return (
    <main>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>


      <button type="button" onClick={handleLogout} className="px-3 py-2 ml-2 border border-red-200 text-white bg-red-500">Logout</button>
    </main>
  );
}

export default UserProfile;