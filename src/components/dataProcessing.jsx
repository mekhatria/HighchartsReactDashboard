import React from "react";
import data from "./data";
let fossilFuelData = [],
  hydroElectricData = [],
  renewableEnergyData = [],
  biomassData = [];

let dataProcessing = (yearFrom, yearTo) => {
  let msg;
  if (yearFrom <= yearTo) {
    let coal = 0,
      pliquids = 0,
      pcoke = 0,
      ngas = 0,
      ogas = 0,
      nuclear = 0,
      chydroelectric = 0,
      wind = 0,
      solar = 0,
      geothermal = 0,
      biomass = 0,
      wood = 0,
      otherbio = 0;
    for (let i = yearFrom; i - 1 < yearTo; i++) {
      coal += data.coal[i];
      pliquids += data.pliquids[i];
      pcoke += data.pcoke[i];
      ngas += data.ngas[i];
      ogas += data.ogas[i];
      nuclear += data.nuclear[i];
      chydroelectric += data.chydroelectric[i];
      wind += data.wind[i];
      solar += data.solar[i];
      geothermal += data.geothermal[i];
      biomass += data.biomass[i];
      wood += data.wood[i];
      otherbio += data.otherbio[i];
    }

    fossilFuelData = [
      { name: "coal", y: coal },
      { name: "Petroleum Liquids", y: pliquids },
      { name: "Petroleum Coke", y: pcoke },
      { name: "Natural gas", y: ngas },
      { name: "Other Gases", y: ogas }
    ];

    hydroElectricData = [
      { name: "Nuclear", y: nuclear },
      { name: "Conventional Hydroelectric", y: chydroelectric }
    ];

    biomassData = [
      { name: "Biomass", y: biomass },
      { name: "Wood", y: wood },
      { name: "Otherbio", y: otherbio }
    ];

    renewableEnergyData = [
      { name: "Wind", y: wind },
      { name: "Solar", y: solar },
      { name: "Geothermal", y: geothermal }
    ];
    msg = "Select the range";
  } else {
    msg = (
      <>
        Year <b>From</b> should be less or equal to year <b>To</b>
      </>
    ); //do nothing
  }
  return msg;
};

export default dataProcessing;
export { fossilFuelData, hydroElectricData, biomassData, renewableEnergyData };
