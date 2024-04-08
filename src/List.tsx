import React from "react";

const List = ({items}: {items: any[]}) => {
  return(<ul>
    {items.map((item, i) => (
      <li key={`list-${i}`}>{item}</li>
    ))}
  </ul>)
}

export default List;