import React from 'react'

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      <p className="header__subtitle">{props.subtitle}</p>
    </div>
  </div>
)

Header.defaultProps = {
  title: 'Hỗ trợ con bạc',
  subtitle: `“Cờ bạc người chơi là người thua, người không chơi không bao giờ thắng”`,
}
export default Header
