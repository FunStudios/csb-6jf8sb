/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 710.7922077922075,
        y: 457.9999999999998
      }),
      new Costume("discord pic", "./Stage/costumes/discord pic.svg", {
        x: 239,
        y: 154
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.websitesProjects = [
      "3D creator:",
      "https://funstudios.github.io/3D-creator/"
    ];
    this.vars.findUs = [
      "GitHub:",
      "https://github.com/FunStudios",
      "Discord:",
      "https://discord.gg/BZfKVTDSCg",
      "Scratch:",
      "https://scratch.mit.edu/users/funcat37/",
      "Roblox:",
      "https://web.roblox.com/users/1651526562/profile"
    ];

    this.watchers.websitesProjects = new Watcher({
      label: "Websites/projects:",
      style: "normal",
      visible: false,
      value: () => this.vars.websitesProjects,
      x: 246,
      y: -73,
      width: 472,
      height: 105
    });
    this.watchers.findUs = new Watcher({
      label: "Find us:",
      style: "normal",
      visible: false,
      value: () => this.vars.findUs,
      x: 410,
      y: 180,
      width: 322,
      height: 235
    });
  }
}
