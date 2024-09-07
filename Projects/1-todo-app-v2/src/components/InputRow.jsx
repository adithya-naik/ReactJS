import styles from "./InputRow.module.css"
function InputRow(){
  return <div class="container">
      <div class="row my-row">
        <div class="col-4"><input className={styles["input"]} type="text" placeholder="Enter Todo Here" /></div>
        <div class="col-4"><input className={styles["input"]} type="date" /></div>
        <div class="col-2"><button type="button" class="btn btn-success my-btn">Add</button></div>
      </div>
  </div>
}

export default InputRow;