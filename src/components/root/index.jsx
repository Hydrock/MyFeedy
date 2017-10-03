import { h, Component } from 'preact';
import style from './style.scss'

export default class Root extends Component {
  render() {
    return (
      <div className={style.container}>
        test
      </div>
    );
  }
}