import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Menu extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const menus = this.props.data.map((item, i) => {
             return <div key={item.id}>
                <span>{item.title}</span>
                <span>{item.description}</span>
                <RaisedButton label="Add" onTouchTap={this.props.addToBasket}/>
             </div>
        });

        return <div>{ menus }</div>
    }
}

export default Menu