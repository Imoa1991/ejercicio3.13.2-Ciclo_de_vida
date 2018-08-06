import React from 'react';

class Menu extends React.Component {

  render() {
    return (
      <ul>
        {this.props.menuItems.map(menuItem => {
          return (
            <li>
              {menuItem.label} {menuItem.link}
            </li>
          )
        }
        )}
      </ul>
      );
  }
}

export default Menu;
