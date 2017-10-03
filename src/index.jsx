import { h, render } from 'preact';

import Root from './components/root/index.jsx'

const sfeed = (elementId, settingsObj) => {
  render(<Root/>, document.getElementById(elementId));
}

window.sfeed = sfeed;