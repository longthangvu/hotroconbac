import React from 'react'
import { connect } from 'react-redux'
import { openModal } from '../actions'
import Emoji from './Emoji'

const Action = (props) => (
  <div>
    <button
      className="big-button"
      disabled={!props.hasOptions}
      onClick={props.openModal}
    >
      Tính tiền! <Emoji symbol="💸💸💸" />
    </button>
  </div>
)

export default connect(null, { openModal })(Action)
