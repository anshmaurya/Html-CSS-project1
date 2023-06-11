const items = {
    apple: 10,
    banana: 20,
    orange: 30,
  };
  const convertPrices = (item, price) => {
    return {
      name: item,
      priceInRupees: price * 80,
    };
  };
  const convertedItems = Object.entries(items).map(convertPrices);
  console.log(convertedItems);