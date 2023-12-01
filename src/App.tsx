import {
  Admin,
  Resource,
} from "react-admin";

import jsonServerProvider from 'ra-data-json-server';

import { PostList, PostEdit, PostCreate } from "./posts";

import { authProvider } from "./authProvider";
import { UserList } from "./users";
import Dashboard from "./Dashboard";

import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");


export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
    <Resource name="posts" list={PostList} />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);
