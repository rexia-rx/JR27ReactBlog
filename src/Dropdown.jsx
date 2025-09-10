import { useState } from "react";

const Dropdown = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((previousIsOpen) => !previousIsOpen);
  return (
    <div>
      <div>{trigger(toggle)}</div>
      <div>{isOpen && children(toggle)}</div>
    </div>
  );
};

export default Dropdown;
