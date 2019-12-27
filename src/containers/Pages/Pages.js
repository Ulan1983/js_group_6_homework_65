import React, {Component} from 'react';
import axiosApi from "../../axios-pages";
import {Card, CardBody, CardText, CardTitle} from "reactstrap";

class Pages extends Component {
	state = {};

	getData = async () => {
		const id = this.props.match.params.id;

		const response = await axiosApi.get('/pages/' + id + '.json');

		if (response.data) {
			this.setState({...response.data});
		}
	};

	componentDidMount() {
		return this.getData();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.id !== this.props.match.params.id) {
			return this.getData();
		}
	}

	render() {
		return (
			<Card>
				<CardBody>
					<CardTitle>{this.state.title}</CardTitle>
					<CardText>{this.state.content}</CardText>
				</CardBody>
			</Card>
		);
	}
}

export default Pages;