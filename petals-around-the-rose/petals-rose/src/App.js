import React from 'react';
import logo from './logo.svg';
import './App.css';

/*function App() {	
	const values = Array(6).fill().map(() => Math.round(Math.random() * 5+1));
	let res = 0;
	for (const value of values){
		switch(value){
			case 1:
			case 2:
			case 4:
			case 6:
				res+=0;
				break;
			case 3:
				res+=2;
				break;
			break;
				case 5:
				res+=4;
			break;
		}
	}
	
	const roses = [[' ',' ',' ',' ','*',' ',' ',' ',' '],	//1
					 ['*',' ',' ',' ',' ',' ',' ',' ','*'],	//2
					 ['*',' ',' ',' ','*',' ',' ',' ','*'],	//3
					 ['*',' ','*',' ',' ',' ','*',' ','*'],	//4
					 ['*',' ','*',' ','*',' ','*',' ','*'],	//5
					 ['*',' ','*','*',' ','*','*',' ','*']]	//6
	const facets = values.map((val, i) => {
		return <Facet value={val} key={i} rose={roses[val-1]}/>;
	});

	return (
		<div className="App">
			<div className="generator">
				<button>Generate</button>
			</div>
			<div className="facetsContainer">
				{facets}
			</div>
		</div>
	);
}*/

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			values: Array(6).fill().map(() => Math.round(Math.random() * 5+1))
		};
		
		this.roses = [[' ',' ',' ',' ','*',' ',' ',' ',' '],	//1
						 ['*',' ',' ',' ',' ',' ',' ',' ','*'],	//2
						 ['*',' ',' ',' ','*',' ',' ',' ','*'],	//3
						 ['*',' ','*',' ',' ',' ','*',' ','*'],	//4
						 ['*',' ','*',' ','*',' ','*',' ','*'],	//5
						 ['*',' ','*','*',' ','*','*',' ','*']]	//6
		this.calculateResult = this.calculateResult.bind(this);
		this.generateFacets = this.generateFacets.bind(this);
	}
	
	calculateResult(){
		let res = 0;
		for (const value of this.state.values){
			switch(value){
				case 1:
				case 2:
				case 4:
				case 6:
					res+=0;
					break;
				case 3:
					res+=2;
					break;
				break;
					case 5:
					res+=4;
				break;
			}
		}
		return res;
	}
	
	generateFacets(){
		this.setState({
			values: Array(6).fill().map(() => Math.round(Math.random() * 5+1))
		});
	}
	
	render(){
		const facets = this.state.values.map((val, i) => {
			return <Facet value={val} key={i} rose={this.roses[val-1]}/>;
		});
		return (
			<div className="App">
				<div className="generator">
					<button onClick={this.generateFacets}>Generate</button>
				</div>
				<div className="facetsContainer">
					{facets}
				</div>
			</div>
		);
	}
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
