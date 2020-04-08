const Connection = require("./connection");

const db = new Connection();

const saveRoute = async (origin, destination, price) => {
  if (origin && destination && price) {
    return new Promise((resolve, reject) => {
      try {
        db.all(
          "SELECT count(*) as count FROM routes where origin = ? and dest = ?",
          [origin, destination],
          (err, rows) => {
            if (!err) {
              const { count } = rows[0];
              if (count > 0) return resolve("value duplicated");
              db.run(
                "INSERT INTO routes(origin,dest,price,status)values(?,?,?,?)",
                [origin, destination, price, true],
                (err) => err || resolve("route saved")
              );
            }
          }
        );
      } catch (e) {
        reject(e);
      }
    });
  } else {
    return "some params could not be read";
  }
};

const getRoute = () => {};

module.exports = {
  saveRoute,
  getRoute,
};
