import React from "react";

//This allows the following defined state to be used from all child componets
const SearchContext = React.createContext({
  location: "Minneapolis, MN",
  animal: "",
  breed: "",
  breeds: [],
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
