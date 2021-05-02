import React from 'react'
import { connect } from 'react-redux'
import { openModal } from '../actions'

const Action = (props) => (
  <div>
    <button
      className="big-button"
      disabled={!props.hasOptions}
      onClick={props.openModal}
    >
      Tính tiền!
    </button>
  </div>
)

export default connect(null, { openModal })(Action)
