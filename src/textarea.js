var React = require('react');
var ReactDOM = require('react-dom');

var TextArea = React.createClass({
  render: function() {
    return (<div>
      <textarea type="input-group" placeholder={this.props.instructions}>h</textarea>
      </div>
    )
  }
});

ReactDOM.render(
<TextArea instructions="Paste ingredients here"/>,
  document.getElementById('text-area-component')
);