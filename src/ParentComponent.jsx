import { useState } from "react";

import Dropdown from "./DropDown.jsx";

const ParentComponent = () => {
  const [isButtonOpen, setIsOpen] = useState(false);
  const buttonToggle = () => setIsOpen((previousIsOpen) => !previousIsOpen);

  const triggerButton = (toggle) => {
    return (
      <button
        onClick={() => {
          buttonToggle();
          toggle();
        }}
      >
        {isButtonOpen ? "Close" : "Open"}
      </button>
    );
  };

  const childrenComponent = (toggle) => {
    return (
      <ul>
        <li>
          <button
            onClick={() => {
              //Do something
              buttonToggle();
              toggle();
            }}
          >
            Dashbord
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              //Do something
              buttonToggle();
              toggle();
            }}
          >
            Settings
          </button>
        </li>
      </ul>
    );
  };

  return <Dropdown trigger={triggerButton} children={childrenComponent} />;
};

export default ParentComponent;

// 1. 这个 trigger 可以触发打开/关闭 dropdown，也就是调用 toggle 方法
// 2. 这个 trigger 在需要拿到 Dropdown 里面的 isOpen 状态

// 3. 这个 dropdown 内容需要在点击任何内部 button 的时候都可以关闭 dropdown
