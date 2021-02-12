import React from 'react';
import MarketItem from './MarketItem';

class Market extends React.Components {

  constructor(props){
    super(props);
    this.state = {items:[]};
  };

  render() {
    return (
      <div>
        <h2>Click to add coin</h2>
        <button onClick={ ()=> {
          const items = this.state.items;
          items.push(<MarketItem items={this.state.items}/> );
          this.setState({items: this.state.items + 1});
        }}>Click Me! I Dare You!</button>
      </div>{
        this.state.items.map(function(item) {
          return <p>{item}</p>
        })
      } </div>
    );
  }
}

export default Market;