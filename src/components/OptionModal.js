import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { closeModal } from '../actions'

class OptionModal extends React.Component {
  componentDidMount = () => {
    Modal.setAppElement('body')
  }
  render() {
    return (
      <Modal
        isOpen={!!this.props.openingModal}
        contentLabel="Show Results"
        onRequestClose={this.props.closeModal}
        closeTimeoutMS={200}
        className="modal"
      >
        <h3 className="modal__title">Tổng kết</h3>
        <div className="modal__body">
          {this.props.options.map((opt, index) => (
            <div className="option modal-child" key={index}>
              <p className="option__text">{opt.id}</p>
              <div className="option__action">
                <div
                  style={{
                    color:
                      opt.totalValue.reduce((a, b) => a + b, 0) > 0
                        ? '#86c232'
                        : opt.totalValue.reduce((a, b) => a + b, 0) < 0
                        ? '#c70000'
                        : 'white',
                    fontFamily: ['Zen Dots', 
                    'cursive']
                  }}
                >
                  <span>{opt.totalValue.reduce((a, b) => a + b, 0)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="button" onClick={this.props.closeModal}>
          Okay
        </button>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return { options: state.options, openingModal: state.openingModal }
}

export default connect(mapStateToProps, { closeModal })(OptionModal)
