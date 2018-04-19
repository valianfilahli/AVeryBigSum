import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap/dist/css/bootstrap.css';
import './bootstrap/js/src/modal.js';
import $ from 'jquery';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {value: '', value1: '', value2: '', value3: '', value4: '', value5: '', value6: '', value7: '', value8: '', value9: '', value10: ''};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.submitSum = this.submitSum.bind(this);
	}
	
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	
	handleSubmit(event) {
		document.getElementById("field").innerHTML = '';
		var i = this.state.value
		var j = 0
		if(i > 0 && i < 11){
			for(j = 0; j < i; j++){
			var k = j + 1
				document.getElementById("field").innerHTML += "<input class='col-md-6 form-control' type='number' id='var"+k+"' value='{this.state.value"+k+"}' onChange={this.handleChange} min='1' max='10000000000'/>"
			}
			document.getElementById("field").innerHTML += "<input type='hidden' id='totalInput' value='"+i+"'>"
			$('#inputModal').modal('show');
			event.preventDefault();
		}
		else{
			$('#alertModal').modal('show');
		}
		event.preventDefault();
	}
	
	submitSum(event){
		document.getElementById("result").innerHTML = '';
		var i = document.getElementById("totalInput").value;
		$('#inputModal').modal('hide');
		var sum = Number(0);
		var j = 0
		for(j = 0; j < i; j++){
			var k = j + 1
			var l = Number(document.getElementById("var"+k).value);
			sum += l
		}
		document.getElementById("result").innerHTML += "<h5>"+sum+"</h5>"
		$('#outputModal').modal('show');
		event.preventDefault();
	}
	
	render() {
		return (
			<div>
				<header className="App-header">
					<a href="https://reactjs.org/"><img src={logo} className="App-logo" alt="logo"/></a>
					<h1 className="App-title text-center">Welcome to React</h1>
				</header>
				<div class="col-md-10 col-md-offset-2">
				</div>
				<div id="demo">
					<form class="container form-group border pb-4 pt-3" onSubmit={this.handleSubmit}>
						<div class="row">
							<div class="col-sm-4">
							</div>
							<label class="control-label">The First Input :</label>
						</div>
						<div class="row">	
							<div class="col-sm-4"></div>
							<input class="col-md-3 form-control" type="text" placeholder="input must in range 1-10" value={this.state.value} onChange={this.handleChange} />
							<button type="submit" value="Submit" data-toggle="modal" class="btn btn-info col-md-1">Submit</button>
						</div>
					</form>
					<div class="row text-center">
						<p class="col-md-12">Copyright©2018.</p>
					</div>
					<div class="row text-center">
						<a class="col-md-12" href="https://github.com/valianfilahli">Valian Fil Ahli</a>
					</div>
				</div>
				<div class="modal fade" id="inputModal" role="dialog">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h4 class="modal-title">Input Value to Sum</h4>
								<button type="button" class="close" data-dismiss="modal">&times;</button>
							</div>
							<div class="modal-body">
								<form class="container form-group" onSubmit={this.submitSum}>
									<div id="field">
									</div>
									<button type="submit" value="Submit" class="btn btn-info">Submit</button>
								</form>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
				<div class="modal fade" id="outputModal" role="dialog">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h4 class="modal-title">Total Sum</h4>
								<button type="button" class="close" data-dismiss="modal">&times;</button>
							</div>
							<div class="modal-body">
								<div id="result">
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
				<div class="modal fade" id="alertModal" role="dialog">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h4 class="modal-title">Alert!</h4>
								<button type="button" class="close" data-dismiss="modal">&times;</button>
							</div>
							<div class="modal-body">
								<p>input must in range 1-10</p>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
