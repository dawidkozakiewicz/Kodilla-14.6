var Counter = React.createClass({
	
	getInitialState: function(){
		return {
		
			counter: 0
		};
		
	},
	
	increment: function(){
		this.setState({
			counter: this.state.counter + 1
		});
	},
	
	decrement: function(){
		this.setState({
			counter: this.state.counter - 1
		});
	},
	
	componentWillMount: function() {
    console.log('Moment przed utworzeniem komponentu');
  },

  componentDidMount: function() {
    console.log('Moment po utworzeniu komponentu');
  },


  componentWillUpdate: function(nextProps, nextState) {
    
    console.log('Obecny stan licznika: ' + nextState.counter);

  },

  componentDidUpdate: function(prevProps, prevState) {
   
    console.log('Poprzednia wartość licznika: ' + prevState.counter);
  },
	
	
	render: function(){
		return (
				React.createElement('div', {className: 'counter'},
					React.createElement('h2', {}, 'Counter'),
					React.createElement('p', {}, 'Licznik: ' + this.state.counter),
					React.createElement('div', {}, 
						React.createElement('button', {
							className: 'incr_button', 
							onClick: this.increment},'Increment Counter'),
							
						React.createElement('button', {
							onClick: this.decrement}, 'Decrement Counter')
					)
				)
		);
	}
});

var element = React.createElement('div', {className: 'counters'},
		React.createElement('h1', {}, 'Template of counters'),
		React.createElement(Counter),
		React.createElement(Counter),
		React.createElement(Counter),
		React.createElement(Counter)
	);

ReactDOM.render(element, document.getElementById('app'));