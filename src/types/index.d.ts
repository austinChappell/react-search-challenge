interface UserListResponse {
  data: User[];
  limit: number;
  offset: number;
  page: number;
  total: number;
}

interface UserListUser {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  picture: string;
  title: string;
}
