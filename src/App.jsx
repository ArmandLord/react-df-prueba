const list = [
  {
    id: "1",
    nombre: "Juan Soto",
    correo: "juans@colaborador.com",
    edad: "23",
    cargo: "Desarrollador FrontEnd",
    telefono: "999999",
  },
  {
    id: "2",
    nombre: "Pedro Perez",
    correo: "pedro@gmail.com",
    edad: "25",
    cargo: "Desarrollador BackEnd",
    telefono: "99887766",
  },
  {
    id: "3",
    nombre: "Maria Gomez",
    correo: "mari@gmail.com",
    edad: "28",
    cargo: "Desarrollador FrontEnd",
    telefono: "88888888",
  },
  {
    id: "4",
    nombre: "ArmandoJ Gomez",
    correo: "mari@gmail.com",
    edad: "28",
    cargo: "Desarrollador FrontEnd",
    telefono: "88888888",
  },
];

import { useState } from "react";

const App = () => {
  const [data, setData] = useState(list);

  const search = (e) => {
    const filter = list.filter((ele) => {
      return ele.nombre // Juan ArmandoJ
        .slice(0, 1) // J    A
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
    });

    setData(filter);

    // console.log(filter);
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Busca por nombre" onChange={search} />
      </div>

      {data.map((ele) => (
        <div key={ele.id}>
          <p>prueba</p>
          <p>prueba2</p>
          <p>{ele.nombre}</p>
          <p>{ele.telefono}</p>
          <br />
        </div>
      ))}

      {data.length === 0 && <p>No tenemos elementos</p>}
    </div>
  );
};

export default App;
