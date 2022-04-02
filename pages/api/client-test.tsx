// connection 핸들러인 함수를 export default 해주기만 하면 된다
// 이렇게 하면 이 경로로 접속했을 때 api가 뜬다

import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      email: "h2",
      name: "hi",
    },
  });
  res.json({
    ok: true,
  });
}
