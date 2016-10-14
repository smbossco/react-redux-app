let React = require("react");

let NavBar = React.createClass({
    
    render: function(){
//        const name = "Navbar"
        return (
            <h2>{this.props.name} {this.props.action} here?</h2>
            );
    }
    
});

NavBar.proptypes = {
    name: React.PropTypes.string.isRequired,
    action: React.PropTypes.string
};

module.exports = NavBar;