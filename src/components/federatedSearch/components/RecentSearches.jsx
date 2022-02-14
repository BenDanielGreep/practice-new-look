import React from 'react';

// components import
import { ChevronRight } from '../../../assets/svg/SvgIndex';

const RecentSearches = React.memo(() => {
  const getSearches = localStorage.getItem('recentSearches');
  const cleanSearches = JSON.parse(getSearches);

  if (cleanSearches && cleanSearches.length !== 0) {
    return (
      <div className="recentSearches">
        <h3 className="recentSearches__title">Recent Searches</h3>
        <ul className="recentSearches__items">
          {cleanSearches
            .reverse()
            .splice(0, 3)
            .map((search, index) => {
              return (
                <li onClick={(e) => {}} key={index}>
                  <ChevronRight />
                  <p>{search}</p>
                </li>
              );
            })}
        </ul>
      </div>
    );
  } else {
    return '';
  }
});

export default RecentSearches;