export function authorsFormattedForDropdown(authors) {
  return authors.map(author => {
    return {
      value: author.id,
      fullName: author.firstName + ' ' + author.lastName
    };
  });
}
