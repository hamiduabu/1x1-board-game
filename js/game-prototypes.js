class Player {
  constructor(name, avatar, weaponId = 13, health = 100) {
    this.name = name;
    this.avatar = avatar;
    this.weaponId = weaponId;
    this.health = health;
  }
  moveUp() {}
  moveRight() {}
  moveDown() {}
  moveLeft() {}
  attack() {}
  defend() {}
}

class Board {
  constructor(grids = 100, element = 'section') {
    this.grids = grids;
    this.element = element;
  }
  createBoard() {}
}
