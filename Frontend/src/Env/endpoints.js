const endpoints = {
  ROOT: '/',
  CARS: {
    MAIN: '/cars',
    CATEGORY: '/cars/category/',
    MAKE: '/cars/make/',
    TOPRATED: '/cars/toprated'
  },
  CITIES: '/cities',
  BOOKINGS: {
    MAIN: '/bookings/',
    WPARAMS: '/bookings/?id='
  },
  REVIEWS: {
    MAIN: '/reviews',
    WPARAMS: '/reviews/'
  },
  USER: {
    MAIN: '/user',
    WPARAMS: '/user/'
  },
};

export default endpoints;
