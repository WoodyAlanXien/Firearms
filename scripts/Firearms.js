// Adds new Weapon types of firearms
Hooks.once("init", () => {
  CONFIG.DND5E.weaponIds.pepperbox = "Compendium.firearms.Firearms.Item.nNEiOHEz56f6apkx";
  CONFIG.DND5E.weaponIds.ppistol= "Compendium.firearms.Firearms.Item.UlMNqYsoK0HP79jx";
  CONFIG.DND5E.weaponIds.musket= "Compendium.firearms.Firearms.Item.hombrYzWQUlyE4VF";
  CONFIG.DND5E.weaponIds.revolver= "Compendium.firearms.Firearms.Item.LzUPOOdWwjCD5FX8";
  CONFIG.DND5E.weaponIds.rrifle= "Compendium.firearms.Firearms.Item.igZtOR2uAi0jx2ri";
  CONFIG.DND5E.weaponIds.blunderb= "Compendium.firearms.Firearms.Item.8why0RMryg9yZiJ4";
  CONFIG.DND5E.weaponIds.lrifle= "Compendium.firearms.Firearms.Item.0JRdsYpq07GsEdU5";
  CONFIG.DND5E.ammoIds.ball= "Compendium.firearms.Firearms.Item.FJTN1Mi401lvd8MO";
  CONFIG.DND5E.ammoIds.cartridge= "Compendium.firearms.Firearms.Item.s14CfJfP39H7aMWW";
  CONFIG.DND5E.ammoIds.grape= "Compendium.firearms.Firearms.Item.yV33LSTQqzXJFL1T";
  CONFIG.DND5E.consumableTypes.ammo.subtypes.ball= "Bullet, Ball";
  CONFIG.DND5E.consumableTypes.ammo.subtypes.cartridge= "Bullet, Cartridge";
  CONFIG.DND5E.consumableTypes.ammo.subtypes.grape= "Grapeshot";
  // etc etc
});