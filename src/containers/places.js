import React, {Component} from 'react';
import * as t from "../config";
class Places extends Component {
	state = {
		input: ""
	};
	
	handleChange = (e) =>{
		this.setState({input: e.target.value});
	};
	
	onClickEvent = () => {
		const example = `https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=${t.authForPlaces}&input=pizza+near%20par`;
		const base = `https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=${t.authForPlaces}&language=en&input=${this.state.input}`;
		const someOther = `https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=Tallinn&types=(cities)&language=pt_BR&key=${t.authForPlaces}`;
		const URL = `https://maps.googleapis.com/maps/api/place/autocomplete/output?parameters&input=${this.state.input}&key=${t.authForPlaces}`;
		fetch(base, {
			mode: "no-cors",
			headers: {
				"AIzaSyC87cxRLkllGXuDgYRKBkNzKneAFPitIhE" : true,
				'Access-Control-Allow-Origin':'*',
				'Access-Control-Allow-Methods':'GET',
				'Access-Control-Allow-Headers':'application/json',
			}
		})
			.then(res => res.json())
			.then(data => console.log(data))
			.catch(err => console.log(err))
	};
	render() {
		return (
			<div>
				<input type="text"  onChange={this.handleChange} value={this.state.input}
					style={ {
						width: "80%"
					}}
				/>
				<button className="btn__search" onClick={this.onClickEvent} >Otsi</button>
				<p>{ this.state.input }</p>
			</div>
		);
	}
}

export default Places;