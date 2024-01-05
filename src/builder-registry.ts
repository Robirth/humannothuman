"use client";
import { Builder, withChildren } from "@builder.io/react";
import BotPage from "./components/Bots/BotPage";
import Counter from "./components/Counter/Counter";
import { Robot } from "./components/Robot";
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

Builder.registerComponent(Robot, {
  name: "Robot",
});

Builder.registerComponent(ThreeScene, {
  name: "ThreeScene",
});

Builder.registerComponent(withChildren(Slide), {
  name: "Slide",
});
