"use client";
import { Builder } from "@builder.io/react";
import ThreeScene from "./components/ThreeScene/ThreeScene";
import BotPage from "./components/Bots/BotPage";
import Counter from "./components/Counter/Counter";
import { Robot } from "./components/Robot";

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

Builder.registerComponent(Robot, {
  name: "Robot",
});

Builder.registerComponent(ThreeScene, {
  name: "ThreeScene",
});
