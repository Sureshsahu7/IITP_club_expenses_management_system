module.exports.Segregator = (data) => {
  const segregated = {
    General_Stuffs: 0,
    Advertisements: 0,
    Activities: 0,
    Remunerations: 0,
    Maintenance: 0,
    Transportation: 0,
    Fun_and_Food: 0,
  };
  let total = 0;

  data.forEach((item) => {
    segregated[item.category] += parseInt(item.amount.$numberDecimal);
    total += parseInt(item.amount.$numberDecimal);
  });
  return [segregated, total];
};
