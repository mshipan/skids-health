import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import HomeCard from "../Components/HomeCard";

const Home = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  return (
    <div>
      <div className="flex justify-center py-10">
        <h1 className="font-sans text-3xl font-bold">All Users</h1>
      </div>
      <div className="w-[75%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
        {users.map((user) => (
          <HomeCard
            key={user._id}
            user={user}
            users={users}
            setUsers={setUsers}
          ></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
