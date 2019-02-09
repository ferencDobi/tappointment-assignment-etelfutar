import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBacon, faMugHot, faUtensils, faPizzaSlice, faIceCream, faGlassCheers 
} from '@fortawesome/free-solid-svg-icons';
import { selectCategory } from '../../actions/menuActions';

const categories = [
  { name: 'Starter', title: 'Előétel', icon: faBacon },
  { name: 'Soup', title: 'Leves', icon: faMugHot },
  { name: 'MainDish', title: 'Főétel', icon: faUtensils },
  { name: 'Pizza', title: 'Pizza', icon: faPizzaSlice },
  { name: 'Dessert', title: 'Desszert', icon: faIceCream },
  { name: 'Drink', title: 'Ital', icon: faGlassCheers }
];

const Categories = ({ selectCategory }) => (
  <nav className="categories">
    {categories.map((category, i) => {
      return (
        <button key={'category-' + i} onClick={() => selectCategory(category.name)}>
          <FontAwesomeIcon icon={category.icon} />
          {category.title}
        </button>
      );
    })}
  </nav>
);

const mapDispatchToProps = dispatch => {
  return {
    selectCategory: category => {
      dispatch(selectCategory(category));
    }
  };
};

export default connect(null, mapDispatchToProps)(Categories);