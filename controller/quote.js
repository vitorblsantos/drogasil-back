const quoteDAO = require("../model/quoteDAO");

const quote = async (from, to) => {
  let response;
  from = from.toUpperCase();
  to = to.toUpperCase();
  const route = await quoteDAO.getQuote(from, to);
  const tmp = await quoteDAO.getDest(to);

  try {
    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i].id !== route.id) {
        const anotherWays = await quoteDAO.getDest(tmp[i].origin);
        for (let c = 0; c < anotherWays.length; c++) {
          if (anotherWays[c]) {
            const row = await quoteDAO.getQuote(anotherWays[c].dest, to);
            let tmpRoute = `${from},${anotherWays[c].dest},${to}`;
            let price = anotherWays[c].price + row.price;
            if (c > 0) {
              const tmpRow = await quoteDAO.getQuote(
                from,
                anotherWays[c].origin
              );
              tmpRoute = `${from}, ${tmpRow.dest}, ${anotherWays[c].dest}, ${to}`;
              price = tmpRow.price + anotherWays[c].price + row.price;
            }
            response = { route: tmpRoute, price };
          }
        }
      }
    }

    if (!response) {
      if (from && to && route.price)
        response = { route: `${from},${to}`, price: route.price };
    }
    return response;
  } catch (e) {
    return {err: "Error - value not found"};
  }
};

module.exports = quote;
