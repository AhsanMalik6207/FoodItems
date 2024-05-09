import Item from "./Item";
let FootItems = ({ items }) => {
  return (
    <ul class="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleBuyButton={() => console.log(`${item} beign bought `)}
        />
      ))}
    </ul>
  );
};
export default FootItems;