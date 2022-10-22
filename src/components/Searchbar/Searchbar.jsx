
export const SearchBar = ({ onSubmit}) => { 
  return (
<header class="searchbar">
  <form class="form" onSubmit={name, page = 1}>
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
  )
}


