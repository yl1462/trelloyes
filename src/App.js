import React, { Component } from 'react';
import './App.css';
import List from './List'

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  let { [keyToOmit]: _, ...rest } = obj;
  return rest;
}

// Example
const objectWithKVPs = {
  key: 'value',
  foo: 'foo value',
  bar: 'bar value',
  abc: { nested: 'object' }
}

// To remove the foo key value pair
const newObjectWithKVPs = omit(objectWithKVPs, 'foo');

class App extends Component {
  static defaultProps = {
    store: {
      list: [],
      allCards: {},
    }
  }

  state = {
    lists: this.props.store.lists,
    allCards: this.props.store.allCards,
  }

  handleAddCard = (id) => {
    let newCard = newRandomCard()
    let cardId = newCard.id
    const allCards = {
      ...this.state.allCards,
      [cardId]: newCard
    }
    let lists = this.state.lists.map((list) => {
      if (list.id === id) {
        list.cardIds.push(cardId)
        return list
      }
      return list
    })

    this.setState({
      lists,
      allCards
    })
  }

  handleDeleteCard = (cardId) => {
    const { lists, allCards } = this.state.store;

    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(allCards, cardId);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  };

  render() {
    const { lists, allCards } = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => allCards[id])}
              onClickDelete={this.handleDeleteCard}
              onClickAdd={this.handleAddCard}
            />
          ))}
        </div>
      </main>
    )
  }

}



export default App;
