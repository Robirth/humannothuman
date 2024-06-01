"use client";
import { Builder } from "@builder.io/react";
import BotPage from "./components/Bots/BotPage";
import Counter from "./components/Counter/Counter";
import Index from "./components/Next/Index";
import Menu from "./components/Menu/Menu";
import NewMenu from "./components/NewMenu/NewMenu";
import Slide from "./components/Slide/Slide";
import ThreeScene from "./components/ThreeScene/ThreeScene";

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

Builder.registerComponent(Index, {
  name: "Index",
});