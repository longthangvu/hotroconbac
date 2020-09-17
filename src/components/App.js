import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'
import Emoji from './Emoji'

export default class App extends React.Component {
  state = {
    options: [],
    openingModal: undefined,
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }
  handleClearOpeningModal = () => {
    this.setState(() => ({ openingModal: undefined }))
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }))
  }
  handleAddOption = (option) => {
    if (option.id === '') {
      return `Điền tên người anh em vào đây~`
    } else if (this.state.options.map((el) => el.id).indexOf(option.id) > -1) {
      return `Người anh em này xuất hiện rồi~~`
    }
    this.setState((prevState) => ({ options: [...prevState.options, option] }))
  }
  onOpenModal = () => {
    this.setState(() => ({
      openingModal: true,
    }))
  }
  onChangeValue = (idToChange, operator) => {
    const changeValue = operator === '-' ? -1 : 1
    this.setState((prevState) => ({
      options: prevState.options.map((opt) => {
        if (opt.id === idToChange)
          return {
            id: idToChange,
            currentValue: opt.currentValue + changeValue,
            totalValue: opt.totalValue,
          }
        return opt
      }),
    }))
  }
  onEndRound = () => {
    this.setState((prevState) => ({
      options: prevState.options.map((opt) => ({
        id: opt.id,
        currentValue: 0,
        totalValue: [...opt.totalValue, opt.currentValue],
      })),
    }))
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    // if (prevState.options.length !== this.state.options.length) {
    //   const json = JSON.stringify(this.state.options)
    //   localStorage.setItem('options', json)
    // }
    const json = JSON.stringify(this.state.options)
    localStorage.setItem('options', json)
  }
  render() {
    const subtitle = `"Cờ bạc người chơi là người thua, người không chơi không bao giờ
    thắng"`
    const currentTotalValue = this.state.options
      .map((el) => el.currentValue)
      .reduce((a, b) => a + b, 0)
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            onOpenModal={this.onOpenModal}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
              onChangeValue={this.onChangeValue}
            />
            <button
              className="big-button end-round"
              disabled={currentTotalValue !== 0}
              onClick={this.onEndRound}
            >
              Chốt! <Emoji symbol="🤑" />
            </button>
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          options={this.state.options}
          openingModal={this.state.openingModal}
          handleClearOpeningModal={this.handleClearOpeningModal}
        />
      </div>
    )
  }
}
