import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await fetch("http://localhost:5000/items");
    const data = await res.json();
    setItems(data);
  };

  const addItem = async () => {
    await fetch("http://localhost:5000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Docker App 🚀</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;