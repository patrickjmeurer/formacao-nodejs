async function addItem(wishList, item) {
  wishList.push(item);
}

async function showList(wishList) {
  console.log(`WhishList: ${wishList.map((w) => w.name).join(", ")}`);
}


export { addItem, showList };

