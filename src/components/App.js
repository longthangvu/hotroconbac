import React from 'react'
import { connect } from 'react-redux'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'
import { addOption, addOptions, endRound } from '../actions'

class App extends React.Component {
  onAddOption = (option) => {
    if (option === '') {
      return `Điền tên người anh em vào đây~`
    } else if (this.props.options.map((el) => el.id).indexOf(option) > -1) {
      return `Người anh em này xuất hiện rồi~~`
    }
    this.props.addOption(option)
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.props.addOptions(options)
      }
    } catch (e) {}
  }
  componentDidUpdate() {
    const json = JSON.stringify(this.props.options)
    localStorage.setItem('options', json)
  }

  render() {
    const currentTotalValue = this.props.options
      .map((el) => el.currentValue)
      .reduce((a, b) => a + b, 0)
    return (
      <div>
        <Header />
        <div className="container">
          <Action hasOptions={this.props.options.length > 0} />
          <div className="widget">
            <Options />
            <button
              className="big-button end-round"
              disabled={currentTotalValue !== 0}
              onClick={this.props.endRound}
            >
              Chốt!
            </button>
            <AddOption onAddOption={this.onAddOption} />
          </div>
        </div>
        <OptionModal />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.options,
  }
}

export default connect(mapStateToProps, { addOption, addOptions, endRound })(
  App
)
