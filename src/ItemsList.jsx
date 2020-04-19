import React from 'react';
import CardsList from './CardsList.jsx';
import StripesList from './StripesList.jsx';

const LIST_TYPES = [`view_list`, `view_module`]

const IconSwitch = ({activeListType, onIconClick}) => {
 return (
  <div className="view-icon">
    <i className="material-icons md-48" onClick={onIconClick}>
      {LIST_TYPES[activeListType]}
    </i>
  </div>
 )
}

class ItemsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeListType: 0
    }

    this.handleListTypeSwitch = this.handleListTypeSwitch.bind(this);
  }

  handleListTypeSwitch = () => {
    let newValue = 0;
    
    if (this.state.activeListType === 0) {
      newValue = 1;
    }

    this.setState({
      activeListType: newValue
    })
  }

  render() {
    return <React.Fragment>
      <IconSwitch activeListType={this.state.activeListType} onIconClick={this.handleListTypeSwitch}/>
      {(this.state.activeListType === 0) ? <CardsList products={this.props.products}/> : <StripesList products={this.props.products}/>}
    </React.Fragment>
  }

}

export default ItemsList;
