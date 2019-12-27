import React, {Component, Fragment} from 'react';
import {CATEGORIES} from "../../constants";
import axiosApi from "../../axios-pages";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class EditPage extends Component {
	state = {
		title: '',
		content: '',
		pageId: CATEGORIES[0],
	};

	getData = async (pageId) => {
		const response = await axiosApi.get('/pages/' + pageId + '.json');
		const title = response.data.title;
		const content = response.data.content;
		this.setState({title: title, content: content, pageId: pageId})
	};

	componentDidMount() {
		return this.getData(this.state.pageId);
	}

	valueChanged = e => this.setState({[e.target.name]: e.target.value});

	editHandler = async (e) => {
		e.preventDefault();

		const page = {
			title: this.state.title,
			content: this.state.content
		};

		await axiosApi.put('/pages/' + this.state.pageId + '.json', page);
			this.props.history.replace({
				pathname: '/pages/' + this.state.pageId
			})
	};

	idChanged = e => {
		return this.getData(e.target.value);
	};

	render() {
		return (
			<Fragment>
				<h3>Edit pages</h3>
				<Form onSubmit={this.editHandler}>
					<FormGroup>
						<Label for="category">Select page</Label>
						<Input
							type="select"
							name="category"
							id="category"
							value={this.state.pageId}
							onChange={this.idChanged}
						>
							{CATEGORIES.map(c => (
								<option key={c} value={c}>{c}</option>
							))}
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for="title">Title</Label>
						<Input
							type="text"
							name="title"
							id="title"
							placeholder="Enter title"
							value={this.state.title}
							onChange={this.valueChanged}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="content">Content</Label>
						<Input type="textarea"
							   name="content"
							   id="content"
							   placeholder="Enter content"
							   value={this.state.content}
							   onChange={this.valueChanged}
						/>
					</FormGroup>
					<Button>Save</Button>
				</Form>
			</Fragment>
		);
	}
}

export default EditPage;