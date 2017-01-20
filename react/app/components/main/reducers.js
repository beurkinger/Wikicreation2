import {SHOW_MENU, HIDE_MENU} from '../menu/actionTypes';
import {SHOW_AUTHOR_PANEL, HIDE_AUTHOR_PANEL} from '../author/actionTypes';

const initMenusBackground = {
  isVisible : false
};
const menusBackgroundReducer = function(state = initMenusBackground, action) {
  if (action.type === SHOW_MENU || action.type === SHOW_AUTHOR_PANEL) {
      return Object.assign({}, state, { isVisible : true });
  } else if (action.type === HIDE_MENU || action.type === HIDE_AUTHOR_PANEL) {
      return Object.assign({}, state, { isVisible : false });
  } else {
      return state;
  }
};

module.exports = {
  menusBackground : menusBackgroundReducer
}
