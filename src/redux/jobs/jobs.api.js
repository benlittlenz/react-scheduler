import { _get, buildURL } from '../../utils';

export const getAllActiveJobs = () => {
  let req = {
    url: buildURL(7),
    data: {
      filters: {
        match: 'and',
        rules: [
        ],
      },
      rows_per_page: 1000,
    },
  };

  return _get(req);
};
