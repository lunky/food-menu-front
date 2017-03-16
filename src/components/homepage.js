import React, {Component} from 'react'
import { Link } from 'react-router'
import LoginWidget from '../containers/LoginWidget'

class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>
          <Link to="/">
            Home
          </Link>
          <Link to="/orders">
            Orders
          </Link>
        </p>
        <LoginWidget />

        {this.props.children}
      </div>
    )
  }
}

export default HomePage
