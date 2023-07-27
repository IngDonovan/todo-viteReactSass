import React from 'react';

function TodoHeader({children, loading}) {
  //clona el elemento a partir de otro, con las propiedades que queramos en el segundo argumento
  // React.cloneElement(children, {loading});
  //para manejar a varios elementos, sin importar y nos queda como un array
  // React.Children.toArray(children).map(child => React.cloneElement(children, {loading}))
  return (
    <header>
      {
        React.Children
          .toArray(children)
          .map((child) => React.cloneElement(child, { loading })
      )}
    </header>
  );
}

export { TodoHeader };