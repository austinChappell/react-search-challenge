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

interface UserFullProfile {
  dateOfBirth: string;
  email: string;
  firstName: string;
  gender: string;
  id: string;
  lastName: string;
  location: Location;
  phone: string;
  picture: string;
  registerDate: string;
  title: string;
}

interface Location {
  city: string;
  country: string;
  state: string;
  street: string;
  timezone: string;
}
