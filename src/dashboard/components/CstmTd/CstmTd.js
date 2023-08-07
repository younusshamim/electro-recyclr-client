import { Td } from "@chakra-ui/react";

const CstmTd = ({ children, ...rest }) => (
  <Td py="10px" px="10px" {...rest}>
    {children}
  </Td>
);

export default CstmTd;
