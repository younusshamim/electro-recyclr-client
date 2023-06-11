import React, { useState } from "react";
import { useQuery } from "react-query";
import { Flex, HStack, Heading, Input, Select, Stack } from "@chakra-ui/react";
import BorderedStack from "../../../components/BorderedStack/BorderedStack";
import TableBody from "./TableBody";
import SimpleTable from "../Shared/SimpleTable/SimpleTable";
import { BsSearch } from "react-icons/bs";
import { onGetUsers } from "../../../services/users-services";
import BeatLoading from "../../../components/Loader/BeatLoading";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";

const Users = () => {
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const theadData = ["User", "Email", "Mobile", "Status"];

  // use query  data
  const { data, isLoading, isRefetching, refetch, error } = useQuery(
    ["getUser", status],
    () => onGetUsers(status, search)
  );

  const users = data?.data;
  const loading = isLoading;

  // handle functions
  const handleSearch = (e) => {
    e.preventDefault();
    refetch();
  };

  const handleChange = (e) => {
    setStatus("");
    setSearch("");
    const { name, value } = e.target;
    if (name === "search") {
      setSearch(value);
    }
    if (name === "status") {
      setStatus(value);
    }
  };

  return (
    <BorderedStack>
      <HStack justify="space-between" mb="4">
        <Heading fontSize="20px">Users List</Heading>

        <HStack w="fit-content" gap="4px">
          <form onSubmit={handleSearch}>
            <Flex>
              <Input
                type="text"
                placeholder="Search Email .."
                size="sm"
                bg="gray.100"
                borderRadius="sm"
                w="150px"
                name="search"
                value={search}
                onChange={handleChange}
              />

              <HStack
                onClick={handleSearch}
                cursor="pointer"
                bg="gray.200"
                _hover={{ bg: "gray.300" }}
                _active={{ bg: "gray.200" }}
                transition="0.2s"
                w="30px"
                h="32px"
                justify="center"
              >
                <BsSearch color="gray.300" />
              </HStack>
            </Flex>
          </form>

          <Select
            size="sm"
            w="130px"
            bg="gray.100"
            borderRadius="sm"
            name="status"
            value={status}
            onChange={handleChange}
          >
            <option value="">All User</option>
            <option value="Verified">Verified User</option>
            <option value="Admin">Admin List</option>
          </Select>
        </HStack>
      </HStack>

      {loading ? (
        <BeatLoading />
      ) : error ? (
        <ErrorMessage error={error?.message} />
      ) : (
        <SimpleTable theadData={theadData}>
          <TableBody users={users} refetchUsers={refetch} />
        </SimpleTable>
      )}
    </BorderedStack>
  );
};

export default Users;
