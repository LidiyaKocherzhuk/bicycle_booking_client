const baseURL: string = "http://localhost:5003";

const bicycle: string = `${baseURL}/bicycle`;

const urls = {
  base: bicycle,
  byId: (id: string): string => `${bicycle}/${id}`,
};

export { urls, baseURL };
