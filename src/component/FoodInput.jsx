import styles from "./FoodInput.module.css";
function FoodInput() {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Food Item here"
        className={styles.foodInput}
      />
    </>
  );
}
export default FoodInput;