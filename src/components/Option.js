import React from 'react'

export default class Option extends React.Component {
  onChangeValue = (e) => {
    this.props.onChangeValue(this.props.id, e.target.innerHTML)
  }
  render() {
    return (
      <div className="option">
        <p className="option__text">
          {this.props.count}. {this.props.optionText}
        </p>
        {/* <button
          className="button button--link"
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}
        >
          remove
        </button> */}
        <div className="option__action">
          <div>
            <span
              style={{
                color:
                  this.props.currentValue > 0
                    ? '#86c232'
                    : this.props.currentValue < 0
                    ? '#c70000'
                    : 'white',
              }}
            >
              {this.props.currentValue}
            </span>
          </div>
          <button className="button minus" onClick={this.onChangeValue}>
            -
          </button>
          <button className="button" onClick={this.onChangeValue}>
            +
          </button>
        </div>
      </div>
    )
  }
}
