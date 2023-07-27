import React from 'react';

function TodoHeader({children, loading}) {
  //clona el elemento a partir de otro, con las propiedades que queramos en el segundo argumento
  // React.cloneElement(children, {loading});
  return (
    <header>
      {React.cloneElement(children, {loading})}
    </header>
  );
}

export { TodoHeader };