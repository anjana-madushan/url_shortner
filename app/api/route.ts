import { generateCode } from "../lib/generateCode";
import { find, save } from "../lib/store";

export async function POST(request: Request) {
  const { url } = await request.json();

  if (!url) {
    return Response.json({ error: 'URL is required' }, { status: 400 });
  }

  let code = generateCode()
  while (find(code)) {
    code = generateCode()
  }

  save(code, url);

  return Response.json({ code }, { status: 201 });

}