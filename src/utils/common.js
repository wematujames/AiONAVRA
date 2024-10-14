export function handleSearch(term, setTerm, data, setData, filterKeys) {
  setSearchTerm(term);

  if (!term) return setFilteredRoutes(state.routes);

  const filtered = state.routes.filter((route) =>
    route.name.toLowerCase().includes(term.toLowerCase()),
  );

  setFilteredRoutes(filtered);
}
