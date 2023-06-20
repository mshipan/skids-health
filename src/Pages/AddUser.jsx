import { useForm } from "react-hook-form";
const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div>
        <h1>Add a User</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name :</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-600">Name should not be empty</span>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email :</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-600">Email should not be empty</span>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone Number :</span>
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            className="input input-bordered w-full max-w-xs"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-red-600">
              Phone Number should not be empty
            </span>
          )}
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddUser;
