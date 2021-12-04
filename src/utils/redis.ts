import { redisClient as client } from "../server";

export const set = async (key: string, value: string) => {
  try {
    const data = await client.set(key, value);
    return data;
  } catch (err) {
    throw err;
  }
};

export const get = async (key: string) => {
  try {
    const data = await client.get(key);
    return data;
  } catch (err) {
    throw err;
  }
};

export const del = async (key: string) => {
  try {
    const data = await client.del(key);
    return data;
  } catch (err) {
    throw err;
  }
};
