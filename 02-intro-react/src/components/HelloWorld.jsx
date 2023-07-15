import React from "react";
import PropTypes from 'prop-types';
import { Title } from "./Title";

export const HelloWorld = ({name = 'juanito', id, title, user, book }) => {   // el name puesto aca 'juanito' no aplica para los propTypes
  const nameTwo = "Pepe";
  return <div>
        <Title name={name} id={id} title={title}/>
        <p>{user.name} - {user.age}</p>
        <p>{JSON.stringify(user)}</p>
        <p>{book}</p>
    </div>;
};

/* Permite validar props */
HelloWorld.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
}

HelloWorld.defaultProps = { // permite poner valor por defecto y asi sirve para validar los propTypes
  title: 'Hola mundo por defecto',
  book: 'Libro de deudas'
}