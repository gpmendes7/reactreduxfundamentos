import React from "react";

import Card from "./Card";

export default (props) => {
  return (
    <Card title="Média de Números" green>
      <div>
        <span>Resultado: </span>
        <strong>{10}</strong>
      </div>
    </Card>
  );
};
