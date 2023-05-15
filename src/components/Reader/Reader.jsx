import { Component } from 'react';
import { Article } from './Article';
import { Controls } from './Controls';
import { Progress } from './Progress';

const LS_KEY = 'readerItemIndex';

class Reader extends Component {
  state = { index: 0 };

  onChange = value => {
    this.setState(prevState => ({ index: prevState.index + value }));
  };

  componentDidMount() {
    const savedIndex = Number(localStorage.getItem(LS_KEY));
    if (savedIndex) {
      this.setState({ index: savedIndex });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = this.props.items.length;
    const currentArticle = items[index];
    return (
      <div>
        <Controls
          currentItem={index + 1}
          totalItems={totalItems}
          onChange={this.onChange}
        />
        <Progress currentItem={index + 1} totalItems={totalItems} />
        <Article title={currentArticle.title} article={currentArticle.text} />
      </div>
    );
  }
}

export default Reader;
