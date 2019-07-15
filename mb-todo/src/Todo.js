import React, { Component } from 'react';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.doParentRemove = this.doParentRemove.bind(this);
    }

    doParentRemove() {
        debugger;
        this.props.parentRemoveTodo(this.props.todoIndex);
    }

    render() {
        return (
            <div>
                <p>
                    <span className="badge badge-info">
                        {this.props.todoIndex + 1}
                    </span>
                    &nbsp;
                    <strong>
                        {this.props.details}
                    </strong>
                    <button className="btn btn-sm btn-danger float-right" onClick={this.doParentRemove}>
                        X
                    </button>
                </p>

            </div>
        );
    }

}

export default Todo;