import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ open: nextProps.open });
    }

    handleClose() {
        this.setState({ open: false })
    }

    handleToggle() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}


export default Menu;