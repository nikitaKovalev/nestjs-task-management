export function filterArrayBySearchValueHelper(
  arrayToFilter: any[],
  filterByParam: string,
  searchValue: string,
): any[] {
  return arrayToFilter
    .filter(element => element[filterByParam]
      .toLowerCase()
      .startsWith(searchValue.toLowerCase()));
}