import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const empty = {name: "0", map: [[0,0,0],[0,0],[0,0,0]]};

const full = {name: "8", map: [[1,1,1],[1,1],[1,1,1]]}; 

const c1 = {name: "c1", map: [[1,0,0],
           [0,0],
           [0,0,0]]};

const c2 = {name: "c2", map: [[1,0,1],
           [0,0],
           [0,0,0]]};

const c3 = {name: "c3", map: [[1,0,1],
           [0,0],
           [0,0,1]]};

const c4 = {name: "c4", map: [[1,0,1],
            [0,0],
            [1,0,1]]};
const c5 = {name: "c5", map: [[0,1,0],
            [1,1],
            [1,1,0]]};
const c6 = {name: "c6", map: [[0,1,0],
            [1,1],
            [1,1,1]]};
const c7 = {name: "c7", map: [[0,1,1],
            [1,1],
            [1,1,1]]};

const e1 = {name: "e1", map: [[0,1,0],
            [0,0],
            [0,0,0]]};

const e2 = {name: "e2", map: [[0,1,0],
            [1,0],
            [0,0,0]]};

const e3 = {name: "e3", map: [[0,1,0],
            [1,1],
            [0,0,0]]};

const e4 = {name: "e4", map: [[0,1,0],
            [1,1],
            [0,1,0]]};

const e5 = {name: "e5", map: [[1,0,1],
            [0,0],
            [1,1,1]]};

const e6 = {name: "e6", map: [[1,0,1],
            [0,1],
            [1,1,1]]};
const e7 = {name: "e7", map: [[1,0,1],
            [1,1],
            [1,1,1]]};

const k2 = {name: "k2", map: [[0,1,0],
            [0,0],
            [0,0,1]]};

const k3 = {name: "k3", map: [[0,1,0],
            [1,0],
            [0,0,1]]};

const k4 = {name: "k4", map: [[0,1,1],
            [1,0],
            [0,0,1]]};         

const k5 = {name: "k5", map: [[1,0,1],
            [0,1],
            [1,1,0]]};

const k6 = {name: "k6", map: [[1,0,1],
            [1,1],
            [1,1,0]]};

const a2 = {name: "a2", map: [[1,1,0],
            [0,0],
            [0,0,0]]};

const a3 = {name: "a3", map: [[1,1,0],
            [1,0],
            [0,0,0]]};

const a4 = {name: "a4", map: [[1,0,0],
            [1,0],
            [1,1,0]]};

const a5 = {name: "a5", map: [[0,0,1],
            [0,1],
            [1,1,1]]};

const a6 = {name: "a6", map: [[0,0,1],
            [0,1],
            [1,1,1]]};

const i2 = {name: "i2", map: [[0,1,0],
            [0,0],
            [0,1,0]]};

const i3 = {name: "i3", map: [[1,0,0],
            [1,0],
            [1,0,0]]};

const i4 = {name: "i4", map: [[1,0,1],
            [1,1],
            [0,0,0]]};

const i5 = {name: "i5", map: [[0,1,1],
            [0,1],
            [0,1,1]]};

const i6 = {name: "i6", map: [[1,0,1],
            [1,1],
            [1,0,1]]};

const n2 = {name: "n2", map: [[1,0,0],
            [0,0],
            [0,0,1]]};

const n3 = {name: "n3", map: [[1,0,1],
            [1,0],
            [0,0,0]]};

const n4 = {name: "n4", map: [[1,0,0],
            [1,0],
            [1,0,1]]};

const n5 = {name: "n5", map: [[0,1,0],
            [0,1],
            [1,1,1]]};

const n6 = {name: "n6", map: [[0,1,1],
            [1,1],
            [1,1,0]]};

const y3 = {name: "y3", map: [[1,0,1],
            [0,0],
            [0,1,0]]};

const y4 = {name: "y4", map: [[1,0,1],
            [0,0],
            [1,1,0]]};

const y5 = {name: "y5", map: [[0,1,0],
            [1,1],
            [1,0,1]]};

const q3 = {name: "q3", map: [[1,0,0],
            [1,0],
            [0,0,1]]};

const q4 = {name: "q4", map: [[1,1,0],
            [1,0],
            [0,0,1]]};

const q5 = {name: "q5", map: [[0,1,1],
            [0,1],
            [1,1,0]]};

const j3 = {name: "j3", map: [[0,0,1],
            [0,1],
            [0,1,0]]};

const j4 = {name: "j4", map: [[0,0,1],
            [1,1],
            [0,1,0]]};

const j5 = {name: "j5", map: [[1,1,0],
            [1,0],
            [1,0,1]]};

const r3 = {name: "r3", map: [[0,1,1],
            [0,0],
            [0,1,0]]};

const r4 = {name: "r4", map: [[0,1,1],
            [0,1],
            [0,1,0]]};

const r5 = {name: "r5", map: [[1,0,0],
            [1,1],
            [1,0,1]]};

const t4 = {name: "t4", map: [[1,1,1],
            [0,0],
            [0,1,0]]};

const w4 = {name: "w4", map: [[1,0,0],
            [1,0],
            [0,1,1]]};

const z4 = {name: "z4", map: [[1,1,0],
            [0,0],
            [0,1,1]]};


const hensel = [c1,c2,c3,c4,c5,c6,c7,e1,e2,e3,e4,e5,e6,e7,k2,k3,k4,k5,k6,
                a2,a3,a4,a5,a6,i2,i3,i4,i5,i6,n2,n3,n4,n5,n6,y3,y4,y5,q3,q4,
                q5,j3,j4,j5,r3,r4,r5,t4,w4,z4];

function getMatching(set,i,j,state) {
   let out = [];
   for (let n = 0; n < set.length; n++) {
      if (i == 0) {
        //console.log(set[n].map[1][j == 1 ? 1 : 0], state);
        if (set[n].map[1][j == 1 ? 1 : 0] == (state == 1 ? 1 : 0)) {
          out.push(set[n]);
        }
      }
      else {
        //console.log(set[n].map[i+1][j+1], state);
        if (set[n].map[i + 1][j + 1] == (state == 1 ? 1 : 0)) {
          out.push(set[n]);
        }
      }
   }
  return out;
}

function vflip(name, map) {
  let vflip = {name, map: [hensel[n].map[2], hensel[n].map[1], hensel[n].map[0]]};
  return vflip;
}

function hflip(name, map) {
  let hflip  = {name, map: [[map[0][2], map[0][1], map[0][0]], [map[1][1], map[1][0]], [map[2][2], map[2][1], map[2][0]]]};
  return hflip;
} 

function deg90(name, map) {
  let deg90  = {name, map: [[map[2][0], map[1][0], map[0][0]], [map[2][1], map[0][1]], [map[2][2], map[1][1], map[0][2]]]};
  return deg90;
}

function deg180(name, map) {
  let deg180 = {name, map: [[map[2][2], map[2][1], map[2][0]], [map[1][1], map[1][0]], [map[0][2], map[0][1], map[0][0]]]};
  return deg180;
}

function deg270(name, map) {
  let deg270 = {name, map: [[map[0][2], map[1][1], map[2][2]], [map[0][1], map[2][1]], [map[0][0], map[1][0], map[2][0]]]};
  return deg270;
}

function maybePush(array, pattern) {
  let contains = false;
  const map = pattern.map;
 // console.log(array.length, pattern.name);
  for (let i = 0; i < array.length; i++) {
    const cmp = array[i].map;
    if (cmp[0][0] == map[0][0] && 
        cmp[0][1] == map[0][1] &&
        cmp[0][2] == map[0][2] &&
        cmp[1][0] == map[1][0] &&
        cmp[1][1] == map[1][1] &&
        cmp[2][0] == map[2][0] &&
        cmp[2][1] == map[2][1] &&
        cmp[2][2] == map[2][2]) {
      return array;
    }
  }
  return array.concat([pattern]);
}

function makeAllHensel() {
  let out = hensel;
  for (let n = 0; n < hensel.length; n++) {
    const name = hensel[n].name;
    const map = hensel[n].map;
    let group = [hensel[n]];
    const hf = hflip(name,map);
    group = maybePush(group, hf);
    group = maybePush(group, deg90(name, map));
    group = maybePush(group, deg180(name, map));
    group = maybePush(group, deg270(name, map));
    group = maybePush(group, deg90(name, hf.map));
    group = maybePush(group, deg180(name, hf.map));
    group = maybePush(group, deg270(name, hf.map));
    out = out.concat(group);
  }
  out.push(empty);
  out.push(full);
  return out;
}

const allhensel = makeAllHensel();

function isNumber(char) {
  return char >= '0' && char <= '9';
}



function validateTerm(term) {
  let good = {valid: true};
  let dash = false;
  if (term[0] == 'B' || term[0] == 'S') {
    let last = '0' - 1;
    let letters = false;
    let dash = false;
    for (let i = 1; i < term.length; i++) {
      if (!letters && !dash && term[i] == '-') {
        dash = true;
      }
      else if (term[i] >= 'a' && term[i] <= 'z') {
        dash = false
        letters = true;
        let ok = [];
        if (last == '1' || last == '7') {
          ok = ['c','e'];
        }
        else if (last == '2' || last == '6') {
          ok = ['c','e','a','k','i','n'];
        }
        else if (last == '3' || last == '5') {
          ok = ['c','e','a','k','i','n','y','q','j','r'];
        }
        else if (last == '4') {
          ok = ['t','w','z'];
        }
      	if (!ok.includes(term[i])) {
        	console.log(ok, term[i]);
          return {valid: false, msg: term[i] + " is not a valid hensel notation symbol", index: [i,i+1]};
        }
      }
      else if (!isNumber(term[i]) || last >= term[i] || dash) {
        return {valid: false, msg: term[0] + " term expects only ascending digits (example: " + term[0] + "23)", index: [i,i+1]};
        
      }
      else {
        if (dash) {
          return {false: false, msg: term[i] + " is unbound to any pattern specifiers (example: 2-a)", index: [i-1, i]};
        }
        letters = false;
        last = term[i];
      }
    }
    return dash ? {false: false, msg: term[i] + " is unbound to any pattern specifiers (example: 2-a)", index: [i-1, i]} : good;
  }
  else if (term[0] == 'G') {
    if (term.length != 2 || !isNumber(term[1])) {
      return {valid: false, msg: "G term expects a single digit (example: G4)", index: [2, term.length]};
    }
    else return good;
  }
}

/*
function validateTerm(term) {
  if (term[0] == 'B' || term[0] == 'S') {
    let last = '/';
    for (let i = 1; i < term.length; i++) {
      if (term[i] >= '0' && term[i] <= '9' && last < term[i]) {
        last = term[i];
      }
      else return false;
    }
    return true;
  }
  else if (term[0] == 'G') {
    return term.length == 2 && term[1] >= '0' && term[1] <= '9';
  }
  else if (term[0] == '(' && term[1] == ')') {
    return true;
  } 
  else return false; 
}
*/
function validateRule(terms) {
  
  for (let i = 0; i < terms.length; i++) {
    const tv = validateTerm(terms[i]);
    if (!tv.valid) {
      return {valid: false, index: i, range: tv.index, msg: tv.msg};
    }
  }
  return {valid: true};
   
}

function sortedIncludes(array, value) {
  if (!array || array.length == 0 || array[0].neighbors > value || array[array.length-1].neighbors < value) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i].neighbors == value) return array[i];
  }
  return false;
}

function toRuleString(terms) {
  if (terms.length == 0) return "";
  let str = terms[0];
  for (let i = 1; i < terms.length; i++) {
    str = str + "/" + terms[i];
  }
  return str;
}

function getNegation(obj) {
  const neighbors = obj.neighbors;
  const patterns = obj.pattern;
  let all = [];
  if (neighbors == 1 || neighbors == 7) {
    all = ['c','e'];
  }
  else if (neighbors == 2 || neighbors == 6) {
    all = ['c','e','a','k','i','n'];
  }
  else if (neighbors == 3 || neighbors == 5) {
    all = ['c','e','a','k','i','n','y','q','j','r'];
  }
  else if (neighbors == 4) {
   all = ['t','w','z'];
  }
  let neg = [];
  for (let i = 0; i < all.length; i++) {
    if (!patterns.includes(all[i])) neg.push(all[i]);
  }
  console.log("negation of ", patterns, neighbors, neg);
  return {pattern: neg, neighbors}; 
}

function toRuleObj(terms) {
  let transitions = {
    born: [],
    survive: [],
    generations: 2
  };
  for (let i = 0; i < terms.length; i++) {
    const tchar = terms[i][0];
    let last = ' ';
    let dash = false;
    for (let j = 1; j < terms[i].length; j++) {
      if (tchar == 'B') {
        const l = transitions.born.length-1;
        if (terms[i][j] >= 'a' && terms[i][j] <= 'z') {
          //transitions.born.push({pattern: terms[i][j], neighbors: last - '0'});
          if (transitions.born[l].pattern == false) {
            transitions.born[l].pattern = [terms[i][j]];
          }
          else transitions.born[l].pattern.push(terms[i][j]);
        }
        else if (terms[i][j] == '-') {
          dash = true;
        }
        else {
          if (dash) {
            transitions.born[l] = getNegation(transitions.born[l]);
          }
          dash = false;
          last = terms[i][j];
          transitions.born.push({pattern: false, neighbors: terms[i][j] - '0'});
        }
        if (dash && j == terms[l].length - 1) {
          transitions.born[l] = getNegation(transitions.born[l]);
        }
      }
      else if (tchar == 'S') {
        const l = transitions.survive.length-1;
        if (terms[i][j] >= 'a' && terms[i][j] <= 'z') {
          if (transitions.survive[l].pattern == false) {
            transitions.survive[l].pattern = [terms[i][j]];
          }
          else transitions.survive[l].pattern.push(terms[i][j]);
        }
        else if (terms[i][j] == '-') {
          dash = true;
        }
        else {
          dash = false;
          last = terms[i][j];  
          transitions.survive.push({pattern: false, neighbors: terms[i][j] - '0'});
        }
        if (dash && j == terms[l].length - 1) {
          transitions.born[l] = getNegation(transitions.born[l]);
        }
 
      }
      else if (tchar == 'G') {
        transitions.generations = terms[i][j] - '0';
      }
    }
  }
  console.log("rule",transitions);
  return transitions;
}


function makeGrid(length, height) {
  const cellGrid = Array.from({length: height});
  return cellGrid.map(() => Array.from({length: length}).fill(0));

}

function makeGridPC(length, height) {
  const cellGrid = Array.from({length: height});
  for (let i = 0; i < height; i++) {
    cellGrid[i] = {activejs: [], row: Array.from({length}), minJ: length, maxJ: 0};
    for (let j = 0; j < length; j++) {
      cellGrid[i].row[j] = {state: 0, neighbors: 0};
    }
  }
  return cellGrid;
}

function makeGridBit(length, height) {
  const cellGrid = Array.from({length: height});
  for (let i = 0; i < height; i++) {
    cellGrid[i] = Array.from({length});
    for (let j = 0; j < length; j++) {
      cellGrid[i][j] = 0;
    }
  }
  return cellGrid;
}

function copyGridPC(cellGrid) {
  const newGrid = Array.from({length: cellGrid.length});
  for (let i = 0; i < newGrid.length; i++) {
    newGrid[i] = {activejs: [], row: Array.from({length: cellGrid[0].row.length}), minJ: cellGrid[i].minJ, maxJ: cellGrid[i].maxJ};
    for (let j = 0; j < newGrid[0].row.length; j++) {
      newGrid[i].row[j] = {state: cellGrid[i].row[j].state, neighbors: cellGrid[i].row[j].neighbors};
    }
  }
  return newGrid;
}

function copyGridPack(cellGrid) {
  const newGrid = Array.from({length: cellGrid.length});
  for (let i = 0; i < cellGrid.length; i++) {
    cellGrid[i] = Array.from({length: cellGrid[0].length});
    for (let j = 0; j < cellGrid[0].length; j++) {
      newGrid[i][j] = cellGrid[i][j];
    }
  }
  return newGrid;
}

const moore = [
  [-1,-1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0,  1],
  [1, -1],
  [1,  0],
  [1,  1]
];

function randomizeGrid(cellGrid) {
  for (let i = cellGrid.length/4; i < cellGrid.length * 3/4; i++) {
    for (let j = cellGrid[0].length/4; j < cellGrid[0].length * 3/4; j++) {
      cellGrid[i].row[j]  = Math.random() < 0.6 ? 0 : 1;
    }
  }
  return cellGrid;
}

function randomizeGridPC(cellGrid) {
  for (let i = Math.floor(cellGrid.length/4); i < cellGrid.length * 3/4; i++) {
    for (let j = Math.floor(cellGrid[0].row.length/4); j < cellGrid[0].row.length * 3/4; j++) {
      cellGrid[i].row[j].state  = Math.random() < 0.6 ? 0 : 1;
      if (cellGrid[i].row[j].state) {
        //if (cellGrid[i].minJ > j) cellGrid[i].minJ = j;
        //if (cellGrid[i].maxJ < j) cellGrid[i].maxJ = j;
        cellGrid[i].activejs.push(j);
        for (let p = 0; p < moore.length; p++) {
          const jp = j + moore[p][1];
          const ip = i + moore[p][0];
          cellGrid[ip].row[jp].neighbors += 1;
          if (!cellGrid[ip].activejs.includes(jp)) cellGrid[ip].activejs.push(jp);
          //if (cellGrid[ip].minJ > jp && jp >= 1) cellGrid[ip].minJ = jp;
          //if (cellGrid[ip].maxJ < jp && jp < cellGrid[0].length - 1) cellGrid[ip].maxJ = jp;
         }
      }
    }
  }
  return cellGrid;
}


function randomizeGridBit(cellGrid) {
  console.log("max",0x80000000);
  for (let i = cellGrid.length/4; i < cellGrid.length * 3/4; i++) {
    for (let j = Math.floor(cellGrid[0].length/4); j < cellGrid[0].length * 3/4; j++) {
      cellGrid[i][j]  = Math.floor(Math.random() * (1 << 31));
      if (cellGrid[i][j]) console.log(cellGrid[i][j]);
    }
  }
  return cellGrid;
}

function updateNeighborsPC(cellGrid, i, j, mode) {
  if (mode == 1) {
    for (let p = 0; p < moore.length; p++) {
      let ip = i + moore[p][0];
      let jp = j + moore[p][1];
      if (!cellGrid[ip].row[jp].neighbors == 0){ 
        cellGrid[ip].activejs.push(jp);
       // if (cellGrid[ip].minJ > jp) cellGrid[ip].minJ = jp;
       // if (cellGrid[ip].maxJ < jp) cellGrid[ip].maxJ = jp;
      }
      cellGrid[i + moore[p][0]].row[j + moore[p][1]].neighbors += 1;
      cellGrid[i].row[j].state = 1;
    }
  }
  else if (mode == 0) {
    for (let p = 0; p < moore.length; p++) {
      cellGrid[i + moore[p][0]].row[j + moore[p][1]].neighbors -= 1; 
      cellGrid[i].row[j].state = 0;
    }
  }
  else if (mode == 2) {
    for (let p = 0; p < moore.length; p++) {
      cellGrid[i + moore[p][0]].row[j + moore[p][1]].neighbors -= 1; 
      cellGrid[i].row[j].state = 2;
    }
  }
  return cellGrid;
}

function getBit(cellGrid, i, j) {
  const pack = cellGrid[i][Math.floor(j/32)];
  return (pack & (0x80000000 >>> (j % 32))) ? 1 : 0;
}


function setBit(cellGrid, i, j, state) {
  const pack = cellGrid[i][Math.floor(j/32)];
  const bit = 0x80000000 >>> (j % 32);
  if (state) {
    cellGrid[i][Math.floor(j/32)] = pack | bit;
  }
  else cellGrid[i][Math.floor(j/32)] = pack & ~bit;
  return cellGrid;
}

function getPack(cellGrid, i, j, jo) {
  const pack1 = cellGrid[i][j];
  if (jo == 0) return pack1;
  const pack2 = pack1 << j;
  const pack3 = pack2 | (cellGrid[i][j+jo] & (jo == 1 ? 1 << 31 : 1))
  return pack3;
  
}

  
function getNewBit(rule, ins, neighbors) {
  let out = 0;
  let passed = 0;
  for (let s = 0; s < rule.survive.length; s++) {
    let just = ~passed & ins & (neighbors[rule.survive[s]] ? 1 : 0);
    out = (passed & out) | just;
    passed = passed | just;
    
  }
  for (let s = 0; s < rule.born.length; s++) {
    let just = ~passed & ~ins & (neighbors[rule.born[s]] ? 1 : 0);
    out = (passed & out) | just;
    passed = passed | just;
  }
  return out;
}

function getNewPack(rule, ins, neighbors) {
  let out = 0;
  let passed = 0;
  for (let s = 0; s < rule.survive.length; s++) {
    let just = ~passed & ins & neighbors[rule.survive[s]];
    out = (passed & out) | just;
    passed = passed | just;
    
  }
  for (let s = 0; s < rule.born.length; s++) {
    let just = ~passed & ~ins & neighbors[rule.born[s]];
    out = (passed & out) | just;
    passed = passed | just;
  }
  return out;
}

function toBits(int) {
  let array = Array.from({length: 32});
  let n = 0;
  for (let i = 1 << 31; n < 32; i = i >> 1) {
    array[n++] = int & i ? 1 : 0;
  }
  return array;
}

function testGetPack(cellGrid,i, j) {
  console.log("sep",toBits(cellGrid[i][j]),toBits(cellGrid[i][j+1]));
  console.log("shift 1",toBits(getPack(cellGrid,i,j,1)));
}

function useRulePacked(cellGrid, rule) {
  let newGrid = makeGridBit(cellGrid[0].length, cellGrid.length);
  const maxState = Math.max(rule.born.length-1, rule.survive.length-1);
  const dieMode = rule.generations > 2 ? 2 : 0;
  const randN = Math.floor(Math.random() * 9);
  let log = true;
  for (let i = 1; i < cellGrid.length - 1; i++) {
    for (let j = 1; j < cellGrid.length - 1; j++) {
      let neighbors = [0xFFFFFFFF,0,0,0,0,0,0,0,0];
      for (let p = 0; p < moore.length; p++) {
        const checkbit = getPack(cellGrid, i+moore[p][0], j, moore[p][1]);
        const neg = ~checkbit;
        for (let n = p + 1; n >= 1; n--) {
          neighbors[n] &= neg;
          neighbors[n] |= neighbors[n-1] & checkbit;
        }
        neighbors[0] &= neg;
      }
      if (log && cellGrid[i][j]) {
        log = false;
        testGetPack(cellGrid,i,j);
      }
      newGrid[i][j] = getNewPack(rule, cellGrid[i][j], neighbors);
      /*
      if (getBit(cellGrid,i,j)) {
        if (sortedIncludes(rule.survive, neighbors)){
          newGrid = setBit(newGrid,i,j,1);
        }
      }
      else {
        if (sortedIncludes(rule.born, neighbors)){
          newGrid = setBit(newGrid,i,j,1);
        }
      }
      */
    }
  }
  return newGrid;
}


function useRuleBitBranchless(cellGrid, rule) {
  let newGrid = makeGridBit(cellGrid[0].length, cellGrid.length);
  const maxState = Math.max(rule.born.length-1, rule.survive.length-1);
  const dieMode = rule.generations > 2 ? 2 : 0;
  const randN = Math.floor(Math.random() * 9);
  let log = true;
  for (let i = 1; i < cellGrid.length - 1; i++) {
    for (let j = 1; j < (cellGrid.length * 32) - 1; j++) {
      let count = 0;
      let neighbors = [true,false,false,false,false,false,false,false,false];
      for (let p = 0; p < moore.length; p++) {
        const checkbit = getBit(cellGrid, i + moore[p][0], j + moore[p][1]) ? true : false;
        if (checkbit) count++;
        const neg = !checkbit;
        for (let n = p + 1; n >= 1; n--) {
          neighbors[n] &&= neg;
          neighbors[n] ||= neighbors[n-1] && checkbit;
        }
        neighbors[0] &&= neg;
      }
      if (count && log && count == randN) {
        log = false;
        console.log("neighbors", count, neighbors);
      }
      newGrid = setBit(newGrid,i,j,getNewBit(rule,getBit(cellGrid,i,j),neighbors));
      /*
      if (getBit(cellGrid,i,j)) {
        if (sortedIncludes(rule.survive, neighbors)){
          newGrid = setBit(newGrid,i,j,1);
        }
      }
      else {
        if (sortedIncludes(rule.born, neighbors)){
          newGrid = setBit(newGrid,i,j,1);
        }
      }
      */
    }
  }
  return newGrid;
}
function useRuleBit(cellGrid, rule) {
  let newGrid = makeGridBit(cellGrid[0].length, cellGrid.length);
  const maxState = Math.max(rule.born.length-1, rule.survive.length-1);
  const dieMode = rule.generations > 2 ? 2 : 0;
  for (let i = 1; i < cellGrid.length - 1; i++) {
    for (let j = 1; j < (cellGrid.length * 32) - 1; j++) {
      let neighbors = 0;
      for (let p = 0; p < moore.length; p++) {
        neighbors += getBit(cellGrid, i + moore[p][0], j + moore[p][1]);
      }
      if (getBit(cellGrid,i,j)) {
        if (sortedIncludes(rule.survive, neighbors)){
          newGrid = setBit(newGrid,i,j,1);
        }
      }
      else {
        if (sortedIncludes(rule.born, neighbors)){
          newGrid =  setBit(newGrid,i,j,1);
        }
      }
    }
  }
  return newGrid;
}


function useRuleGenPC(cellGrid, rule) {
  let newGrid = copyGridPC(cellGrid);
  const maxForBorn = rule.born[rule.born.length-1];
  const maxForSurvive = rule.survive[rule.survive.length-1];
  const dieMode = rule.generations > 2 ? 2 : 0;
  for (let i = 1; i < cellGrid.length - 1; i++) {
    if (cellGrid[i].activejs.length) {
      console.log("row");
      for (let j = 1; j < cellGrid[i].row.length - 1; j++) {
        const cell = cellGrid[i].row[j];
        if (cell.state == 1) {
          if (!sortedIncludes(rule.survive, cell.neighbors)) {
            newGrid = updateNeighborsPC(newGrid,i,j,dieMode);
          }
        }
        else if (cell.state == 0) {
          if (sortedIncludes(rule.born, cell.neighbors)) {
            newGrid = updateNeighborsPC(newGrid,i,j,1);
          }
        }
        else  {
          if (rule.generations - 1 > cell.state) newGrid[i].row[j].state += 1;
          else newGrid[i].row[j].state = 0;
        }
      }
    }
  }
  return newGrid;
}

function useRuleGen(cellGrid, rule) {
  let newGrid = makeGrid(cellGrid[0].length, cellGrid.length);
  const maxForBorn = rule.born[rule.born.length-1];
  const maxForSurvive = rule.survive[rule.survive.length-1];
  const isGen = rule.generations > 2;
  for (let i = 1; i < cellGrid.length - 1; i++) {
    for (let j = 1; j < cellGrid[i].length - 1; j++) {
      const state = cellGrid[i][j];
      if (state > 1) {
        newGrid[i][j] = state < rule.generations - 1 ? state + 1 : 0;
      }
      else {
        let maxed = false;
        let neighbors = 0;
        for (let io = -1; io < 2 && !maxed; io ++) {
          for (let jo = -1; jo < 2 && !maxed; jo ++ ) {
            const ii = i + io;
            const jj = j + jo;
            if (ii != i || jj != j) {
              neighbors += (cellGrid[ii][jj] == 1 ? 1 : 0);
            }
            if (state ? neighbors > maxForSurvive : neighbors > maxForBorn) maxed = true;
          }
        }
        if (state) {
          newGrid[i][j] = rule.survive.includes(neighbors) ? 1 : isGen ? 2 : 0; 
        } else {
          newGrid[i][j] = rule.born.includes(neighbors) ? 1 : 0;
        }
      }
    }
  }
  return newGrid;
}


function useRuleGenPCHensel(cellGrid, rule) {
  let newGrid = copyGridPC(cellGrid);
  const dieMode = rule.generations > 2 ? 2 : 0;
  for (let i = 1; i < cellGrid.length - 1; i++) {
    //if (cellGrid[i].activejs.length) {
      for (let j = 1; j < cellGrid[i].row.length - 1; j++) {
        const cell = cellGrid[i].row[j];
        if (cell.state == 1) {
          const data = sortedIncludes(rule.survive, cell.neighbors);
          if (!data) {
            newGrid = updateNeighborsPC(newGrid,i,j,dieMode);
          }
          else if (data.pattern) {
            let patterns = allhensel;
            for (let p = 0; p < moore.length; p++) {
              patterns = getMatching(patterns,moore[p][0], moore[p][1], cellGrid[i+moore[p][0]].row[j+moore[p][1]].state); 
            }
            if (!data.pattern.includes(patterns[0].name[0])) {
              newGrid = updateNeighborsPC(newGrid,i,j,dieMode);
            }
          }
        }
        else if (cell.state == 0) {
          const data = sortedIncludes(rule.born, cell.neighbors);
          if (data) {
            if (data.pattern) {
              let patterns = allhensel;
              let nei = [];
              for (let p = 0; p < moore.length; p++) {
                patterns = getMatching(patterns, moore[p][0], moore[p][1], cellGrid[i+moore[p][0]].row[j+moore[p][1]].state); 
                nei.push({patterns, i: moore[p][0], j: moore[p][1], state: cellGrid[i+moore[p][0]].row[j+moore[p][1]].state});
                //nei.push(patterns); 
              }
              try {
                if (data.pattern.includes(patterns[0].name[0])) {
                  newGrid = updateNeighborsPC(newGrid,i,j,1);
                }
              } catch (e) {
                console.log("ERROR", nei);
              }
            }
            else newGrid = updateNeighborsPC(newGrid,i,j,1);
          }
        }
        else  {
          if (rule.generations - 1 > cell.state) newGrid[i].row[j].state += 1;
          else newGrid[i].row[j].state = 0;
        }
      }
    //}
  }
  return newGrid;
}



function getCellClass(state) {
  const classes = [
    "dark:bg-black bg-white",
    "dark:bg-[#d6dbdc] bg-slate-800",
    "bg-red-600",
    "bg-yellow-400",
    "bg-green-500",
    "bg-blue-600",
    "bg-purple-600",
    "bg-amber-600",
    "bg-lime-400"
  ];
  return classes[state] + " h-2 w-2";
}

const Cell = ({cell}) => {
 // <p className = {"text" + getCellClass((cell.state + 1) % 7).substring(2)}>{cell.neighbors}</p>
  return (<div className = {getCellClass(cell.state)}>
    <></>
  </div>);
}

const CellPacked = ({cell}) => {
  const split = Array.from({length: 32});
  let n = 0;
  for (let i = 0x80000000; i > 0; i = i >>> 1) {
    split[n++] = cell & i ? 1 : 0;
  }
  return (
    <div className = "flex">
    {split.map((c) => {
      return (
        <div className = {getCellClass(c)}> 
          <></> 
        </div>);
    })}
    </div>
  );
}


const Grid = ({cellGrid}) => {
  const toChars = (row) => {
    return row.map((c) => {
      if (c == 0) return '_';
      else return '#';
    }).join('');
  };
  return (
  <div className="border-8 border-slate-500 w-fit">
   {cellGrid.slice(1,cellGrid.length-1).map((row) => 
    <div className = "flex">
      {row.row.slice(1,row.row.length-1).map((cell) => 
        <Cell cell = {cell}/>
      )}
    </div>
    )}
  </div>
  );
};



const Page = () => {
  const router = useRouter();
  const [rulestr, setRulestr] = useState("");
  const [valid, setValid] = useState(false);
  const [init, setInit] = useState(false);
  const [cellGrid, setCellGrid] = useState(makeGridPC(102,102));
  const [rule, setRule] = useState({});
  const [ran, setRan] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(0);
  const Run = (grid,i,start) => {
    //let newi = i + 1;
    //console.log(newi);
    //setI(newi);
    const newGrid = useRuleGenPCHensel(grid,rule);
    setCellGrid(newGrid);
    //console.log(i);
    if (i == 100) {
      const time = (Date.now() - start);
      console.log("100 frames took ", time);
    }
    setTimeout(() => Run(newGrid,i+1,start), 1);
  } 


   if (init && valid && !ran) {
    setRan(true);
    Run(cellGrid,0,Date.now());   
  }
  
  useEffect(() => {
    if (router.isReady) {
      const terms = router.query.terms;
      const v = validateRule(terms);
      setValid(v.valid);
      if (v.valid) {
        setRule(toRuleObj(terms));  
        setCellGrid(randomizeGridPC(cellGrid));
      } else {
        setError(v);
      }
      setRulestr(toRuleString(terms));
      setInit(true);
    }
  }, [router.isReady]);
  
  
  //console.log(router.query.terms);

   return (
    (init && valid) ?
    <div>
      <p className = "font-mono dark:text-[#d6dbdc] text-slate-800">{rulestr}</p>
      {valid && 
        <Grid
          cellGrid = {cellGrid}
        />
      }
    </div> :
    <p>{error.msg}</p>
  );
}


export default Page;

