export default function filter(List, search, searchFields) {
  return List.filter((item) => {
    return searchFields.some((key) => {
      return item[key.toLowerCase()]
        ?.toLowerCase()
        .includes(search?.toLowerCase());
    });
  });
}
