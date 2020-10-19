import React from "react";

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map((ninja) => {
    return (
      <div key={ninja.id}>
        <div>Name : {ninja.name}</div>
        <div>Age : {ninja.age}</div>
        <div>{ninja.expr}</div>
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          Delete ninjas
        </button>
      </div>
    );
  });
  return <div>{ninjaList}</div>;
};
export default Ninjas;
