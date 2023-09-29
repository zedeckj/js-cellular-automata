
const banned = [
  /n[1i]+[9g]+[9g]+[3e]+r/,
  /f[4a]+[9g+[9g]+[o0]+t/,
  /f[u]+[c]+k/,
  /b[1i]+t+c+h/,
  /c[u]+n+t/,
  /k[1i]+k+[3e]/,
  /sh+[1i]+t/,
  /\bass+\b/,
  /\bcrap\b/,
  /\bb[o0][o0]+b/ 
  
];


function isCleanLanguage(name) {
  for (let i = 0; i < banned.length; i++) {
    if (banned[i].test(name)) return false;
  }
  return true;
}

export default isCleanLanguage;
