import { Stack, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

const SimpleTable = ({ theadData, children, ...rest }) => {
  return (
    <Stack {...rest}>
      <Table variant="simple" className="SimpleTable">
        <Thead>
          <Tr>
            {theadData.map((el, i) => (
              <Th key={el + i}>{el}</Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>{children}</Tbody>
      </Table>
    </Stack>
  );
};

export default SimpleTable;
