import React from 'react';
import PropTypes from 'prop-types';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.state);
        return (
            <div className="row">
                <ul className="nav nav-pills nav-wizard">
                    <li className={this.props.tabIndex === 1 ? 'active' : ''}><a href="#" data-toggle="tab" onClick={this.props.toggleTab} data-tab-index="1">Select Products</a></li>
                    <li className={this.props.tabIndex === 2 ? 'active' : ''}><a href="#" data-toggle="tab" onClick={this.props.toggleTab} data-tab-index="2">Contact & Billing</a></li>
                </ul>
            </div>
        )
    }
}

NavBar.propTypes = {
    tabIndex: PropTypes.number.isRequired
}

export default NavBar;
