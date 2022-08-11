import { IconChevronDown, IconChevronUp } from "@tabler/icons";
import React, { useState } from "react";
import UserCardDetail from "./UserCardDetail";

export default function UserCard(props) {
  const [onClick, setOnClick] = useState(false);

  const handleClick = () => setOnClick(!onClick);

  return (
    <div className="border-bottom" onClick={handleClick}>
      {/* main section */}
      <div className="d-flex align-items-center p-3">
        <img src={props.image} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name}</span>
        {onClick ? <IconChevronUp /> : <IconChevronDown />}
      </div>

      {/* UserCardDetail is hidden */}

      <div className={onClick ? "d-block" : "d-none"}>
        <UserCardDetail email={props.email} addr={props.addr} />
      </div>
    </div>
  );
}
