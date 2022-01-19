export interface Users {
  gender: string;
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  login: {
    username: string;
    password: string;
  };
  picture: {
    thumbnail: string;
  };
}
