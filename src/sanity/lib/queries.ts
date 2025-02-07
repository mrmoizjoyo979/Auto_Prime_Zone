export const GET_ALL_CARS = `
  *[_type == "car"]{
    _id,
    make,
    model,
    year,
    price,
    image {
      asset -> {
        _id,
        url
      }
    },
    stockStatus,
    description,
    shortdescription
  }
`;


export const SEARCH_CARS = `
  *[_type == "car" && (make match $query || model match $query)] {
    _id,
    make,
    model,
    year,
    price,
    image {
      asset -> {
        _id,
        url
      }
    },
    stockStatus,
    description,
    shortdescription
  }
`;

export const GET_CAR_BY_ID = `
  *[_type == "car" && _id == $id][0] {
    _id,
    make,
    model,
    year,
    price,
    image {
      asset -> {
        _id,
        url
      }
    },
    stockStatus,
    description,
    shortdescription
  }
`;
