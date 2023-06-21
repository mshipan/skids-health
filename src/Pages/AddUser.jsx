import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const AddUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User has been added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        reset();
      });
  };
  return (
    <div className="w-1/2 mx-auto">
      <div className="flex justify-center my-10">
        <h1 className="font-sans text-2xl font-bold">Add a User</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name :</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="input border-[#30A2FF] w-full focus:outline-none"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-600">Name should not be empty</span>
          )}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email :</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input border-[#30A2FF] w-full focus:outline-none"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-600">
              {errors.email.type === "email" &&
                "Email should be in a valid format"}
              {errors.email.type === "required" && "Email should not be empty"}
            </span>
          )}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Phone Number :</span>
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            className="input border-[#30A2FF] w-full focus:outline-none"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-red-600">
              Phone Number should not be empty
            </span>
          )}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Photo URL :</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Your Photo URL"
            className="input border-[#30A2FF] w-full focus:outline-none"
            {...register("photo", { required: true })}
          />
          {errors.photo && (
            <span className="text-red-600">Photo should not be empty</span>
          )}
        </div>

        <div className="flex justify-center">
          <input
            type="submit"
            className="bg-[#00C4FF] px-10 py-2 cursor-pointer my-5 hover:text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default AddUser;
