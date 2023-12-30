export interface IBicycle {
  _id: string;
  ID: string;
  name: string;
  type: string;
  color: string;
  wheelSize: number;
  price: number;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface IBicycleData {
  ID: string;
  name: string;
  type: string;
  color: string;
  wheelSize: number;
  price: number;
  description: string;
}
