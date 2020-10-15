import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component', () => {
  it('renders without crashing', () => {
    const card = []
    const div = document.createElement('div');
    ReactDOM.render(<List cards={card}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const card = []
    const tree = renderer
      .create(<List cards={card}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  // it('renders the UI as expected with no unreads', () => {
  //   const tree = renderer
  //     .create(<Messages name="Messages" unread={0}/>)
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();  
  // });
});