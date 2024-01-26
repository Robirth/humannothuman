"use client";
import { Builder } from "@builder.io/react";
import Slide from "./components/Slide/Slide";
import BotPage from "./components/Bots/BotPage";
import Counter from "./components/Counter/Counter";
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