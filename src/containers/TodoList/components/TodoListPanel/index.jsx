import React, { PureComponent } from 'react';
import './style.css';
import PropTypes from 'prop-types';

class TodoListPanel extends PureComponent {
  static propTypes = {
    list: PropTypes.object,
    handleDone: PropTypes.func,
  }

  render() {
    const {
      list,
      handleDone
    } = this.props;

    return (
      <ul className="TodoListList">
        {list.map((task, index) => (
          <li key={ index }
            className={ task.isDone ? 'done' : 'notdone' }
            onDoubleClick={ handleDone }
            data-value={ task.id }
          >
            {task.description}
          </li>
        ))
        }
      </ul>
    );
  }
}

export default TodoListPanel;