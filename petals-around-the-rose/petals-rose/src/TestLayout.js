import React from 'react';
import './TestLayout.css';

class TestLayout extends React.Component{
	render(){
		return (
			<div className="App">
				<div className="generator">
					<button>Generate</button>
				</div>
				<div className="facetsContainer">
					<Facet/>
					<Facet/>
					<Facet/>
					<Facet/>
					<Facet/>
					<Facet/>
				</div>
				<div className="result">
					<input type="text"/>
					<button>Check</button>
				</div>
			</div>
		);
	}
}

class Facet extends React.Component{
	render(){
		return (
			<div className='facet'>
				<div className="row rowTop">
					<div className="cell">*</div>
					<div className="cell">*</div>
					<div className="cell">*</div>
				</div>
				<div className="row rowMiddle">
					<div className="cell">*</div>
					<div className="cell">*</div>
					<div className="cell">*</div>
				</div>
				<div className="row rowBottom">
					<div className="cell">*</div>
					<div className="cell">*</div>
					<div className="cell">*</div>
				</div>
			</div>
		);
	}
}

export default TestLayout;
