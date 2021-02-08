const endpoint = "https://ac-vill.herokuapp.com/villagers?name=";

const fetchCharacterByName = (name) => {
  return fetch(`${endpoint}${name}`).then((res) => res.json());
};

export default fetchCharacterByName;
