"use client";
import { useKeyboardShortcut } from "../hooks/useKeyboardShortcut";
import { useScrollwheel } from "../hooks/useScrollwheel";
import { SetStateAction, useState } from "react";

const Keypress = () => {
  const [activeKey, setActiveKey] = useState("");


  useKeyboardShortcut({ key: "1", onKeyPressed: onKeyPress });
  useKeyboardShortcut({ key: "2", onKeyPressed: onKeyPress });
  useKeyboardShortcut({ key: "3", onKeyPressed: onKeyPress });
  useKeyboardShortcut({ key: "4", onKeyPressed: onKeyPress });
  useKeyboardShortcut({ key: "m", onKeyPressed: onKeyPress });
  useKeyboardShortcut({ key: "Enter", onKeyPressed: onKeyPress });
  useScrollwheel({ onScrollUp: onScrollUp, onScrollDown: onScrollDown });

  function onScrollUp() {
    setActiveKey("up");
    setTimeout(() => {
      setActiveKey("");
    }, 600);
  }

  function onScrollDown() {
    setActiveKey("down");
    setTimeout(() => {
      setActiveKey("");
    }, 600);
  }

  function onKeyPress(key: string) {
    setActiveKey(key);
    setTimeout(() => {
      setActiveKey("");
    }, 600);
  }

  return <div>{activeKey}</div>;
};

export default Keypress;
