var React = require('react');

var Example = React.createClass({
  getInitialState() {
    return {
      val: 0
    };
  },

  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // log 1
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // log 2

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // log 3
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // log 4
    }, 0);
  },

  render() {
    return null;
  }
});

React.render(<Example />, document.body);
