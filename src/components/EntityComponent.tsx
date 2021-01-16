import React from "react";
import Entity from '../types/Entity';

class EntityComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const {
      entity
    } = this.props;

    console.log(entity);
    return <h1>Hello {entity.name}</h1>;
  }
};

export default EntityComponent;