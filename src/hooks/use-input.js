import { useState } from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [isTouched, setisTouched] = useState(false);
  const isValid = validateValue(value);
  const hasError = !isValid && isTouched;

  const setValueHandler = (event) => {
    setValue(event.target.value);
  };

  const setIsBlur = () => {
    setisTouched(true);
  };

  const reset = () => {
    setisTouched(false);
    setValue("");
  };
  return { value, isValid, hasError, setValueHandler, setIsBlur, reset };
};
export default useInput;
