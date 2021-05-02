import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Option from './Option'
import { deleteOptions, changeValue } from '../actions'

const Options = (props) => {
  const currentTotalValue = props.options
    .map((el) => el.currentValue)
    .reduce((a, b) => a + b, 0)
  useEffect(() => {
    if (
      props.options.length > 1 &&
      props.options.filter((e) => e.currentValue === 0).length === 1 &&
      !isNaN(currentTotalValue) &&
      currentTotalValue !== 0
    )
      props.changeValue(
        props.options.filter((e) => e.currentValue === 0)[0].id,
        currentTotalValue * -1
      )
  })
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">
          Các con bạc:
        </h3>
        <button className="button button--link" onClick={props.deleteOptions} style={{fontStyle: 'italic'}}>
          Xoá hếtttt!!!
        </button>
      </div>
      {props.options.length === 0 && (
        <p className="widget-message">
          Điền tên người anh em vào dưới kia
        </p>
      )}
      {props.options.map((option, index) => (
        <Option
          id={option.id}
          key={index}
          count={index + 1}
          currentValue={option.currentValue}
          optionText={option.id}
        />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { options: state.options }
}

export default connect(mapStateToProps, { deleteOptions, changeValue })(Options)
