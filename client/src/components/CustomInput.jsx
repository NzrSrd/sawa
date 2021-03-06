import React, { Component } from 'react';

export default class CustomInput extends Component {
    render() {
        const { input: { value, onChange } } = this.props;
        return (

            <div>
                <label className="label"
                       htmlFor={this.props.id}>{this.props.label}
                </label>
                <br />
                <input
                    name={this.props.name}
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    value={value}
                    onChange={onChange}
                />
            </div>
        );
    }

}