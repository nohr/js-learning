import { useEffect } from "react";
import { useState } from "react";

function Animal({ type, name, age, id }) {
  // remove bullet points from list

  return (
    <li
      style={{
        listStyle: "none",
      }}
    >
      {`${id + 1}  -  `}
      <strong>{type}</strong>
      {` ${name} (${age} years old)`}
    </li>
  );
}

function useAnimalSearch() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery");
    search(lastQuery);
  }, []);

  const search = async (q) => {
    try {
      const res = await fetch(
        "http://localhost:8080?" + new URLSearchParams({ q })
      );
      const data = await res.json();
      setAnimals(data);

      localStorage.setItem("lastQuery", q);
    } catch (err) {
      console.error(err);
    }
  };

  return { search, animals };
}

function App() {
  const { search, animals } = useAnimalSearch();

  return (
    <div>
      <main>
        <h1>Animal Farm</h1>
        <input
          type="text"
          placeholder="Search for an animal"
          onChange={(e) => search(e.target.value)}
        />
        <ul>
          {animals.map((animal) => (
            <Animal {...animal} key={animal.id} />
          ))}
          {animals.length === 0 ? (
            <li>
              <strong>No animals found</strong>
            </li>
          ) : null}
        </ul>
      </main>
    </div>
  );
}

export default App;
