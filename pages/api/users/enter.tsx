// connection 핸들러인 함수를 export default 해주기만 하면 된다
// 이렇게 하면 이 경로로 접속했을 때 api가 뜬다

import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(401).end();
  }
  console.log(req.body.email);
  res.status(200).end();
}
