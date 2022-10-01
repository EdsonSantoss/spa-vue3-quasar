import { api } from "src/boot/axios";

export default function studentApi(url) {
  const list = async () => {
    try {
      const { data } = await api.get(url);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return { list };
}
