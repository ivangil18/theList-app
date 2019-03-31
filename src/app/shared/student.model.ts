export interface Student {
  id: String;
  name: String;
  lastName: String;
  group: String;
  major: String;
  city: String;
  country: String;
  email: String;
  avatar: {color: String, initials: String};
  presents: number;
  absenses: number;
}

