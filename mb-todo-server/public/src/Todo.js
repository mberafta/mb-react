import React, { Component } from 'react';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.doParentRemove = this.doParentRemove.bind(this);
        this.detailsChange = this.detailsChange.bind(this);
    }

    doParentRemove() {
        debugger;
        this.props.parentRemoveTodo(this.props.todoIndex);
    }

    detailsChange(event) {
        debugger;
        this.props.parentDetailsChange(event, this.props.id);
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label><strong>Détails</strong></label>
                    <input className="form-control" type="text" onChange={this.detailsChange} value={this.props.details} />
                </div>
                <p>
                    <span className="badge badge-info">
                        {this.props.todoIndex + 1}
                    </span>
                    &nbsp; {this.props.details}
                    <button className="btn btn-sm btn-danger float-right" onClick={this.doParentRemove}>
                        X
                    </button>
                </p>

            </div>
        );
    }

}

export default Todo;