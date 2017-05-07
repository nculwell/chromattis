import React from 'react';
import '../styles/App.css';
import { Game } from './Game';
import { store } from '../index';

export const App = ({state}) => {
  return(
    <div className="App">
      <div className="main-container">
        <div className='row'>
          <h1>Chromattis</h1>
          <div className='score-container'>
            <h3>MOVES:</h3> 
            <p>{state.moves}</p>
          </div>
          <div className='score-container'>
            <h3>BEST:</h3> 
            <p>{state.best_score}</p>
          </div>
        </div>
        <div className='row'>
          <p>Click tiles to make the whole puzzle <strong>one color.</strong></p>
          <a className='flat-button' onClick={ () => { store.dispatch({ type: 'SHUFFLE_COLORS' }) } }>New Game</a>
        </div>
        <ul>
          <li><a onClick={ () => { store.dispatch({ type: 'SOLVE_PUZZLE' }) } } style={{ display: 'none' }}>Solve</a></li>
        </ul>
        <Game tiles={state.board} game_in_progress={!state.hasWon()} />
        <p><strong>HOW TO PLAY:</strong> Left-click to advance tiles to the next color. Right-click to change them to their previous. There are 6 colors in total that appear in the order red, orange, yellow, green, blue, white.</p>
        <hr />
        <p>Created by <a href='https://captainstack.github.io/public-stackhouse' target='_'><strong>Andre Stackhouse</strong></a>. Source code hosted on <a href='https://github.com/CaptainStack/chromattis' target='_'><strong>GitHub</strong></a> under an open source MIT license.</p>
        {/* SOCIAL MEDIA BUTTONS */}
        <div className='row'>
          <a href="https://twitter.com/share?text=Are%20you%20smart%20enough%20to%20solve%20#Chromattis%3F&via=CaptainStack" className="twitter-share-button" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>
          <div className="fb-share-button" data-href="https://captainstack.github.io/chromattis/" data-layout="button_count" data-size="small" data-mobile-iframe="false"><a className="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcaptainstack.github.io%2Fchromattis%2F&amp;src=sdkpreparse">Share</a></div>
          <a href="//www.reddit.com/submit" onClick={() => { window.location = '//www.reddit.com/submit?url=' + encodeURIComponent(window.location); return false }}> <img src="//www.redditstatic.com/spreddit7.gif" alt="submit to reddit" /> </a>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="TFH72M6LQSGNG" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
