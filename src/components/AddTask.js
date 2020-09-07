import React from 'react';

class AddTask extends React.Component {

    state = {
        value: "",
        checked: false,
    }

    handleChange = e => {
        const type = e.target.type;

        if (type === "text") {
            this.setState({
                value: e.target.value,
            })
        } else if (type === "checkbox") {
            this.setState(prevState => ({
                checked: !prevState.checked,
            }))
        }

    }

    handleClick = () => {

        const { value, checked } = this.state;

        if (value.length > 2) {
            const result = this.props.add(value, checked);

            if (result) {
                this.setState({
                    value: "",
                    checked: false,
                })
            }
        } else {
            alert('Title is too short.');
        }
    }

    render() {
        return (
            <div className="add-task" >
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Task title..."
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <input
                    type="checkbox"
                    id="priority"
                    name="priority"
                    checked={this.state.checked}
                    onChange={this.handleChange}
                />
                <label htmlFor="priority">Priority</label>
                <button onClick={this.handleClick}>Add</button>
            </div >
        );
    }
}

export default AddTask;