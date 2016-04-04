var React = require('react');
var ReactDOM = require('react-dom');

var TextArea = React.createClass({
  render: function() {
    return (<div class="form-group">
        <input
          type={this.props.type}
          class={this.props.class}
          placeholder={this.props.placeholder}
          rows={this.props.rows}>
        </input>
      </div>
    )
  }
});

ReactDOM.render(
<TextArea
  placeholder="Paste ingredients here"
  type="input-group input-group-lg"
  class="form-control"
  rows="4"
/>,
  document.getElementById('text-area-component')
);