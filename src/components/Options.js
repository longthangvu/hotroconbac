import React from 'react'
import { connect } from 'react-redux'
import Emoji from './Emoji'
import Option from './Option'
import { deleteOptions } from '../actions'

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">
        <Emoji symbol="😎" /> Các con bạc:
      </h3>
      <button className="button button--link" onClick={props.deleteOptions}>
        Xoá hếtttt!!! <Emoji symbol="😱" />
      </button>
    </div>
    {props.options.length === 0 && (
      <p className="widget-message">
        Điền tên người anh em vào dưới kia <Emoji symbol="😏" />
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

const mapStateToProps = (state) => {
  return { options: state.options }
}

export default connect(mapStateToProps, { deleteOptions })(Options)
