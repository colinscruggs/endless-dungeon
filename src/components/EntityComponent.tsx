import React from "react";

interface Entity {
  name: string;
  stats: {
    strength: number;
    dex: number;
    arcana: number;
  },
  status: {
    health: number;
    mana: number;
  },
  inventory: any[],
  equippedWeapon: any
};

export class EntityComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {

    }
  }

  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
};

export default EntityComponent;