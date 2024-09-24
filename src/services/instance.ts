import ky from "ky";
import { getBearerToken } from "./utils";

const prefixUrl = `http://13.200.235.50:5412/v1`;

export const instance = ky.extend({
  prefixUrl,
  headers: {
    Accept: "application/json",
  },
  hooks: {
    beforeRequest: [
      (req: any) => {
        const token = getBearerToken();
        if (token) {
          req.headers.set("Authorization", `Bearer ${token}`);
        }
        console.log(req);

        return req;
      },
    ],
    beforeError: [
      async (error: any) => {
        const { response } = error;
        if (response) {
          const parsedError = await error.response.json();
          error.message = parsedError.message;
        }
        return error;
      },
    ],
  },
});
