import { useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

export default function Home() {
  const [input, setInput] = useState(1);
  const [users, setUsers] = useState([]);

  const genUsers = async () => {
    if (input < 1) {
      alert("Invalid number of user");
      return;
    }
    const resp = await axios.get(`https://randomuser.me/api/?results=${input}`);

    const newUsers = [];
    for (const x of resp.data.results) {
      newUsers.push({
        name: x.name.first + " " + x.name.last,
        email: x.email,
        image: x.picture.large,
        addr: `${x.location.city} ${x.location.state} ${x.location.country} ${x.location.postcode}`,
      });
    }

    setUsers(newUsers);
    console.log(newUsers);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>
      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event) => {
            setInput(event.target.value);
          }}
          value={input}
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      {users.map((card) => (
        <UserCard
          image={card.image}
          name={card.name}
          email={card.email}
          addr={card.addr}
          key={card.name}
        />
      ))}

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Thun Anuntarat 620610589
      </p>
    </div>
  );
}
