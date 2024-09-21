// Adds new Weapon types of firearms
Hooks.once("init", () => {
  CONFIG.DND5E.weaponIds.pepperbox = "Compendium.firearms.Firearms.Item.fiaJ4CtFtoymANcA";
  CONFIG.DND5E.weaponIds.ppistol= "Compendium.firearms.Firearms.Item.LF7CFJ8IRVpBpzeK";
  CONFIG.DND5E.weaponIds.musket= "Compendium.firearms.Firearms.Item.0u3S8wLLOT7837ur";
  CONFIG.DND5E.weaponIds.revolver= "Compendium.firearms.Firearms.Item.s4f58BFQtcuQm6im";
  CONFIG.DND5E.weaponIds.rrifle= "Compendium.firearms.Firearms.Item.O9lWoD9oIlf93thr";
  CONFIG.DND5E.weaponIds.blunderb= "Compendium.firearms.Firearms.Item.G6qSdyJCOkhLjT8e";
  CONFIG.DND5E.weaponIds.lrifle= "Compendium.firearms.Firearms.Item.peuUoenjWztgLcxN";
  CONFIG.DND5E.ammoIds.ball= "Compendium.firearms.Firearms.Item.rI6VCnhEyNaRSl4y";
  CONFIG.DND5E.ammoIds.cartridge= "Compendium.firearms.Firearms.Item.KJSg4bdqhSuUa9xg";
  CONFIG.DND5E.ammoIds.grape= "Compendium.firearms.Firearms.Item.FgLQObQAH8dFAFMW";
  CONFIG.DND5E.consumableTypes.ammo.subtypes.ball= "Bullet, Ball";
  CONFIG.DND5E.consumableTypes.ammo.subtypes.cartridge= "Bullet, Cartridge";
  CONFIG.DND5E.consumableTypes.ammo.subtypes.grape= "Grapeshot";
  // etc etc
});
