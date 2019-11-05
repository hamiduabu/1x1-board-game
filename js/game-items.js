import * as utils from './game-utilities.js';

export const avatars = [
  {
    name: 'Detective',
    id: 1,
    imgUrl: 'assets/img/avatar/detective.png',
    miniImgUrl: 'assets/img/avatar-mini/detective-mini.png'
  },
  {
    name: 'Dragon Queen',
    id: 2,
    imgUrl: 'assets/img/avatar/dragon-queen.png',
    miniImgUrl: 'assets/img/avatar-mini/dragon-queen-mini.png'
  },
  {
    name: 'Madame Driver',
    id: 3,
    imgUrl: 'assets/img/avatar/driver-f.png',
    miniImgUrl: 'assets/img/avatar-mini/driver-f-mini.png'
  },
  {
    name: 'Monsieur Driver',
    id: 4,
    imgUrl: 'assets/img/avatar/driver-m.png',
    miniImgUrl: 'assets/img/avatar-mini/driver-m-mini.png'
  },
  {
    name: 'Fierce',
    id: 5,
    imgUrl: 'assets/img/avatar/fierce.png',
    miniImgUrl: 'assets/img/avatar-mini/fierce-mini.png'
  },
  {
    name: 'Fire Fighter',
    id: 6,
    imgUrl: 'assets/img/avatar/fire-fighter.png',
    miniImgUrl: 'assets/img/avatar-mini/fire-fighter-mini.png'
  },
  {
    name: 'Golden Soldier',
    id: 7,
    imgUrl: 'assets/img/avatar/golden-soldier.png',
    miniImgUrl: 'assets/img/avatar-mini/golden-soldier-mini.png'
  },
  {
    name: 'Madame Guard',
    id: 8,
    imgUrl: 'assets/img/avatar/guard-f.png',
    miniImgUrl: 'assets/img/avatar-mini/guard-f-mini.png'
  },
  {
    name: 'Monsieur Guard',
    id: 9,
    imgUrl: 'assets/img/avatar/guard-m.png',
    miniImgUrl: 'assets/img/avatar-mini/guard-m-mini.png'
  },
  {
    name: 'King Walker',
    id: 10,
    imgUrl: 'assets/img/avatar/king-walker.png',
    miniImgUrl: 'assets/img/avatar-mini/king-walker-mini.png'
  },
  {
    name: 'Mean Face',
    id: 11,
    imgUrl: 'assets/img/avatar/mean-face.png',
    miniImgUrl: 'assets/img/avatar-mini/mean-face-mini.png'
  },
  {
    name: 'Queen',
    id: 12,
    imgUrl: 'assets/img/avatar/queen.png',
    miniImgUrl: 'assets/img/avatar-mini/queen-mini.png'
  },
  {
    name: 'Snow',
    id: 13,
    imgUrl: 'assets/img/avatar/snow.png',
    miniImgUrl: 'assets/img/avatar-mini/snow-mini.png'
  },
  {
    name: 'Squeak',
    id: 14,
    imgUrl: 'assets/img/avatar/squeak.png',
    miniImgUrl: 'assets/img/avatar-mini/squeak-mini.png'
  },
  {
    name: 'Starfish',
    id: 15,
    imgUrl: 'assets/img/avatar/starfish.png',
    miniImgUrl: 'assets/img/avatar-mini/starfish-mini.png'
  },
  {
    name: 'SWAT',
    id: 16,
    imgUrl: 'assets/img/avatar/swat.png',
    miniImgUrl: 'assets/img/avatar-mini/swat-mini.png'
  },
  {
    name: 'Wander Woman',
    id: 17,
    imgUrl: 'assets/img/avatar/wander-woman.png',
    miniImgUrl: 'assets/img/avatar-mini/wander-woman-mini.png'
  },
  {
    name: 'Body Builder',
    id: 18,
    imgUrl: 'assets/img/avatar/body-builder.png',
    miniImgUrl: 'assets/img/avatar-mini/body-builder-mini.png'
  }
];
const weaponItems = [
  {
    name: 'Steel Boots',
    id: 1,
    description:
      'From the War of Ages. Your attacks get a potential 16 point attack damage boost',
    weaponUrl: 'assets/img/items/weapons/steel-boots.png',
    miniImgUrl: 'assets/img/items/weapons-mini/steel-boots-mini.png',
    damage: 16,
    default: false
  },
  {
    name: 'Ice Strike',
    id: 2,
    description:
      'From the frost giants. Your your maximum attack points rise to 18',
    weaponUrl: 'assets/img/items/weapons/ice.png',
    miniImgUrl: 'assets/img/items/weapons-mini/ice-mini.png',
    damage: 18,
    default: false
  },
  {
    name: 'Ice Sword',
    id: 3,
    description:
      'Able to cut almost anything, use this for a potential 20 point damage',
    weaponUrl: 'assets/img/items/weapons/ice-sword.png',
    miniImgUrl: 'assets/img/items/weapons-mini/ice-sword-mini.png',
    damage: 20,
    default: false
  },
  {
    name: 'Flaming Ice',
    id: 4,
    description:
      'Only the gifted can use this combination to dish out a potential damage of 22 points',
    weaponUrl: 'assets/img/items/weapons/ice-fire.png',
    miniImgUrl: 'assets/img/items/weapons-mini/ice-fire-mini.png',
    damage: 22,
    default: false
  },
  {
    name: 'Sour Grapes',
    id: 5,
    description:
      'Increase your calorie intake and increase the maximum damage you inflict to 14',
    weaponUrl: 'assets/img/items/weapons/grapes.png',
    miniImgUrl: 'assets/img/items/weapons-mini/grapes-mini.png',
    damage: 14,
    default: false
  },
  {
    name: 'Flame Drop',
    id: 6,
    description:
      'Light your paths and burn your opponents for a potential 18 point damage',
    weaponUrl: 'assets/img/items/weapons/flame.png',
    miniImgUrl: 'assets/img/items/weapons-mini/flame-mini.png',
    damage: 18,
    default: false
  },
  {
    name: 'Flame Sword',
    id: 7,
    description:
      'The bane of the dark. Each strike can take out up to 20 points',
    weaponUrl: 'assets/img/items/weapons/flame-sword.png',
    miniImgUrl: 'assets/img/items/weapons-mini/flame-sword-mini.png',
    damage: 20,
    default: false
  },
  {
    name: 'Dual Axe',
    id: 8,
    description:
      'Strike Left or strike right, this dual axe strikes for a potential 16 points damage',
    weaponUrl: 'assets/img/items/weapons/dual-ax.png',
    miniImgUrl: 'assets/img/items/weapons-mini/dual-ax-mini.png',
    damage: 16,
    default: false
  },
  {
    name: 'Fried Drumsticks',
    id: 9,
    description:
      'Tasty! This gives you enough energy to dish up to a 14 point damage',
    weaponUrl: 'assets/img/items/weapons/drumsticks.png',
    miniImgUrl: 'assets/img/items/weapons-mini/drumsticks-mini.png',
    damage: 14,
    default: false
  },
  {
    name: 'Dragon Spear',
    id: 10,
    description:
      'Nothing known is immune to the potential 22 point damage of this weapon',
    weaponUrl: 'assets/img/items/weapons/dragon-glass-spear.png',
    miniImgUrl: 'assets/img/items/weapons-mini/dragon-glass-spear-mini.png',
    damage: 22,
    default: false
  },
  {
    name: 'Golden Cheese',
    id: 11,
    description:
      'Food for all wise men. You get the ability to inflict a maximum 14 point damage',
    weaponUrl: 'assets/img/items/weapons/cheese.png',
    miniImgUrl: 'assets/img/items/weapons-mini/cheese-mini.png',
    damage: 14,
    default: false
  },
  {
    name: 'Blue Blade',
    id: 12,
    description:
      'The Unbreakable! It can deal a maximum 16 Attack Point damage',
    weaponUrl: 'assets/img/items/weapons/blue-blade.png',
    miniImgUrl: 'assets/img/items/weapons-mini/blue-blade-mini.png',
    damage: 16,
    default: false
  },
  {
    name: 'Red Axe',
    id: 13,
    description:
      'Every starters first weapon. It has a maximum 10 Attack Point damage',
    weaponUrl: 'assets/img/items/weapons/ax.png',
    miniImgUrl: 'assets/img/items/weapons-mini/ax-mini.png',
    damage: 10,
    default: true
  }
];

export const imgSrc = utils.shuffle(
  avatars.map(avatar => {
    return avatar.miniImgUrl;
  })
);

export const inputId = imgSrc.map(img => {
  for (const avatar of avatars) {
    if (img === avatar.miniImgUrl) {
      return `av-${avatar.id}`;
    }
  }
});

export const weapons = weaponItems
  .filter(weapon => weapon.default === false)
  .map(weapon => weapon);

export const defaultWeapon = weaponItems
  .filter(weapon => weapon.default === true)
  .map(weapon => weapon);
