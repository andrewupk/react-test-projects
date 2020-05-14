import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {	
	const values = [1, 2, 3, 4, 5, 6];
	const facets = values.map((val, i) => <Facet value={val} key={i}/>);
	//console.log(facets);
	
	return (
		<div className="App">
			{facets}
		</div>
	);
}

class Facet extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			roses:
				[[' ',' ',' ',' ','*',' ',' ',' ',' '],	//1
				 ['*',' ',' ',' ',' ',' ',' ',' ','*'],	//2
				 ['*',' ',' ',' ','*',' ',' ',' ','*'],	//3
				 ['*',' ','*',' ',' ',' ','*',' ','*'],	//4
				 ['*',' ','*',' ','*',' ','*',' ','*'],	//5
				 ['*',' ','*','*',' ','*','*',' ','*']]	//6
			};
	}
	
	render(){
		return (
			<div className='facet' value={this.props.value}>
				<div className="row rowTop">
					<span>{this.state.roses[this.props.value-1][0]}</span>
					<span>{this.state.roses[this.props.value-1][1]}</span>
					<span>{this.state.roses[this.props.value-1][2]}</span>
				</div>
				<div className="row rowMiddle">
					<span>{this.state.roses[this.props.value-1][3]}</span>
					<span>{this.state.roses[this.props.value-1][4]}</span>
					<span>{this.state.roses[this.props.value-1][5]}</span>
				</div>
				<div className="row rowBottom">
					<span>{this.state.roses[this.props.value-1][6]}</span>
					<span>{this.state.roses[this.props.value-1][7]}</span>
					<span>{this.state.roses[this.props.value-1][8]}</span>
				</div>
			</div>
		);
	}
}

export default App;
