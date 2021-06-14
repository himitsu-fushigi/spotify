import React from "react";
import reducer, { initialState } from "./reducer";

export const DataLayerContext = React.createContext();

export default function DataLayer({children}) {
  const [dataLayer, dispatch] = React.useReducer(reducer, initialState);

  return (
    <DataLayerContext.Provider value={[dataLayer, dispatch]}>
      {children}
    </DataLayerContext.Provider>
  );
}

export const useDataLayerValue = () => React.useContext(DataLayerContext);
