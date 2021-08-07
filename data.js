export const fetcher = (url) => fetch(url).then((r) => r.json());
export const fetchDataACT = async (query) => {
  const res = await fetch(`/api/proxy`, {
    method: "POST",
    body: JSON.stringify({
      ...query,
    }),
  });

  return res.json();
};

export const generateFromOccupation = (occupation) => {
  switch (occupation) {
    case "student":
      return "โรงเรียน";
      break;
    case "police":
      return "ตำรวจ";
      break;
    case "doctor":
      return "โรงพยาบาล";
      break;
  }
};

export const query = (preference) => ({
  size: 20,
  query: {
    bool: {
      must: {
        match: {
          departmentName: generateFromOccupation(preference.occupation),
        },
      },
      filter: [
        {
          term: {
            province: preference.location,
          },
        },
        {
          range: {
            announceDate: {
              gte: "2020-01-01",
            },
          },
        },
      ],
    },
  },
});

export const queryByProject = (k) => ({
  size: 20,
  query: {
    bool: {
      must: {
        match: {
          projectName: k,
        },
      },
      filter: [
        {
          range: {
            announceDate: {
              gte: "2020-01-01",
            },
          },
        },
      ],
    },
  },
});

export const queryWinner = (winnerName, preference) => ({
  size: 30,
  query: {
    bool: {
      must: {
        match: {
          winnerName: winnerName,
        },
      },
      filter: [
        {
          term: {
            province: preference.location,
          },
        },
        {
          range: {
            announceDate: {
              gte: "2020-01-01",
            },
          },
        },
      ],
    },
  },
});
