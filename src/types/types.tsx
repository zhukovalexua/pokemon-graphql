export interface ICreature {
  id: string;
  name: string;
  image: string;
  height: {
    minimum: string;
  };
  weight: {
    minimum: string;
  };
  maxHP: string;
  types: string;
  attacks: {
    special: [name: any];
  };
}
