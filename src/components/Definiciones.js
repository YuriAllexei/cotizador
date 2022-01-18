import React from "react";
import { Def } from "./Def";
import { dif } from "../data/difs";
export const Definiciones = () => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {dif.map(({ def }) => {
        return <Def cat={def[0]} def={def[1]} key={def[0]} />;
      })}
    </div>
  );
};
