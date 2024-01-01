import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useEffect } from "react";

const schema = Joi.object({
  name: Joi.string().required().valid("sunny"),
});

export const Form = () => {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    resolver: joiResolver(schema),
  });

  const onSubmit = (e: any) => console.log(e);

  useEffect(() => {
    setError("name", {
      types: {
        required: "This is required",
        minLength: "This is minLength",
      },
    });
    console.log("errors", errors);
  }, [setError, errors]);

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center border-b black py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          aria-label="Full name"
          {...register("name")}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};
