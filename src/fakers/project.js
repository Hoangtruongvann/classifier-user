import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faInfo } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const data2 = {
  question:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

const dateFormat = (dateJson) => {
  const date = new Date(dateJson);

  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return dd + "/" + mm + "/" + yyyy;
};

// change this for access
const user_check = ["user1", "admin1", "ads"];

const columns = [
  {
    name: "#",
    selector: (row) => row.id,
    sortable: true,
    grow: 1,
  },
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
    grow: 2,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    grow: 2,
  },
  {
    name: "Type",
    selector: (row) => row.type,
    sortable: true,
    grow: 1,
  },
  {
    name: "Created User",
    selector: (row) => row.created_user,
    sortable: true,
    grow: 1,
  },
  {
    name: "Created Date",
    selector: (row) => row.created_date,
    sortable: true,
    format: (row, index) => dateFormat(row.created_date),
    grow: 3,
  },
  {
    name: "Last Update By",
    selector: (row) => row.last_update_by,
    sortable: true,
    grow: 1,
  },
  {
    name: " Last Change",
    selector: (row) => row.last_change,
    sortable: true,
    format: (row, index) => dateFormat(row.last_change),
    grow: 3,
  },
  {
    name: "Actions",
    button: true,
    grow: 1,
    cell: (record) => {

      // check if record.created_user is in user_check
      const check = user_check.includes(record.created_user);
      console.log(record.created_user);
      //const check = true;
      const onPress = () => {
        alert("You do not have permission to edit");
      };

      return check ? (
        <Link to={"/projects/" + record.projectId + "/operator"}>
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
        </Link>
      ) : (
        <button onClick={onPress}>
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
        </button>
      );
  

     

    },
  },
];

const data = [
  {
    id: 1,
    title: "Project A",
    status: "In progress",
    created_by: "John Doe",
    type: 1,
    created_user: "user1",
    created_date: "2023-07-04T12:42:07.396Z",
    last_update_by: "user1",
    last_change: "2023-07-04T12:42:07.396Z",
  }
];

export { columns, data, data2 };
