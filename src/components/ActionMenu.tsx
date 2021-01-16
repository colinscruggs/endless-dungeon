import React from "react";
import { Button } from 'antd';
import '../css/ActionMenu.css';
import 'antd/lib/button/style/index.css';

class ActionMenu extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const {
      playerAttack
    } = this.props;
    return (
      <div className="actionContainer">
        <Button type="primary" onClick={playerAttack}>Attack</Button>
      </div>
    );
  }
};

export default ActionMenu;