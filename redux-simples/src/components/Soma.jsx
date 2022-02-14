import React from "react";

import Card from "./Card";

export default (props) => {
  const { min, max } = props;

  return (
    <Card title="Soma de Números" blue>
      <div>
        <span>Resultado: </span>
        <strong>{max + min}</strong>
      </div>
    </Card>
  );
};
