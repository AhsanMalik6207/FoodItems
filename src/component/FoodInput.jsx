import styles from "./FoodInput.module.css";
function FoodInput({ handleOn }) {

  return (
    <>
      <input
        type="text"
        placeholder="Enter Food Item here"
        className={styles.foodInput}
        // onChange={handleOn}
        onKeyDown={handleOn}
      />
    </>
  );
}
export default FoodInput;