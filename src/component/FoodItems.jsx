import Item from "./Item";
let FootItems = ({ items }) => {
  return (
    <ul class="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
        />
      ))}
    </ul>
  );
};
export default FootItems;