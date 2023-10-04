import prisma from '../../../../lib/prisma';

export default async function handler(req,res) {
  console.log("PRINT REQ", req.query.term);
  const rule = await prisma.bSFKLRule.findUnique({
    where: { name: req.query.term }
  }).catch((e) => false);
  if (!rule) {
    res.status(404).json({rule: false});
  }
  else {
    console.log(rule);
    res.status(200).json({rule});
  }
}
