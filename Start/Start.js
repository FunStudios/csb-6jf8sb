/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Start extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Start/costumes/costume1.svg", {
        x: 326.5000000000002,
        y: 299.02271727272716
      })
    ];

    this.sounds = [new Sound("pop", "./Start/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.TIMER_GREATER_THAN,
        { VALUE: 0 },
        this.whengreaterthan
      )
    ];
  }

  *whenthisspriteclicked() {
    this.stage.vars.findUs = [];
    this.stage.vars.websitesProjects = [];
    this.effects.ghost = 100;
    this.stage.vars.findUs.push("GitHub:");
    this.stage.vars.findUs.push("https://github.com/FunStudios");
    this.stage.vars.findUs.push("Discord:");
    this.stage.vars.findUs.push("https://discord.gg/BZfKVTDSCg");
    this.stage.vars.findUs.push("Scratch:");
    this.stage.vars.findUs.push("https://scratch.mit.edu/users/funcat37/");
    this.stage.vars.findUs.push("Roblox:");
    this.stage.vars.findUs.push(
      "https://web.roblox.com/users/1651526562/profile"
    );
    this.stage.vars.websitesProjects.push("3D creator:");
    this.stage.vars.websitesProjects.push(
      "https://funstudios.github.io/3D-creator/"
    );
    this.stage.watchers.findUs.visible = true;
    this.stage.watchers.websitesProjects.visible = true;
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.restartTimer();
      yield;
    }
  }

  *whengreaterthan() {
    this.stage.watchers.findUs.visible = false;
    this.stage.watchers.websitesProjects.visible = false;
  }
}
