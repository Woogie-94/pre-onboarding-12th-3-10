const QUERY_KEY_SEARCH_PREFIX = ["search"];

const QUERY_KEY = {
  search: (keyword: string) => [...QUERY_KEY_SEARCH_PREFIX, keyword],
};

export default QUERY_KEY;
