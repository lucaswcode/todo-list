import type { ItemTask } from "../../App";

import styles from "./Item.module.css";
import { Trash2, CircleCheck } from "lucide-react";

interface Props {
  data: ItemTask;
  removeTask: (id: number) => void;
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void;
}

export function Item({ data, removeTask, toggleTaskStatus }: Props) {
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked });
  }

  function handleRemove() {
    removeTask(data.id);
  }

  const checkboxCheckedClassname = data.isChecked
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];
  const paragraphCheckedClassname = data.isChecked
    ? styles["paragraph-checked"]
    : "";

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleTaskToggle}>
          <input readOnly type="checkbox" checked={data.isChecked} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {data.isChecked && <CircleCheck size={12} />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {data.text}
          </p>
        </label>
      </div>

      <button onClick={handleRemove}>
        <Trash2 size={16} color="#808080" />
      </button>
    </div>
  );
}
