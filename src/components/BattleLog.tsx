import { List } from "antd";
import React from "react";
import '../css/BattleLog.css';
import 'antd/lib/list/style/index.css';

class BattleLog extends React.Component<any, any> {
  render() {
    const {
      log
    } = this.props;

    return (
      <div className="battleLogContainer" id="battleLog">
        <List
          size="small"
          bordered
          dataSource={log}
          renderItem={item => <List.Item>{item}</List.Item>}
          rowKey={() => {
            return log.length.toString()
          }}
        />
      </div>
    );
  }
};

export default BattleLog;