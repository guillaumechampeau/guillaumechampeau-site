import { defineStore } from "pinia";
import { THomeStore } from "@/interfaces/Home";

export const HomeStore = defineStore({
  id: "HomeStore",
  state: (): THomeStore => ({
    characteristics: [
      "Piano enthusiast",
      "Plant lover",
      "Analog-film waster",
      "Retro patterns spotter",
      "avid traveler",
      "Music nomad",
    ],
  }),
});
