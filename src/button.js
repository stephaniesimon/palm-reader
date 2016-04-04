var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
  render: function() {
    return (<button
            type={this.props.type}
            class={this.props.class}
            placeholder={this.props.placeholder}>
            submit
            </button>
    )
  }
});

ReactDOM.render(
  <Button
    placeholder="Paste ingredients here"
    type="button"
    class="btn btn-default btn-lg btn-block"
  />,
  document.getElementById('button')
);

