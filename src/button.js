var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
  render: function() {
    return (<div>
        <button type="button"></button>
      </div>
    )
  }
});

ReactDOM.render(
  <Button instructions="Paste ingredients here"/>,
  document.getElementById('button')
);