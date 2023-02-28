import { Auth, API } from "aws-amplify";
import { useState, useEffect, useCallback } from "react";
import { listUsers } from "@/src/graphql/queries";
import ChangeUserGroup from "./ChangeUserGroup";
import RemoveUserGroup from "./RemoveUserFromGroup";
import { ListUsersQuery } from "@/types/amplifyCodegen/codegenTypes";
import { User } from "@/src/API";

const columns = [
    { header: "Full Name", accessor: "title", id: 1 },
    { header: "Email", accessor: "category", id: 2 },
    { header: "Number", accessor: "framework", id: 3 },
];

const UserTable = () => {
    const [users, setUsers] = useState<ListUsersQuery | null>(null);

    const fetchUsers = useCallback(async () => {
        try {
            const response = (await API.graphql({
                query: listUsers,
                variables: {

                }
            })) as { data: ListUsersQuery }
            console.log('UsersRes', response);

            setUsers(response.data)


        } catch (error) {
            console.log('listUsersError', error);

        }


    }, [])

    // const listUsers = useCallback(async () => {
    //     let nextToken;

    //     let apiName = "AdminQueries";
    //     let path = "/listUsers";
    //     let myInit = {
    //         queryStringParameters: {
    //             limit: 30,
    //             token: nextToken,
    //         },
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: `${(await Auth.currentSession())
    //                 .getAccessToken()
    //                 .getJwtToken()}`,
    //         },
    //     };
    //     const { NextToken, ...rest } = await API.get(apiName, path, myInit);
    //     nextToken = NextToken;
    //     setUsers(rest.Users);

    //     return rest;
    // }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);


    return (
        <div className="relative overflow-x-auto rounded-md shadow-md">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="tracking-wider">
                        {columns.map(column => (
                            <th scope="col" className="px-6 py-3 text-sm" key={column.header}>
                                {column.header}
                            </th>
                        ))}
                        <th scope="col" className="px-6 py-3 text-sm">
                            <span className="">Add To Group</span>
                        </th>
                        <th scope="col" className="px-6 py-3 text-sm">
                            <span className="">Remove From Group</span>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {users?.listUsers?.items.map(user => (
                        <tr key={user?.id} className="text-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600">
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>{user?.phone_number}</td>
                            <td className="px-6 py-4">
                                <ChangeUserGroup userName={user?.id} />
                            </td>
                            <td className="px-6 py-4">
                                <RemoveUserGroup userName={user?.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};
export default UserTable;
