import React from 'react'
import { connect } from 'react-redux'
import { incrementValue, decrementValue, changeValue } from '../actions'

const Option = (props) => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.optionText}
    </p>
    <div className="option__action">
      <input
        onChange={(e) => {
          if (props.currentValue !== 0)
            if (
              /^([+-]?[1-9]\d*|0|-)$/.test(e.target.value) &&
              Math.abs(e.target.value).toString().length < 3
            ) {
              props.changeValue(
                props.id,
                parseInt(e.target.value) ? parseInt(e.target.value) : '-'
              )
            }
          if (!e.target.value) props.changeValue(props.id, 0)
          else
            props.changeValue(
              props.id,
              parseInt(e.target.value) ? parseInt(e.target.value) : '-'
            )
        }}
        type="text"
        value={props.currentValue}
        style={{
          color:
            props.currentValue > 0
              ? '#86c232'
              : props.currentValue < 0
              ? '#c70000'
              : 'white',
        }}
      />
      <button
        className="button minus"
        onClick={() => {
          props.decrementValue(props.id)
        }}
      >
        -
      </button>
      <button className="button" onClick={() => props.incrementValue(props.id)}>
        +
      </button>
    </div>
  </div>
)

export default connect(null, { incrementValue, decrementValue, changeValue })(
  Option
)
