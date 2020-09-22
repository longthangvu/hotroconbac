import React from 'react'
export default class AddOption extends React.Component {
  state = {
    error: undefined,
  }
  onAddOption = (e) => {
    e.preventDefault()
    const error = this.props.onAddOption(e.target.elements.option.value.trim())
    this.setState(() => ({ error }))
    if (!error) {
      e.target.elements.option.value = ''
    }
  }
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.onAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">+</button>
        </form>
      </div>
    )
  }
}
