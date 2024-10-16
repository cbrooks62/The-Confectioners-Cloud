import React from 'react'

export const RecipeSearchBar = ({ setSearchTerm }) => {


  return (
    <div className="filter-bar">
        <input
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            type="text"
            placeholder="Search Recipes"
            className="reminder-search"
          />
    </div>
  )
}
