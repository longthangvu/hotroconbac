import React from 'react'
import Emoji from './Emoji'
import Option from './Option'

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">
        <Emoji symbol="😎" /> Các con bạc:
      </h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
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
        handleDeleteOption={props.handleDeleteOption}
        onChangeValue={props.onChangeValue}
      />
    ))}
  </div>
)

export default Options
