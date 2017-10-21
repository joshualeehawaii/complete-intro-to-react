import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function(props) {
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = function() {
  return (
    <div id="my-first-component">
      <MyTitle title="Game of Thrones" color="YellowGreen" />
      <MyTitle title="Another Show" color="GreenYellow" />
    </div>
  );
};

render(<MyFirstComponent />), document.getElementById('app'));
