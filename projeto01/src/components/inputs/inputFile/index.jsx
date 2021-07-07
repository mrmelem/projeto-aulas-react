import React, {
  ChangeEvent,
  useRef,
  useEffect,
  useCallback,
  useState,
} from "react";

import { useField } from "@unform/core";

export default function ImageInput({ name, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback((e) => {
    const file = e.target.files?.[0];

    if (!file) {
      setPreview(null);
    }

    const previewURL = URL.createObjectURL(file);

    setPreview(previewURL);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "files[0]",
      clearValue(ref) {
        ref.value = "";
        setPreview(null);
      },
      setValue(value) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {preview && <img src={preview} alt="Preview" width="100" />}
      <input type="file" ref={inputRef} onChange={handlePreview} {...rest} />
    </>
  );
}
