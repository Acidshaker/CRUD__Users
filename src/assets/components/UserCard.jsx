import React from "react";

const UserCard = ({ user, deleteUser, setUserUpdate, handleChangeModal }) => {
  const handleClickUpdate = () => {
    setUserUpdate(user);
    handleChangeModal();
  };

  return (
    <article className="user__card">
      <h2 className="user__title">{`${user.first_name}  ${user.last_name}`}</h2>

      <ul className="user__list">
        <li>
          <span>Email: </span>
          {user.email}
        </li>
        <li>
          <span>Birthday: </span>
          <i class="bx bx-gift gift__icon">{` ${user.birthday}`}</i>
        </li>
      </ul>

      <div className="user__btn--container">
        <i
          onClick={() => {
            deleteUser(user.id);
          }}
          className="bx bx-trash delete__btn"
        ></i>
        <i onClick={handleClickUpdate} className="bx bx-pencil edit__btn"></i>
      </div>
    </article>
  );
};

export default UserCard;
