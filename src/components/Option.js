import React from 'react'
import { connect } from 'react-redux'
import { incrementValue, decrementValue } from '../actions'

const Option = (props) => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.optionText}
    </p>
    <div className="option__action">
      <div>
        <span
          style={{
            color:
              props.currentValue > 0
                ? '#86c232'
                : props.currentValue < 0
                ? '#c70000'
                : 'white',
          }}
        >
          {props.currentValue}
        </span>
      </div>
      <button
        className="button minus"
        onClick={() => props.decrementValue(props.id)}
      >
        -
      </button>
      <button className="button" onClick={() => props.incrementValue(props.id)}>
        +
      </button>
    </div>
  </div>
)

export default connect(null, { incrementValue, decrementValue })(Option)
