import React from "react";
import Entity from '../types/Entity';
import HealthBar from './HealthBar/HealthBar';
import '../css/EntityComponent.css';

class EntityComponent extends React.Component<Entity, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const {
      name,
      // stats,
      status,
      // inventory,
      // equippedWeapon
    }: Entity = this.props;

    return (
      <div className="entityContainer">
        <h2>{name}</h2>
        <div className="statusContainer">
          <div className="healthBar">
            <h3>Health</h3>
            <HealthBar
              percentage={(status.health / status.maxHealth) * 100}
            />
          </div>

          <div className="healthBar">
            <h3>Mana</h3>
            <HealthBar
              percentage={(status.mana / status.maxMana) * 100}
              colors={['aquamarine']}
            />
          </div>
        </div>
        
      </div>
    );
  }
};

export default EntityComponent;