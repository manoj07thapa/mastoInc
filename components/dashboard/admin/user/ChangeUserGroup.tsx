import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Auth, API } from "aws-amplify";

export default function ChangeUserGroup({ userName }: { userName: string | undefined }) {
    const [selected, setSelected] = useState<string | undefined>(undefined);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value);
    };

    async function addToGroup() {
        try {
            if (userName && selected) {
                let apiName = "AdminQueries";
                let path = "/addUserToGroup";
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
            console.log('ADDTOGRUPERROR', error);

        }

    }

    return (
        <div className="flex space-x-2">
            <select
                value={selected}
                onChange={handleChange}
                className="text-xs text-gray-400 bg-gray-800 rounded-md"
            >
                {" "}
                <option value="">Add to Group</option>
                <option value="admin">admin</option>
                <option value="teacher">teacher</option>
            </select>
            <button
                type="submit"
                onClick={addToGroup}
                className="px-1 text-xs text-gray-200 transition ease-in-out bg-green-500 rounded-md shadow-md hover:bg-green-600"
            >
                <PlusIcon className="w-3 h-3" />
            </button>
        </div>
    );
}
