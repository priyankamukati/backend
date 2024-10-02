const asyncHandler = (childfunc) => {
  return async (req, res, next) => {
    try {
      await childfunc(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

export default asyncHandler;
