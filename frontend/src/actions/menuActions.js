import * as actions from './actionConstants';

const selectCategory = category => {
  return { type: actions.SELECT_CATEGORY, category };
};

export { selectCategory };
