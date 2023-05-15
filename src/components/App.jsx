import Counter from './Counter/';
import Dropdown from './Dropdown/';
import 'index.css';
import { Component } from 'react';
import TodoList from './TodoList';
import initialTodos from '../todos.json';
import { LoginForm } from './LoginForm';
import { GlobalStyle } from './GlobalStyle';
import { ProductReviewForm } from './ProductReviewForm/ProductReviewForm';

import ColorPicker from './ColorPicker/';
import Reader from './Reader/Reader';
import publications from '../publications.json'


// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      // фильтруем елементы по айди. Которые не совпадают мы их берем. Исключаем тот который совпадает
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <GlobalStyle />
        <Reader items={ publications} />
        <ProductReviewForm/>
        {/* <LoginForm /> */}
        {/* <h1>State</h1> */}
      {/* <Counter /> */}
      {/* <Dropdown /> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <div>
          <p>Total Todos: {todos.length}</p>
          <p>
            Executed Todos:{' '}
            {todos.reduce(
              (acc, todo) => (todo.completed ? (acc += 1) : acc),
              0
            )}
          </p>
        </div> */}
        {/* <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
      </>
    );
  }
}

// const App = () => {
//   return (
//     <>
//       {/* <h1>State</h1>
//       <Counter />
//       <Dropdown />
//       <ColorPicker options={colorPickerOptions} /> */}

//       <TodoList/>
//     </>
//   );
// };

