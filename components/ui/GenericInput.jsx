import { forwardRef } from "react";

const GenericInput = forwardRef(
  (
    {
      placeholder,
      inputStyle,
      fullInputStyle,
      labelStyle,
      fullLabelStyle,
      isRequired,
      type,
      name,
      checked,
      onChange,
      value,
      containerStyle,
      labelLocation,
      accept,
      pattern,
    },
    ref
  ) => {
    return (
      <>
        <div className={`mb-6  ${containerStyle}`}>
          {(labelLocation === "first" || !labelLocation) && (
            <label
              htmlFor={name}
              className={
                fullLabelStyle
                  ? fullLabelStyle
                  : `block mb-2 text-sm font-medium text-gray-900 dark:text-white ${labelStyle}`
              }
            >
              {name}
            </label>
          )}
          <input
            onChange={onChange}
            {...(type === "radio" || type === "checkbox"
              ? { checked: checked }
              : "")}
            type={type}
            id={name}
            value={value}
            ref={ref}
            className={
              fullInputStyle
                ? fullInputStyle
                : `shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${inputStyle}`
            }
            placeholder={placeholder}
            required={isRequired}
            accept={accept}
            pattern={pattern}
          />
          {labelLocation === "last" && (
            <label
              htmlFor={name}
              className={
                fullLabelStyle
                  ? fullLabelStyle
                  : `block mb-2 text-sm font-medium text-gray-900 dark:text-white ${labelStyle}`
              }
            >
              {name}
            </label>
          )}
        </div>
      </>
    );
  }
);
export default GenericInput;
