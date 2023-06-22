import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const HomeCard = ({ user, users, setUsers }) => {
  const { _id, name, email, phone, photo } = user;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = users.filter(
                (deleteUser) => deleteUser._id !== _id
              );
              setUsers(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="block rounded-lg bg-white dark:bg-neutral-700 max-w-xs">
      <Link to={`/view-details/${_id}`}>
        <div className=" overflow-hidden">
          <img
            className="rounded-t-lg w-full h-56 transition duration-300 ease-in-out hover:scale-110"
            src={photo}
            alt="User Image"
            title={`View ${name}'s details`}
          />
        </div>
      </Link>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {name}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Email: {email}
        </p>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Phone: {phone}
        </p>
        <div className="flex justify-between">
          <Link to={`/update-user/${_id}`}>
            <button
              type="button"
              className="inline-block rounded bg-[#00C4FF] px-6 py-2 hover:text-white"
            >
              Edit
            </button>
          </Link>
          <button
            type="button"
            className="inline-block rounded bg-red-400 px-6 py-2 hover:text-white"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
