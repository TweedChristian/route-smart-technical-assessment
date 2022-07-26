import { useState } from "react";
import { Character } from "../interfaces/character.interface";
import { formatDate } from "../utils/date.utils";

const filterCharacters = (value: string, characters: Character[]): Character[] => {
  return characters.filter((character) => {
    const characterString = Object.values(character).join(" ");
    return characterString.includes(value);
  });
};

const RickAndMortyTableRow: React.FC<{character: Character}> = ({character}) => {
  return (
    <>
      <td>
        {character.name}
      </td>
      <td>
        {character.gender}
      </td>
      <td>
        {character.species}
      </td>
      <td>
        {formatDate(character.created)}
      </td>
    </>
  );
};

export const FilterBar: React.FC<{value: string, onChange: (value: string) => any}> = ({value, onChange}) => {
  return (<input type="text" value={value} onChange={(e) => onChange(e.target.value)}></input>);
};

export const RickMortyTable: React.FC<{characters: Character[]}> = ({characters}) => {
  const [value, setValue] = useState<string>("");

  //useMemo
  const filteredCharacters = filterCharacters(value, characters);

  return (
    <>
      <FilterBar value={value} onChange={setValue}></FilterBar>
    <table>
    <thead>
    <tr>
      <th>
        Name
      </th>
      <th>
        Gender
      </th>
      <th>
        Species
      </th>
      <th>
        Created At
      </th>
    </tr>
    </thead>
    <tbody>
      {filteredCharacters.map((character) => <tr key={character.id}><RickAndMortyTableRow character={character}></RickAndMortyTableRow></tr>)}
    </tbody>
  </table>
    </>
  );
};
