import prisma from '../../lib/prisma';

export default async function handler(req,res) {
  console.log("PRINT REQ RULESTR", req.body);
  const name = await prisma.name.findUnique({
    where: { rulestr: req.body }
  }).catch((e) => {console.log(e); false;});
  if (!name) {
    console.log("not found");
    res.status(404).json({rule: false});
  }
  else {
    res.status(200).json({name: name.name});
  }
}
