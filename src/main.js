import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
	<p>Before exiting the game, Wang noticed the three flying stars in the sky. Revolving closely around each other, they seemed to perform a strange dance against the abyss of space.</p>
	- Cixin Lu, <i>The Three-Body Problem</i>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
