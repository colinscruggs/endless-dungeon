import React from "react";
import { Button } from 'antd';
import '../css/ActionMenu.css';
import 'antd/lib/button/style/index.css';
import CharacterType from "../types/CharacterType";

class ActionMenu extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const {
      currentTurn,
      playerAttack
    } = this.props;
    return (
      <div className="actionContainer">
        <Button type="primary" onClick={playerAttack} disabled={currentTurn === CharacterType.Mob}>Attack</Button>
      </div>
    );
  }
};

export default ActionMenu;