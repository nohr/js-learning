import { useEffect, useState } from "react";

function Animal({ type, name, age, id }) {
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

function useAnimalSearch(value, delay = 500) {
  const [animals, setAnimals] = useState([]);
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  const search = async (q) => {
    const res = await fetch(
      "http://localhost:8080?" + new URLSearchParams({ q })
    );
    const data = await res.json();
    setAnimals(data);

    localStorage.setItem("lastQuery", q);
  };

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery");
    search(lastQuery);
  }, []);

  useEffect(() => {
    debouncedValue !== "" ? search(debouncedValue) : setAnimals([]);
  }, [debouncedValue]);

  return { animals };
}

function App() {
  const [query, setQuery] = useState("");
  const { animals } = useAnimalSearch(query);

  return (
    <div>
      <main>
        <h1>Animal Farm</h1>
        <input
          type="text"
          placeholder="Search for an animal"
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          {animals.map((animal) => (
            <Animal {...animal} key={animal.id} />
          ))}
          {animals.length === 0 ? (
            query.length > 0 ? (
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <strong>No animals found</strong>
              </li>
            ) : (
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <strong>Results will show here</strong>
              </li>
            )
          ) : null}
        </ul>
      </main>
    </div>
  );
}

export default App;
