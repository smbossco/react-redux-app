const React = require("react");

let CommentBox = React.createClass({
  getInitialState: function(){
    return {
      users: ["Steve", "Stephie"]
    };
  },
  getUsers: function(){
    var list = this.state.users.map(function(item, i){
      return <li key={i} id={"comment"+(i.toString() + 1)}>{item}</li>;
    });
    return list;
  },
  render: function() {
    return (
      <div>
        <p>Comment</p>
        <ol className="primary">
        {this.getUsers()}
        </ol>
      </div>
    );
  }
});

module.exports = CommentBox;