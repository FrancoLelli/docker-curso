let times = 0;

const syncDB = () => {
  times++;
  console.log("tick cada cinco segundos", times);
  return times;
};

module.exports = {
  syncDB,
};
