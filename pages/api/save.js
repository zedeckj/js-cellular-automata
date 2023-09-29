import prisma from "../../lib/prisma";
  
export default async function handler(req,res) {
  if (req.method == "PUT") {
    const ruleObj = req.body;
    const upload = await prisma.rule.create({
      data: ruleObj
    }).catch((e) => {cosnole.log(e); false;});
    if (!upload) res.status(404).json({upload: false});
    else {
      const u2 = await prisma.name.create({
        data: {
          rulestr: ruleObj.rulestr,
          name: ruleObj.name
        }
      });
      res.status(200).json({upload: true});
    }
  }
} 
  
  
  
