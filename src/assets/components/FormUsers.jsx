import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const defaultValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  birthday: "",
};

const FormUsers = ({
  createUser,
  userUpdate,
  updateUser,
  isShowForm,
  handleChangeModal,
}) => {
  const { handleSubmit, register, reset } = useForm();

  console.log(userUpdate);

  const submitForm = (data) => {
    if (userUpdate) {
      updateUser(userUpdate.id, data);
    } else {
      createUser(data);
    }
    reset(defaultValues);
  };

  useEffect(() => {
    if (userUpdate) {
      reset(userUpdate);
    }
  }, [userUpdate]);

  return (
    <div className={`form__container ${isShowForm && "modal--active"}`}>
      <form className="form__content" onSubmit={handleSubmit(submitForm)}>
        <i onClick={handleChangeModal} className="bx bx-x form__esc"></i>
        <h2 className="form__title">
          {" "}
          {userUpdate ? "Edit User" : "Create User"}{" "}
        </h2>
        <div className="form__item">
          <label className="form__label" htmlFor="">
            Email
          </label>
          <input className="form__input" type="email" {...register("email")} />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="">
            Password
          </label>
          <input
            className="form__input"
            type="password"
            {...register("password")}
          />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="">
            First Name:
          </label>
          <input
            className="form__input"
            type="text"
            {...register("first_name")}
          />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="">
            Last Name
          </label>
          <input
            className="form__input"
            type="text"
            {...register("last_name")}
          />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="">
            Birthday
          </label>
          <input
            className="form__input"
            type="date"
            {...register("birthday")}
          />
        </div>
        <button className="form__submit">
          {userUpdate ? "Edit User" : "Create User"}
        </button>
      </form>
    </div>
  );
};

export default FormUsers;
