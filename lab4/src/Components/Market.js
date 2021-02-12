import React from 'react';
import MarketItem from './MarketItem';

class Market extends React.Component {

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
          items.push(<MarketItem key= {items.length} count= {items.length}/> );
          this.setState({items: items});
        }}>Click Me! I Dare You!</button>
      <div>
        {this.state.items.map(function(item) {
          return <p> {item} </p>
        })
        } 
      </div>
      </div>
    );
  }
}

export default Market;