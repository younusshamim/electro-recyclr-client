const setFocusBorder = {
  variants: {
    outline: {
      field: {
        _focus: {
          borderSize: "1px",
          borderColor: "gray.300",
          boxShadow: "none",
        },
      },
    },
  },
};

const components = {
  Input: setFocusBorder,
  Select: setFocusBorder,
  Textarea: setFocusBorder,
};

export default components;
