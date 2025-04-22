import { atom } from "nanostores";

type SampleType = {
  id: string;
  name: string;
  email: string;
};

export const $sampleStores = atom<SampleType[]>([
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@mail.com",
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "janedoe@mail.com",
  },
  {
    id: "3",
    name: "John Smith",
    email: "johnsmith@mail.com",
  },
]);

export function addUser(user: SampleType) {
  $sampleStores.set([...$sampleStores.get(), user]);
}
