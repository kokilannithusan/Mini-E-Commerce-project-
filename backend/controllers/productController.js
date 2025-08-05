exports.getProducts = (req, res, next) => {
  res.json({
    sucess: true,
    message: "Get products working!",
  });
};

exports.getSingleProduct = (req, res, next) => {
  res.json({
    sucess: true,
    message: "Get single product working!",
  });
};
