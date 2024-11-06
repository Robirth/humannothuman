"use client";
import { Builder, withChildren } from "@builder.io/react";
import Charts from "./components/Charts/Charts";
import Counter from "./components/Counter/Counter";
import Menu from "./components/Menu/Menu";
import NewMenu from "./components/NewMenu/NewMenu";
import Next from "./components/Next/Next";
import Slider from "./components/Slider/Slider";
import VideoCard from "./components/VideoCard/VideoCard";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
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

Builder.registerComponent(withChildren(VideoCard), {
  name: "VideoCard",
});

Builder.registerComponent(VideoCard, {
  name: "VideoCard",
  inputs: [
    {
      name: "description",
      type: "string",
      required: true,
    },
    {
      name: "duration",
      type: "string",
      required: true,
    },
    {
      name: "id",
      type: "string",
      required: true,
    },
    {
      name: "thumbnail",
      type: "string",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});
