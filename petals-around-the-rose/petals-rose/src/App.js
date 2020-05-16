import React from 'react';
//import logo from './logo.svg';
import './TestLayout.css';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			values: Array(6).fill().map(() => Math.round(Math.random() * 5+1))
		};
		this.calculateResult = this.calculateResult.bind(this);
		this.generateFacets = this.generateFacets.bind(this);
		this.checkAnswer = this.checkAnswer.bind(this);
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
				case 5:
					res+=4;
				break;
				default:
					res+=0;
			}
		}
		return res;
	}
	
	generateFacets(){
		this.setState({
			values: Array(6).fill().map(() => Math.round(Math.random() * 5+1))
		});
	}
	
	checkAnswer(ans){
		if (+ans === this.calculateResult()){
			console.log('You are right :)');
		} else {
			console.log('You are wrong :(');
		}
	}
	
	render(){
		return (
			<div className="App">
				<Generator generate={this.generateFacets}/>
				<Dice values={this.state.values}/>
				<Checker check={this.checkAnswer}/>
			</div>
		);
	}
}

class Dice extends React.Component{
	constructor(props){
		super(props);
		this.roses = [[false, false, false, false, true, false, false, false, false],	//1
					  [true, false, false, false, false, false, false, false, true],	//2	
					  [true, false, false, false, true, false, false, false, true],		//3
					  [true, false, true, false, false, false, true, false, true],		//4
					  [true, false, true, false, true, false, true, false, true],		//5
					  [true, false, true, true, false, true, true, false, true]];		//6
	}
	
	render(){
		const facets = this.props.values.map((val, i) => {
			return <Facet key={i} rose={this.roses[val-1]}/>;
		});
		return (
			<div className="facetsContainer">
				{facets}
			</div>
		);
	}
}

class Facet extends React.Component{	
	render(){
		return (
			<div className='facet' value={this.props.value}>
				<div className="row rowTop">
					<div className={"cell " + (this.props.rose[0] ? "" : "hidden")}>*</div>
					<div className={"cell " + (this.props.rose[1] ? "" : "hidden")}>*</div>
					<div className={"cell " + (this.props.rose[2] ? "" : "hidden")}>*</div>
				</div>
				<div className="row rowMiddle">
					<div className={"cell " + (this.props.rose[3] ? "" : "hidden")}>*</div>
					<div className={"cell " + (this.props.rose[4] ? "" : "hidden")}>*</div>
					<div className={"cell " + (this.props.rose[5] ? "" : "hidden")}>*</div>
				</div>
				<div className="row rowBottom">
					<div className={"cell " + (this.props.rose[6] ? "" : "hidden")}>*</div>
					<div className={"cell " + (this.props.rose[7] ? "" : "hidden")}>*</div>
					<div className={"cell " + (this.props.rose[8] ? "" : "hidden")}>*</div>
				</div>
			</div>
		);
	}
}

class Generator extends React.Component {
	render(){
		return (
			<div className="generator">
				<button onClick={this.props.generate}>Generate</button>
			</div>
		)
	}
}

class Checker extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			answer: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.checkAnswer = this.checkAnswer.bind(this);
	}
	
	handleChange(e){
		this.setState({
			answer: e.target.value
		});
	}
	
	checkAnswer(){
		this.props.check(this.state.answer);
	}
	
	render(){
		const answer = this.state.answer;
		return (
			<div className="result">
				<input type="number" value={answer} onChange={this.handleChange}/>
				<button onClick={this.checkAnswer}>Check</button>
			</div>
		);
	}
}

export default App;
