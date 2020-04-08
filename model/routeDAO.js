const Connection = require("./connection");

const db = new Connection();

const saveRoute = async (origin, destination, price) => {
  return new Promise((resolve, reject) => {
    try {
      db.all(
        "SELECT count(*) as count FROM routes where origin = ? and dest = ?",
        [origin, destination],
        (err, rows) => {
          if (!err) {
            let { count } = rows[0];
            if (count === 0) {
              db.run(
                "INSERT INTO routes(origin,dest,price,status)values(?,?,?,?)",
                [origin, destination, price, true],
                (err) => (!err ? resolve("Route saved") : "")
              );
            }
            else{
              return resolve('This value already exist in database!')
            }
          }
        }
      );
    } catch (e) {
      reject(e);
    }
  });
};

const getRoute = () => {};

module.exports = {
  saveRoute,
  getRoute,
};
