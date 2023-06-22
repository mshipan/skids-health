import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const user = useLoaderData();
  const { name, email, phone, photo } = user;
  return (
    <div>
      <div className="flex justify-center my-10">
        <h1 className="font-sans text-2xl font-bold">
          View {name}&apos;s details
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
        <div className="w-96">
          <img src={photo} alt="User Image" className="w-full h-96" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-3">Name: {name}</h1>
          <p className="text-lg mb-3">Email: {email}</p>
          <p>Phone: {phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
