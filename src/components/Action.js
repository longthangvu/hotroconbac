import React from 'react'
import Emoji from './Emoji'

const Action = (props) => (
  <div>
    <button
      className="big-button"
      disabled={!props.hasOptions}
      onClick={props.onOpenModal}
    >
      Tính tiền! <Emoji symbol="💸💸💸" />
    </button>
  </div>
)

export default Action
