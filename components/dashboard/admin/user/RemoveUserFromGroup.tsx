import { useState } from "react";
import { MinusIcon } from "@heroicons/react/24/solid";
import { Auth, API } from "aws-amplify";

export default function RemoveUserGroup({ userName }: { userName: string | undefined }) {
    const [selected, setSelected] = useState<string | undefined>(undefined);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value);
    };

    async function removeFromGroup() {
        try {
            if (userName && selected) {
                let apiName = "AdminQueries";
                let path = "/removeUserFromGroup";
                let myInit = {
                    body: {
                        username: userName,
                        groupname: selected,
                    },
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `${(await Auth.currentSession())
                            .getAccessToken()
                            .getJwtToken()}`,
                    },
                };
                return await API.post(apiName, path, myInit);
            }

        } catch (error) {
            console.log('REMOVEUSERFROMGROUPERROR', error);

        }

    }

    return (
        <div className="flex space-x-2">
            <select
                value={selected}
                onChange={handleChange}
                className="text-xs text-gray-400 bg-gray-800 rounded-md"
            >
                <option value="">Remove From Group</option>
                <option value="admin">admin</option>
                <option value="teacher">teacher</option>
            </select>
            <button
                type="submit"
                onClick={removeFromGroup}
                className="px-1 text-xs text-gray-200 transition ease-in-out bg-red-500 rounded-md shadow-md hover:bg-red-600"
            >
                <MinusIcon className="w-3 h-3" />
            </button>
        </div>
    );
}
