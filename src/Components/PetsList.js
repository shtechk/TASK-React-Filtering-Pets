import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";
import SearchBar from "./SearchBar";
import TypeBar from "./TypeBar";

function PetsList() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const [type, setType] = useState("");

  const petType = (event) => {
    setType(event.target.value);
  };

  // the old way we used to write the 2 statements that come next in this code, which are the "if" statement, and then the "map" statement, the old way was:

  //   const filteredPets = pets.filter((pet) => {
  //     if (pet.name.toLowerCase().includes(searchQuery.toLowerCase())) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });

  // followed by:

  // const petList = filteredPets.map((pet) => <PetItem pet={pet} key={pet.id} />);

  // Instead, now we will start adopting this writing practice for the "if" statements combined with "map" , as below:

  const filteredPetsByLetter = pets
    .filter((pet) => pet.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((pet) => pet.type.includes(type))
    .map((pet) => <PetItem pet={pet} key={pet.id} />);

  // const filteredPetsByType = pets

  //   .map((pet) => <PetItem pet={pet} key={pet.id} />);

  // Extra note: the reason we didn't write the "if" like below:

  // const filteredPets = pets.filter((pet) => {
  //   if (pet.name == searchQuery) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  // is because it would've only returned the pets whose names EXACTLY match the user input's spelling (including the spelling case)

  // In order for the search results to be more flexible, we needed to write the function to the one above.
  // the idea is that the search bar's default is case sensitive. I need to write the code for it to be case insensitive.
  // Meaning, I need to tell VS to change all of the pet's names to lower case first,, then also change all of the user's input to the search bar to lower case second,,, THEN search for matches between existing data && user's input (all lower cased)

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <SearchBar handleChange={handleChange} />

              <TypeBar petType={petType} />
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{filteredPetsByLetter}</div>
        {/* <div>{filteredPetsByType}</div> */}
      </div>
    </section>
  );
}

export default PetsList;
