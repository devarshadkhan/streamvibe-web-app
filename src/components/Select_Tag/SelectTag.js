import React from "react";
import Form from "react-bootstrap/Form";
import styles from "./SelectTag.module.css";
import { capitalizeFirstLetter } from "@/utils/functions/ExpressionFunction";
const SelectTag = ({ value, onChangeHandle, Optiondata }) => {
  return (
    <>
      <div className={styles.SelectTagCss}>
        <Form.Select
          aria-label="Default select example"
          value={value}
          onChange={onChangeHandle}
        >
          <option>Open this select menu</option>
          {Optiondata?.map((item) => {
            return (
              <>
                <option value={item}>{capitalizeFirstLetter(item)}</option>
              </>
            );
          })}
        </Form.Select>
      </div>
    </>
  );
};

export default SelectTag;
