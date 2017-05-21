let in_winning_state = 
  function() {
    for (let i = 1; i < this.board.length; i++) {
      if (this.board[i].current_color !== this.board[i - 1].current_color) {
        return false;
      }
    }
    return true;
  }

let current_level = 
  function() {
    return this.levels[this.current_level_index];
  }

let highest_unlocked_level = 
  function() {
    let highest_level = 0;
    for (let [index, level] of this.levels.entries()) {
      if (level.best_score !== 'N/A') {
        highest_level = index + 1;
      } else {
        break;
      }
    }
    return highest_level;
  }

let persistedState = localStorage.getItem('chromattis_saved_state');

// Rebuild the redux state by parsing the JSON string in localStorage
if (persistedState) {
  persistedState = JSON.parse(localStorage.getItem('chromattis_saved_state'));
  persistedState.current_level = current_level;
  persistedState.highest_unlocked_level = highest_unlocked_level;

  for (let level of persistedState.levels) {
    level.in_winning_state = in_winning_state;
  }
}

export const INITIAL_STATE = localStorage.getItem('chromattis_saved_state') ? persistedState : {
  levels: [{
    board: [{id: 0, will_change: false, current_color: Math.floor(Math.random() * 5 + 1), target_tiles: [0, 1, 3]}, 
            {id: 1, will_change: false, current_color: Math.floor(Math.random() * 5 + 1), target_tiles: [1, 3, 5]}, 
            {id: 2, will_change: false, current_color: Math.floor(Math.random() * 5 + 1), target_tiles: [1, 2, 5]},
            {id: 3, will_change: false, current_color: Math.floor(Math.random() * 5 + 1), target_tiles: [1, 3, 7]}, 
            {id: 4, will_change: false, current_color: Math.floor(Math.random() * 5 + 1), target_tiles: [1, 3, 5, 7]}, 
            {id: 5, will_change: false, current_color: Math.floor(Math.random() * 5 + 1), target_tiles: [2, 4, 4, 5, 8]},
            {id: 6, will_change: false, current_color: Math.floor(Math.random() * 5 + 1), target_tiles: [3, 6, 7]}, 
            {id: 7, will_change: false, current_color: Math.floor(Math.random() * 5 + 1), target_tiles: [6, 7, 8, 4]}, 
            {id: 8, will_change: false, current_color: Math.floor(Math.random() * 5 + 1), target_tiles: [5, 7, 8]}],
    moves: 0,
    best_score: 'N/A',
    in_winning_state: in_winning_state
  },
  {
    board: [{id: 0, will_change: false, current_color: Math.floor(Math.random() * 5 + 1), target_tiles: [0, 1, 3, 4]}, 
            {id: 1, will_change: false, current_color: Math.floor(Math.random() * 5 + 1), target_tiles: [1, 5]}, 
            {id: 2, will_change: false, current_color: Math.floor(Math.random() * 5 + 1), target_tiles: [1, 2, 4, 5]},
            {id: 3, will_change: false, current_color: Math.floor(Math.random() * 5 + 1), target_tiles: [3, 1]}, 
            {id: 4, will_change: false, current_color: Math.floor(Math.random() * 5 + 1), target_tiles: [4, 5]}, 
            {id: 5, will_change: false, current_color: Math.floor(Math.random() * 5 + 1), target_tiles: [5, 7]},
            {id: 6, will_change: false, current_color: Math.floor(Math.random() * 5 + 1), target_tiles: [3, 4, 6, 7]}, 
            {id: 7, will_change: false, current_color: Math.floor(Math.random() * 5 + 1), target_tiles: [3, 7]}, 
            {id: 8, will_change: false, current_color: Math.floor(Math.random() * 5 + 1), target_tiles: [4, 5, 7, 8]}],
    moves: 0,
    best_score: 'N/A',
    in_winning_state: in_winning_state
  }],
  current_level_index: 0,
  current_level: current_level,
  highest_unlocked_level: highest_unlocked_level
};
