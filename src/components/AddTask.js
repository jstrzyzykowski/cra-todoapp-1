import React from 'react';
import '../styles/AddTask.css';

class AddTask extends React.Component {

    state = {
        value: "",
        checked: false,
        date: new Date().toISOString().slice(0, 10),
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
        } else if (type === "date") {
            this.setState({
                date: e.target.value,
            })
        }
    }

    handleClick = () => {

        const { value, checked, date } = this.state;

        if (value.length > 2) {
            const result = this.props.add(value, checked, date);

            if (result) {
                this.setState({
                    value: "",
                    checked: false,
                    date: new Date().toISOString().slice(0, 10),
                })
            }
        } else {
            alert('Title is too short.');
        }
    }

    render() {

        const minDate = new Date().toISOString().slice(0, 10);
        let maxDate = minDate.slice(0, 4) * 1 + 1;
        maxDate += '-12-31';

        return (
            <div className="add-task" >
                <div>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title..."
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <div className="bottom">
                        <input
                            type="checkbox"
                            id="important"
                            name="important"
                            checked={this.state.checked}
                            onChange={this.handleChange}
                        />
                        <label className="label-important" htmlFor="important">Important</label>
                        <input
                            type="date"
                            id="date"
                            value={this.state.date}
                            min={minDate}
                            max={maxDate}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <button onClick={this.handleClick}>
                    <i className="fas fa-plus"></i>
                </button>
            </div >
        );
    }
}

export default AddTask;