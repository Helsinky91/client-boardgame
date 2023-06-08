import { GamesInterface } from "./games-interface";

export interface UserInterface {
  id: number;
  username: string;
  email: string;
  selfDescription: string;
  dateOfBirth: Date;
  profilePicUrl: string;
  address: {
    street: string;
    city: string;
  },
  games: GamesInterface[],
  favorites: GamesInterface[],
  wishlist: GamesInterface[]
  role: string;
  getAge(): number;
  password: string
}
