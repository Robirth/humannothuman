"use client";
import { Builder } from "@builder.io/react";
import BotPage from "./components/Bots/BotPage";
import Counter from "./components/Counter/Counter";
import Menu from "./components/Menu/Menu";
import NewMenu from "./components/NewMenu/NewMenu";


import Slide from "./components/Slide/Slide";
import ThreeScene from "./components/ThreeScene/ThreeScene";
import index from "./components/Next/Index";
import Next from "./components/Next/Index";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(BotPage, {
  name: "BotPage",
});

Builder.registerComponent(ThreeScene, {
  name: "ThreeScene",
});

Builder.registerComponent(Slide, {
  name: "Slide",
});

Builder.registerComponent(Menu, {
  name: "Menu",
});

Builder.registerComponent(NewMenu, {
  name: "NewMenu",
});
Builder.registerComponent(Next, {
  name: "Index",
});

