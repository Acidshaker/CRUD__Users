import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import FormUsers from "./assets/components/FormUsers";
import UserCard from "./assets/components/UserCard";

const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  const [users, setUsers] = useState();
  const [userUpdate, setUserUpdate] = useState();
  const [isShowForm, setIsShowForm] = useState(true);

  // Funcion para obtener datos del backend
  const getAllusers = () => {
    const URL = `${BASE_URL}users/`;
    axios
      .get(URL)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };

  // Funcion para enviar datos al backend
  const createUser = (data) => {
    const URL = `${BASE_URL}users/`;
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res);
        getAllusers();
        handleChangeModal();
      })
      .catch((err) => console.log(err));
  };

  // Funcion para eliminar datos del backend

  const deleteUser = (id) => {
    const URL = `${BASE_URL}users/${id}/`;
    axios
      .delete(URL)
      .then((res) => {
        console.log(res);
        getAllusers();
      })
      .catch((err) => console.log(err));
  };

  // Funcion para editar datos en el backend
  const updateUser = (id, data) => {
    const URL = `${BASE_URL}users/${id}/`;
    axios
      .patch(URL, data)
      .then((res) => {
        console.log(res);
        getAllusers();
        setUserUpdate();
        handleChangeModal();
      })
      .catch((err) => console.log(err));
  };

  // Funcion para mostrar el modal

  const handleChangeModal = () => {
    setIsShowForm(!isShowForm);
  };

  useEffect(() => {
    getAllusers();
  }, []);

  return (
    <div className="App">
      <div className="modal__form--container">
        <FormUsers
          createUser={createUser}
          userUpdate={userUpdate}
          updateUser={updateUser}
          isShowForm={isShowForm}
          handleChangeModal={handleChangeModal}
        />
      </div>

      <div className="title__container">
        <h2 className="users__title">Users</h2>
        <button onClick={handleChangeModal} className="btn__create-user">
          + Create new user
        </button>
      </div>
      <div className="users__card--container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUserUpdate={setUserUpdate}
            handleChangeModal={handleChangeModal}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
