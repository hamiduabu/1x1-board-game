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
      'Used during the Great War of Ages, these boots gives an extra "oomph" to your attacks for a 12 point attack damage',
    weaponUrl: 'assets/img/items/weapons/steel-boots.png',
    miniImgUrl: 'assets/img/items/weapons-mini/steel-boots-mini.png',
    damage: 12,
    default: false
  },
  {
    name: 'Ice',
    id: 2,
    description:
      'The elemental weapon of frost giants. With this you your attack points increase to 14',
    weaponUrl: 'assets/img/items/weapons/ice.png',
    miniImgUrl: 'assets/img/items/weapons-mini/ice-mini.png',
    damage: 14,
    default: false
  },
  {
    name: 'Ice Sword',
    id: 3,
    description:
      'Able to cut through almost anything, use this weapon for a 16 point damage',
    weaponUrl: 'assets/img/items/weapons/ice-sword.png',
    miniImgUrl: 'assets/img/items/weapons-mini/ice-sword-mini.png',
    damage: 16,
    default: false
  },
  {
    name: 'Ice Fire',
    id: 4,
    description:
      'Only the most gifted combatants can use this combination to dish out a total damage of 20 points',
    weaponUrl: 'assets/img/items/weapons/ice-fire.png',
    miniImgUrl: 'assets/img/items/weapons-mini/ice-fire-mini.png',
    damage: 20,
    default: false
  },
  {
    name: 'Grapes',
    id: 5,
    description:
      'Satisfy your hunger, increase your calorie intake and increase the damage you inflict to 12',
    weaponUrl: 'assets/img/items/weapons/grapes.png',
    miniImgUrl: 'assets/img/items/weapons-mini/grapes-mini.png',
    damage: 12,
    default: false
  },
  {
    name: 'Flame',
    id: 6,
    description:
      'Light your paths, roast your beef and burn your opponents up to a 14 point damage',
    weaponUrl: 'assets/img/items/weapons/flame.png',
    miniImgUrl: 'assets/img/items/weapons-mini/flame-mini.png',
    damage: 14,
    default: false
  },
  {
    name: 'Flame Sword',
    id: 7,
    description:
      'The bane of the dark ghouls. Each strike would take away 16 points from your opponent',
    weaponUrl: 'assets/img/items/weapons/flame-sword.png',
    miniImgUrl: 'assets/img/items/weapons-mini/flame-sword-mini.png',
    damage: 16,
    default: false
  },
  {
    name: 'Dual Ax',
    id: 8,
    description:
      'Left or right, this ax strikes out 12 points from your opponent',
    weaponUrl: 'assets/img/items/weapons/dual-ax.png',
    miniImgUrl: 'assets/img/items/weapons-mini/dual-ax-mini.png',
    damage: 12,
    default: false
  },
  {
    name: 'Drumsticks',
    id: 9,
    description:
      'Tasty for you, trouble for your opponents. This gives you enough energy to dish out an 11 point damage',
    weaponUrl: 'assets/img/items/weapons/drumsticks.png',
    miniImgUrl: 'assets/img/items/weapons-mini/drumsticks-mini.png',
    damage: 11,
    default: false
  },
  {
    name: 'Dragon Glass Spear',
    id: 10,
    description:
      'Nothing in all of known creation is immune to the 18 point damage this weapon inflicts',
    weaponUrl: 'assets/img/items/weapons/dragon-glass-spear.png',
    miniImgUrl: 'assets/img/items/weapons-mini/dragon-glass-spear-mini.png',
    damage: 18,
    default: false
  },
  {
    name: 'Cheese',
    id: 11,
    description:
      'Food for the Gods and all wise men. Your strength increase for you to inflict a 12 point damage',
    weaponUrl: 'assets/img/items/weapons/cheese.png',
    miniImgUrl: 'assets/img/items/weapons-mini/cheese-mini.png',
    damage: 12,
    default: false
  },
  {
    name: 'Blue Blade',
    id: 12,
    description:
      'Also known as the unbreakable. It can deal a significant 14 point damage',
    weaponUrl: 'assets/img/items/weapons/blue-blade.png',
    miniImgUrl: 'assets/img/items/weapons-mini/blue-blade-mini.png',
    damage: 14,
    default: false
  },
  {
    name: 'Ax',
    id: 13,
    description:
      'A basic weapon, but gets the job done with the ability to strike for a 10 point damage',
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
