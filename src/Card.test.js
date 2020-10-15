import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe.only('Card component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card/>)
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