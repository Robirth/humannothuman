"use client";
import { Builder } from "@builder.io/react";
import BotPage from "./components/Bots/BotPage";
import Charts from "./components/Charts/Charts";
import Counter from "./components/Counter/Counter";
import Menu from "./components/Menu/Menu";
import NewMenu from "./components/NewMenu/NewMenu";
import Next from "./components/Next/Next";
import Slider from "./components/Slider/Slider";


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

Builder.registerComponent(Menu, {
  name: "Menu",
});

Builder.registerComponent(NewMenu, {
  name: "NewMenu",
});

Builder.registerComponent(Next, {
  name: "Next",
});

Builder.registerComponent(Charts, {
  name: "Charts",
});

Builder.registerComponent(Slider, {
  name: "Slider",
});
