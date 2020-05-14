import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {	
	const values = Array(6).fill().map(() => Math.round(Math.random() * 5+1));
	const roses = [[' ',' ',' ',' ','*',' ',' ',' ',' '],	//1
					 ['*',' ',' ',' ',' ',' ',' ',' ','*'],	//2
					 ['*',' ',' ',' ','*',' ',' ',' ','*'],	//3
					 ['*',' ','*',' ',' ',' ','*',' ','*'],	//4
					 ['*',' ','*',' ','*',' ','*',' ','*'],	//5
					 ['*',' ','*','*',' ','*','*',' ','*']]	//6
	const facets = values.map((val, i) => {
		return <Facet value={val} key={i} rose={roses[val-1]}/>
	});

	return (
		<div className="App">
			{facets}
		</div>
	);
}

class Facet extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div className='facet' value={this.props.value}>
				<div className="row rowTop">
					<div className="cell">{this.props.rose[0]}</div>
					<div className="cell">{this.props.rose[1]}</div>
					<div className="cell">{this.props.rose[2]}</div>
				</div>
				<div className="row rowMiddle">
					<div className="cell">{this.props.rose[3]}</div>
					<div className="cell">{this.props.rose[4]}</div>
					<div className="cell">{this.props.rose[5]}</div>
				</div>
				<div className="row rowBottom">
					<div className="cell">{this.props.rose[6]}</div>
					<div className="cell">{this.props.rose[7]}</div>
					<div className="cell">{this.props.rose[8]}</div>
				</div>
			</div>
		);
	}
}

export default App;
