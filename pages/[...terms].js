import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Button } from "@nextui-org/button";
import Image from "next/image";
import die from "../die.png";
import dieLight from "../die_light.png";
import run from "../play.png";
import pause from "../pause.png";
import pauseLight from "../pause_light.png";
import runLight from "../play_light.png";
import {useTheme} from "next-themes";
import Popup from 'reactjs-popup';
import isCleanLanguage from "../lib/profanity";
import {Range} from "react-range";


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
const c6 = {name: "c6", map: 
            [[0,1,0],
            [1,1],
            [1,1,1]]};
const c7 = {name: "c7", map: 
            [[0,1,1],
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

const a6 = {name: "a6", map: 
            [[0,0,1],
            [1,1],
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


function getHenselOk(last) {
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
    ok = ['c','e','a','k','i','n','y','q','j','r','t','w','z'];
  }
  return ok; 
}

function randomNeighbors(isHensel) {
  let out = "";
  for (let i = '0'; i < '9'; i++) {
    if (Math.random() > 0.6) {
      out += i;
      if (isHensel && Math.random() > 0.5) {
        let options = getHenselOk(i);
        if (options.length == 2) {
          out += Math.random() > 0.5 ? options[0] : options[1];
        }
        else if (options.length) {
          if (Math.random() > 0.3) {
              out += '-';
          }
          if (options == 3) {
            out += options[Math.floor(Math.random() * 3)];
          }
          else { 
            let choose = Math.random() > 0.5 ? Math.floor(Math.random() * 2) + 1: Math.floor(Math.random() * (options.length/2 - 1)) + 1;
            for (let n = 0; n < choose; n++) {
              const index = Math.floor(Math.random() * options.length);
              out += options[index];
              if (!index) {
                options = options.slice(1);
              }
              else {
                options = options.slice(0, index).concat(options.slice(index + 1, options.length));
              }
            }
          }
        }
      } 
    }
  }
  return out;
}

function randomRule() {
  let out = "/B" + randomNeighbors(Math.random() > 0.5) + "/S" + randomNeighbors(Math.random() > 0.5);
  if (Math.random() > 0.5) {
    out += "/G" + (Math.floor(Math.random() * 6) + 3);
  }
  console.log(out);
  return out;
}



function validatePattern(rle) {
  let width = 0;
  let height = 0;
  let col = 0;
  let row = 0;
  let count = 0;
  let patternGrid = [[]];
  for (let i = 0; i < rle.length && rle[i] != '!'; i++) {
    if (rle[i] == '$') {
      col = 0;
      row++;
      count = 0;
      patternGrid.push([]);
    }
    else if ((count == 0 && rle[i] >= '2' && rle[i] <= '9') || (rle[i] >= '0' && rle[i] <= '9')){
      count = count * 10 + (rle[i] - '0');
    }
    else if (rle[i] == 'b' || rle[i] == 'o'){
      const state = rle[i] == 'b' ? 0 : 1;
      const amount = count ? count : 1;
      for (let a = col; a < col + amount; a++) {
        patternGrid[row][a] = state;
      }
      col += count ? count : 1;
      count = 0;
    }
    else {
      return false;
    }
    if (row > height) height = row;
    if (col > width) width = col;
  }
  return true;
}



function validateTerm(term,tn) {
  let good = {valid: true};
  let dash = false;
  if (term[0] == 'B' || term[0] == 'S') {
    if (term[0] == 'B') {
      if (tn != 0) return {valid: false, msg: "B term must be at the beginning of the rulestring (example: B3/S23)", index: [0,term.length]};
    }
    else {
      if (tn != 1) return {valid: false, msg: "S term must be the second term of the rulestring (example: B3/S23)", index: [0,term.length]};
    }
    let last = '0' - 1;
    let letters = false;
    let dash = false;
    let numi = 1;
    for (let i = 1; i < term.length; i++) {
      if (term[i] == '-') {
        let dashError = {valid: false, msg: "Only a single dash is permitted to specify the negation of hensel notation patterns", index: [i,i]};
        if (dash) return dashError;
        if (letters) {
          dashError.msg = "Hensel notation negations must be specified before any pattern indicators (ex: 2-a)"
          return dashError;
        }
        dash = true;
      }

      else if (term[i] >= 'a' && term[i] <= 'z') {
        dash = false
        letters = true;
        const ok = getHenselOk(last);
       	if (!ok.includes(term[i])) {
        	console.log(ok, term[i]);
          return {valid: false, msg: last + term[i] + " is not a valid hensel notation term", index: [numi,i]};
        }
      }
      else if (!isNumber(term[i]) || last >= term[i]) {
        return {valid: false, msg: term[0] + " term expects only ascending digits (example: " + term[0] + "23)", index: [i,i]};
        
      }
      else {
        
        if (dash) {
          return {valid: false, msg: term[i-2] + term[i-1] + " is unbound to any pattern specifiers (example: 2-a)", index: [i-2, i-1]};
        }
        if (term[i] == '9') {
          return {valid: false, msg: "Only neighbor counts in the range of 0 and 8 are valid", index: [i, i]};
        }
        dash = false;
        numi = i;
        letters = false;
        last = term[i];
      }
    }
    return dash ? {valid: false, msg: term[term.length - 1] + " is unbound to any pattern specifiers (example: 2-a)", index: [term.length-1, term.length]} : good;
  }
  else if (term[0] == 'G') {
    if (tn != 2) {
      return {valid: false, msg: "G term bust be the third term of the rulestring (example: B3/S23/G4)", index: [0, term.length]};
    }
    if (term.length != 2 || !isNumber(term[1])) {
      return {valid: false, msg: "G term expects a single digit (example: G4)", index: [2, term.length]};
    }
    else return good;
  }
  else if (term[0] == 'P') {
    if (validatePattern(term.substring(1))) {
      return good;
    }
    else return {valid: false, msg: "Invalid RLE pattern", index: [1, term.length]};
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
  if (terms[0][0] == "R") {
    const invalidR = {valid : false, index: 0, range: [0, terms[0].length], msg: "R term is invalid, expects a number 0-255"};
    if (terms[0].length > 5 || terms[0].length == 1) {
      return invalidR;
    }
    else if (terms.length > 3 || (terms.length == 2 && terms[1][0] != "P")) {
      return {valid: false, index: 1, range: [0, terms[1].length], msg: "R term cannot be combined with other rule string terms"}; 
    }
    else {
       const num = parseInt(terms[0].substring(1));
       if (num >= 0 && num <= 255) {
        return {valid: true}
       }
       else return invalidR;
    }
  }
  else if (terms[0] == "named") {
    if (terms.length == 2) {
      return {valid: true};
    }
    else if (terms.length == 3 && terms[2][0] == "P") {
      if (validatePattern(terms[2].substring(1))) {
        return {valid: true};
      }
      else return {valid: false, index: 2, range: [0, terms[2].length], msg: "Invalid RLE pattern"};
    }
    return terms.length;
  }  
  for (let i = 0; i < terms.length; i++) {
    const tv = validateTerm(terms[i],i);
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
    if (terms[i][0] != 'P') str = str + "/" + terms[i];
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
    name: false,
    dimensions: 2, 
    born: [],
    survive: [],
    generations: 2,
    pattern: false,
  };
  console.log("In terms", terms);
  if (terms[0] == "named") {
    return {name: true};
  }
  for (let i = 0; i < terms.length; i++) {
    const tchar = terms[i][0];
    let last = ' ';
    let dash = false;
    for (let j = 1; j < terms[i].length; j++) {
      if (tchar == 'R') {
        const num = parseInt(terms[i].substring(1));
        transitions = {
          name: false,
          dimensions: 1,
          neighbors: [num & 1, num & 2 ? 1 : 0, num & 4 ? 1 : 0, num & 8 ? 1 : 0, num & 16 ? 1 : 0, num & 32 ? 1 : 0, num & 64 ? 1 : 0, num & 128 ? 1 : 0],
          pattern: false
        };
      }
      else if (tchar == 'B') {
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
        if (dash && j == terms[i].length - 1) {
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
          if (dash) {
            console.log("here1");
            transitions.survive[l] = getNegation(transitions.survive[l]);
            console.log("fine");
          }         
          dash = false;
          last = terms[i][j];  
          transitions.survive.push({pattern: false, neighbors: terms[i][j] - '0'});
        }
        if (dash && j == terms[i].length - 1) {
          console.log("here2");
          transitions.survive[l] = getNegation(transitions.survive[l]);
        }
 
      }
      else if (tchar == 'G') {
        transitions.generations = terms[i][j] - '0';
      }
      else if (tchar == 'P') {
        transitions.pattern = terms[i].substring(1); 
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

function clearGrid(cellGrid) {
  cellGrid[0].activejs[0] = 2;
  for (let i = 0; i < cellGrid.length; i++) {
    for (let j = 0; j < cellGrid[0].row.length; j++) {
      cellGrid[i].row[j].state = 0;
      cellGrid[i].row[j].neighbors = 0;
    }
  }
}

function makeGridPC(length, height) {
  const cellGrid = Array.from({length: height});
  for (let i = 0; i < height; i++) {
    cellGrid[i] = {activejs: [], row: Array.from({length}), minJ: length, maxJ: 0};
    for (let j = 0; j < length; j++) {
      cellGrid[i].row[j] = {state: 0, neighbors: 0, i, j};
    }
  }
  return cellGrid;
}

function gridToRLE(cellGrid) {
  let out = "";
  for (let i = 0; i < cellGrid.length; i++) {
    let last = -1;
    let count = 0;
    for (let j = 0; j < cellGrid[0].row.length; j++) {
      const cur = cellGrid[i].row[j].state;
      if (cur == last) {
        count += 1;
      }
      if (cur != last || j == cellGrid[0].row.length - 1) {
        if (last != -1) {
          if (count != 1) {
            out += count.toString();
          }
          out += last == 1 ? "o" : "b";
        }
        last = cur;
        count = 1;
      }
    }
    out += "$";
  }
  const widthStr = cellGrid[0].row.length.toString();
  const rl = widthStr.length + 2;
  const emp = widthStr + "b$";
  console.log("Foo");
  console.log("sub1", out.substring(0,rl));
  console.log("sub2", out.substring(out.length - rl, out.length));
  while (out.substring(0,rl) == emp && out.substring(out.length - rl, out.length) == emp) {
    const temp = out.substring(rl,out.length);
    out = temp.substring(0, temp.length - rl);
  }
  out = out.substring(0,out.length - 1) + "!";
  return out;
}

function elemGridToRLE(cellGrid) {
  let out = "";
  for (let i = 0; i < cellGrid[0].activejs[0]; i++) {
    let last = -1;
    let count = 0;
    for (let j = 0; j < cellGrid[0].row.length; j++) {
      const cur = cellGrid[i].row[j].state;
      if (cur == last) {
        count += 1;
      }
      if (cur != last || j == cellGrid[0].row.length - 1) {
        if (last != -1) {
          if (count != 1) {
            out += count.toString();
          }
          out += last == 1 ? "o" : "b";
        }
        last = cur;
        count = 1;
      }
    }
    out += "$";
  }
  const widthStr = cellGrid[0].row.length.toString();
  const rl = widthStr.length + 2;
  const emp = widthStr + "b$";
  console.log("Foo");
  console.log("sub1", out.substring(0,rl));
  console.log("sub2", out.substring(out.length - rl, out.length));
  while (out.substring(0,rl) == emp && out.substring(out.length - rl, out.length) == emp) {
    const temp = out.substring(rl,out.length);
    out = temp.substring(0, temp.length - rl);
  }
  out = out.substring(0,out.length - 1) + "!";
  return out;
}



function addPattern(cellGrid, rle) {
  let width = 0;
  let height = 0;
  let col = 0;
  let row = 0;
  let count = 0;
  let patternGrid = [[]];
  let isempty = true;
  console.log("addPettern in", cellGrid, rle);
  for (let i = 0; i < rle.length && rle[i] != '!'; i++) {
    if (rle[i] == '$') {
      col = 0;
      row++;
      count = 0;
      patternGrid.push([]);
    }
    else if ((count == 0 && rle[i] >= '2' && rle[i] <= '9') || (rle[i] >= '0' && rle[i] <= '9')){
      count = count * 10 + (rle[i] - '0');
    }
    else if (rle[i] == 'b' || rle[i] == 'o'){
      const state = rle[i] == 'b' ? 0 : 1;
      const amount = count ? count : 1;
      for (let a = col; a < col + amount; a++) {
        patternGrid[row][a] = state;
      }
      col += count ? count : 1;
      count = 0;
    }
    else {
      console.log(rle, i, rle[i]);
      return null;
    }
    if (row > height) height = row;
    if (col > width) width = col;
  }
  height++;
  const hwidth = Math.floor(width/2);
  const hheight = Math.floor(height/2);
  const si = Math.floor(cellGrid.length/2) - hheight;
  const sj = Math.floor(cellGrid[0].row.length/2) - hwidth;
  
  console.log(patternGrid, height, width);
  for (let i = si; i < si + height; i++) {
    for (let j = sj; j < sj + width; j++) {
      if (j - sj > patternGrid[i - si].length - 1) cellGrid[i].row[j].state = 0;
      else {
        cellGrid[i].row[j].state = patternGrid[i - si][j - sj];
        if (cellGrid[i].row[j].state) {
         // if (!cellGrid[i].activejs.includes(j)) cellGrid[i].activejs.push(j);
          for (let p = 0; p < moore.length; p++) {
            //if (!cellGrid[i].activejs.includes(j)) cellGrid[i + moore[p][0]].activejs.push(j + moore[p][1]);
            cellGrid[i + moore[p][0]].row[j + moore[p][1]].neighbors += 1;
          }
        }
     } 
    }
  }
  console.log("pattern out", cellGrid);
  return cellGrid;
}


function addPatternElem(cellGrid, rle) {
  let width = 0;
  let height = 0;
  let col = 0;
  let row = 0;
  let count = 0;
  let patternGrid = [[]];
  let isempty = true;
  for (let i = 0; i < rle.length && rle[i] != '!'; i++) {
    if (rle[i] == '$') {
      col = 0;
      row++;
      count = 0;
      patternGrid.push([]);
    }
    else if ((count == 0 && rle[i] >= '2' && rle[i] <= '9') || (rle[i] >= '0' && rle[i] <= '9')){
      count = count * 10 + (rle[i] - '0');
    }
    else if (rle[i] == 'b' || rle[i] == 'o'){
      const state = rle[i] == 'b' ? 0 : 1;
      const amount = count ? count : 1;
      for (let a = col; a < col + amount; a++) {
        patternGrid[row][a] = state;
      }
      col += count ? count : 1;
      count = 0;
    }
    else {
      console.log(rle, i, rle[i]);
      return null;
    }
    if (row > height) height = row;
    if (col > width) width = col;
  }
  height++;
  const hwidth = Math.floor(width/2);
  const hheight = Math.floor(height/2);
  const si = 0;
  const sj = 0;
  console.log(patternGrid, height, width);
  for (let i = si; i < si + height; i++) {
    for (let j = sj; j < sj + width; j++) {
      if (j - sj > patternGrid[i - si].length - 1) cellGrid[i].row[j].state = 0;
      else {
        cellGrid[i].row[j].state = patternGrid[i - si][j - sj];
        if (cellGrid[i].row[j].state) {
         // if (!cellGrid[i].activejs.includes(j)) cellGrid[i].activejs.push(j);
          for (let p = 0; p < moore.length; p++) {
            //if (!cellGrid[i].activejs.includes(j)) cellGrid[i + moore[p][0]].activejs.push(j + moore[p][1]);
            cellGrid[i + moore[p][0]].row[j + moore[p][1]].neighbors += 1;
          }
        }
      } 
    }
  }
  cellGrid[0].activejs[0] = height;
  console.log("pattern out", cellGrid);
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


function loadGridPC(dstGrid,srcGrid) {
  dstGrid[0].activejs[0] = srcGrid[0].activejs[0];
  for (let i = 0; i < dstGrid.length; i++) {
    for (let j = 0; j < dstGrid[0].row.length; j++) {
      dstGrid[j].row[i].state = srcGrid[j].row[i].state;
      dstGrid[j].row[i].neighbors = srcGrid[j].row[i].neighbors;
    }
  }
}

function copyGridPC(cellGrid) {
  const newGrid = Array.from({length: cellGrid.length});
  for (let i = 0; i < newGrid.length; i++) {
    newGrid[i] = {activejs: cellGrid[i].activejs, row: Array.from({length: cellGrid[0].row.length}), minJ: cellGrid[i].minJ, maxJ: cellGrid[i].maxJ};
    for (let j = 0; j < newGrid[0].row.length; j++) {
      newGrid[i].row[j] = {state: cellGrid[i].row[j].state, neighbors: cellGrid[i].row[j].neighbors, i, j};
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

function rangeRandom(min,max) {
  return ((Math.random() * (max - min)) + min);
}

function toggleCell(cellGrid, i, j) {
  const state = cellGrid[i].row[j].state;
  if (state == 0) {
    cellGrid[i].row[j].state = 1;
    for (let p = 0; p < moore.length; p++) {
      cellGrid[i + moore[p][0]].row[j + moore[p][1]].neighbors += 1;
    }
  }
  else if (state == 1) {
    cellGrid[i].row[j].state = 0;
    for (let p = 0; p < moore.length; p++) {
      cellGrid[i + moore[p][0]].row[j + moore[p][1]].neighbors -= 1;
    }
  }
  else {
    cellGrid[i].row[j].state = 0;
  }
  return cellGrid;
}


function improvedRandomize(cellGrid) {
  const tr = rangeRandom(0.5,3);
  const height = cellGrid.length;
  const width = cellGrid[0].row.length;
  for (let i = Math.floor(height * 1/4); i < height * 3/4; i++) {
    const r = rangeRandom(0,1.1) * tr;
    for (let j = Math.floor(width * 1/4 + rangeRandom(0,2) * Math.abs(height / 2 - i) ) ; j < Math.floor(width * 3/4 - rangeRandom(0,2) * Math.abs(height / 2- i)); j++) {
      cellGrid[i].row[j].state  = 1;//Math.random() < r ? 0 : 1;
      if (cellGrid[i].row[j].state) {
        for (let p = 0; p < moore.length; p++) {
          const jp = j + moore[p][1];
          const ip = i + moore[p][0];
          cellGrid[ip].row[jp].neighbors += 1;
         }
      }
    }
  }
  return cellGrid;
}

function improvedRandomizeOld(cellGrid) {
  const width = cellGrid[0].row.length;
  const ff = rangeRandom(-width/20,width/5);
  const tr = rangeRandom(-0.3,0.5);
  for (let i = Math.floor(cellGrid.length/4); i < cellGrid.length * 3/4; i++) {
    const r = Math.random() * 2 + tr;
    for (let j = Math.floor(cellGrid[0].row.length/2.5) - rangeRandom(0,width/10 + ff); j < (cellGrid[0].row.length * 2/3) + rangeRandom(0,width/10 + ff); j++) {
      cellGrid[i].row[j].state  = Math.random() < r + (Math.random() * 0.2) ? 0 : 1;
      if (cellGrid[i].row[j].state) {
        for (let p = 0; p < moore.length; p++) {
          const jp = j + moore[p][1];
          const ip = i + moore[p][0];
          cellGrid[ip].row[jp].neighbors += 1;
         }
      }
    }
  }
  return cellGrid;
}

function randomizeGridPC(cellGrid) {
  const r = (Math.random() * 0.7) + 0.1;
  for (let i = Math.floor(cellGrid.length/4); i < cellGrid.length * 3/4; i++) {
    for (let j = Math.floor(cellGrid[0].row.length/4); j < cellGrid[0].row.length * 3/4; j++) {
      cellGrid[i].row[j].state  = Math.random() < r ? 0 : 1;
      if (cellGrid[i].row[j].state) {
        //if (cellGrid[i].minJ > j) cellGrid[i].minJ = j;
        //if (cellGrid[i].maxJ < j) cellGrid[i].maxJ = j;
        //cellGrid[i].activejs.push(j);
        for (let p = 0; p < moore.length; p++) {
          const jp = j + moore[p][1];
          const ip = i + moore[p][0];
          cellGrid[ip].row[jp].neighbors += 1;
          //if (!cellGrid[ip].activejs.includes(jp)) cellGrid[ip].activejs.push(jp);
          //if (cellGrid[ip].minJ > jp && jp >= 1) cellGrid[ip].minJ = jp;
          //if (cellGrid[ip].maxJ < jp && jp < cellGrid[0].length - 1) cellGrid[ip].maxJ = jp;
        }
      }
    }
  }
  return cellGrid;
}


function randomizeElementary(cellGrid) {
  const width = cellGrid[0].row.length;
  const r = Math.random();
  cellGrid[0].activejs[0] = 2;
  for (let j = Math.floor(Math.random() * width/5); j < cellGrid.length - Math.floor(Math.random() * width/5); j++) {
    cellGrid[1].row[j].state = Math.random() < r ? 1 : 0;
  }
  return cellGrid;
} 
 
function elemStart(cellGrid) {
  cellGrid[1].row[Math.floor(cellGrid[1].row.length/2)].state = 1;
  cellGrid[0].activejs.push(2);
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
        //cellGrid[ip].activejs.push(jp);
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
            //let nei = [];
            let patterns = allhensel;
            for (let p = 0; p < moore.length; p++) {
              patterns = getMatching(patterns,moore[p][0], moore[p][1], cellGrid[i+moore[p][0]].row[j+moore[p][1]].state); 
              //nei.push({patterns, i: moore[p][0], j: moore[p][1], state: cellGrid[i+moore[p][0]].row[j+moore[p][1]].state});
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
              //let nei = [];
              for (let p = 0; p < moore.length; p++) {
                patterns = getMatching(patterns, moore[p][0], moore[p][1], cellGrid[i+moore[p][0]].row[j+moore[p][1]].state); 
                //nei.push({patterns, i: moore[p][0], j: moore[p][1], state: cellGrid[i+moore[p][0]].row[j+moore[p][1]].state});
                //nei.push(patterns); 
              }
              //try {
                if (data.pattern.includes(patterns[0].name[0])) {
                  newGrid = updateNeighborsPC(newGrid,i,j,1);
                }
              //} catch (e) {
              //  console.log("ERROR", nei);
              //}
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

function useRuleElem(cellGrid, rule) {
  const i = cellGrid[0].activejs[0];
  if (i >= cellGrid.length) return cellGrid;
  const newGrid = makeGridPC(102,102);
  console.log("active i", i);
  for (let t = 1; t < i; t++) {
    for (let j = 1; j < cellGrid[0].row.length - 1; j++) 
      newGrid[t].row[j].state = cellGrid[t].row[j].state;
  }
  for (let j = 1; j < cellGrid[0].row.length - 1; j++) {
        const neighborVal = 
          (cellGrid[i-1].row[j-1].state ? 4 : 0) +
          (cellGrid[i-1].row[j].state ? 2 : 0) +
           cellGrid[i-1].row[j+1].state;
        if (neighborVal) console.log("val", neighborVal, rule.neighbors);
        newGrid[i].row[j].state = rule.neighbors[neighborVal] ? 1 : 0; 
  }
  newGrid[0].activejs[0] = i + 1; 
  return newGrid;
}



function getCellClass(state,lines) {
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
  return classes[state] + (lines ? " h-2 w-2 border dark:border-slate-950" : " h-2 w-2");
}

const Cell = ({cell,func,lines}) => {
 // <p className = {"text" + getCellClass((cell.state + 1) % 7).substring(2)}>{cell.neighbors}</p>
  return (<div onClick = {() => func(cell.i, cell.j)} className = {getCellClass(cell.state,lines)}>
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
/*
  <div className="border-8 border-slate-500 w-fit">
   {cellGrid.slice(1,cellGrid.length-1).map((row) => 
    {true ?
      <div className = "flex">
        {row.row.slice(1,row.row.length-1).map((cell) => 
          <Cell cell = {cell} func = {func}/>
        )}
      </div> :
      <div className = "dark:bg-black bg-white h-2 w-[50rem]">
        <></>
      </div>
      
    }

    )}
  </div>
*/
const Grid = ({cellGrid,func}) => {
  const lines = false;
  const toChars = (row) => {
    return row.map((c) => {
      if (c == 0) return '_';
      else return '#';
    }).join('');
  };
  return (
  <div className="border-8 border-slate-500 w-fit mx-2">
   {cellGrid.slice(1,cellGrid.length-1).map((row) => 
    <div className = "flex">
      {row.row.slice(1,row.row.length-1).map((cell) => 
        <Cell cell = {cell} func = {func} lines = {lines}/>
      )}
    </div>
    )}
  </div>
  );
};

const ErrorScreen = ({error,rulestr,terms}) => {
  let offset = 0; 
  console.log(terms);
  for (let i = 0; i < error.index; i++) {
    offset += terms[i].length + 1;
  }
  offset += error.range[0];
  const end = error.range[1] - error.range[0];
  console.log(error, offset);
  console.log(rulestr);
  const p1 = rulestr.substring(0, offset);
  const p2 = rulestr.substring(offset, offset + end + 1);
  const p3 = rulestr.substring(offset + end + 1, rulestr.length);
  console.log(p1,p2,p3);
  return (
    <div>
      <div className = "flex">
        <p className = "font-mono font-bold text-lg ml-4 l-4 mt-1 dark:text-[#d6dbdc] text-slate-800">{p1}</p>
        <p className = "font-mono font-bold text-lg mt-1 text-red-500">{p2}</p>
        <p className = "font-mono font-bold text-lg mt-1 dark:text-[#d6dbdc] text-slate-800">{p3}</p>
      </div>
      <p className = "font-mono ml-4 mt-1 dark:text-[#d6dbdc] text-slate-800">{error.msg}</p> 
      <a target = "_blank" className = "font-mono underline ml-4 mt-1 dark:text-[#d6dbdc] text-slate-800" href = "https://conwaylife.com/wiki/Rulestring">Click here for more information</a> 
    </div>
  );
}


const StatusEnum = {
  router: -1,
  uninit: 0,
  ready: 1,
  invalid: 2,
  elem: 3
};

const FrameEnum = {
  normal: 0,
  load: 1,
  rand: 2,
  clear: 3
}

const NameEnum = {
  pre: 0,
  invalid: 1,
  valid: 2
}



const NewPage = () => {
  const router = useRouter();
  const [state, setState] = useState(StatusEnum.router);
  const [string, setString] = useState("");
  const [rulestr, setRulestr] = useState("");
  const [cellGrid, setCellGrid] = useState(makeGridPC(102,102));
  const [rule, setRule] = useState({});
  const [error, setError] = useState({});
  const [paused, setPaused] = useState(false);
  const [saved, setSaved] = useState([]);
  const [frameMode, setFrameMode] = useState(FrameEnum.normal);
  const [reroute, setReroute] = useState(false);
  const [foo, setFoo] = useState(false);
  const [pattern, setPattern] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [loadGrid, dummy] = useState(makeGridPC(102,102));
  const [isNamed, setIsNamed] = useState(false);
  const [nameStatus, setNameStatus] = useState({state: NameEnum.pre, msg: "Enter a name for this rule"});
  const [speed, setSpeed] = useState(0.5);
  let time = 0;


  const PauseButton = () => {
    return (
    <Button isIconOnly disableRipple = {true} radius = {"none"} disableAnimation = {true} onPressStart = {(e) => setPaused(!paused)}>
                {paused 
                  ? <div className = "dark:bg-[url('../play.png')] bg-[url('../play_light.png')] bg-left w-[4.5rem] h-[4.5rem] bg-contain bg-no-repeat"></div>
                  : <div className = "dark:bg-[url('../pause.png')] bg-[url('../pause_light.png')] bg-left w-[4.5rem] h-[4.5rem] bg-contain bg-no-repeat"></div>
                }
    </Button>
    );
  };

  const MenuButton = ({imgName, onHit}) => {
    const cn = "dark:bg-[url('../" + imgName + ".png')] bg-[url('../" + imgName + "_light.png')] bg-left w-[4.5rem] h-[4.5rem] bg-contain bg-no-repeat";
    return (
        <Button isIconOnly disableRipple = {true} radius = {"none"}
             isDisabled = {frameMode == FrameEnum.load}
             onClick = {onHit}>
          <div className = {cn}> </div>
        </Button>
    );
  };
    


  const useRuleObj = (ruleObj) => {
    setRule(ruleObj);  
    if (ruleObj.dimensions == 2){
      const initial = !ruleObj.pattern 
                    ? randomizeGridPC(cellGrid) 
                    : addPattern(cellGrid,ruleObj.pattern);
      console.log(initial);
      setCellGrid(initial);
      setSaved(copyGridPC(initial));
      setState(StatusEnum.ready);
    } 
    else {
      const initial = !ruleObj.pattern 
                      ? elemStart(cellGrid) 
                      : addPatternElem(cellGrid,ruleObj.pattern);
      setCellGrid(initial);
      setSaved(copyGridPC(initial));
      setState(StatusEnum.elem);
    }
  };
  useEffect(() => {
    if (router.isReady && state == StatusEnum.router) {
      console.log("theme", window.localStorage.getItem('prefered-theme'));
      setState(StatusEnum.uninit);
      const terms = router.query.terms;
      const v = validateRule(terms);
      const s = toRuleString(terms);
      setRulestr(s);
      if (v.valid) {
        let ruleObj = toRuleObj(terms);
        if (ruleObj.name) {
          console.log("/api/name/" + terms[1]);
          const res = fetch("/api/name/" + terms[1]).then((raw) => {
            if (raw.status == 200) {
              raw.json().then((res) => {
                ruleObj = res.rule;
                setString(ruleObj.rulestr + ": " + terms[1]);
                setIsNamed(true);
                if (terms.length == 3) {
                  console.log(terms[2]);
                  ruleObj.pattern = terms[2].substring(1);
                }
                useRuleObj(ruleObj);
              });
            }
            else {
              setString(terms[1]);
              setError({msg: terms[1] + " is not defined"});
              setState(StatusEnum.invalid);
            }
          });
        }
        else {
          const res = fetch("/api/rulestr", {
              method: "POST",
              body: s
            }).then((raw) => {
            if (raw.status == 200) {
              console.log("200");
              raw.json().then((res) => {
                console.log("raw json res", res);
                setString(s + ": " + res.name);
                setIsNamed(true);
              });
            } 
            else {
              console.log("NOT FOUND");
              setString(s);
            }
          });
          useRuleObj(ruleObj);
        }
      } 
      else {
        setError(v);
        setState(StatusEnum.invalid);
      }
       
    }
  }, [router.isReady]);

  if (state == StatusEnum.ready && !paused && !reroute) {
    const buff = 100;
    setTimeout(() => {
      let first = Date.now();
      if (frameMode == FrameEnum.normal) setCellGrid(useRuleGenPCHensel(cellGrid,rule));
      else {
        setCellGrid(copyGridPC(loadGrid));
        setFrameMode(FrameEnum.normal);
      }
      time = Date.now() - first;
      if (time > buff) time = buff;
    }, buff - time);
    
  }
  else if (state == StatusEnum.elem && !paused && !reroute) {
    const buff = 100; 
    setTimeout(() => {
      let first = Date.now();
      if (frameMode == FrameEnum.normal) setCellGrid(useRuleElem(cellGrid,rule));
      else {
        setCellGrid(copyGridPC(loadGrid));
        setFrameMode(FrameEnum.normal);
      }
      time = Date.now() - first;
      if (time > buff) time = buff;
    }, buff - time);   
  }
  else if (reroute != false && reroute != "wait") {
    router.push(reroute).then((res) => router.reload());
    setReroute("wait");
  }
  
  const doReroute = (rule, pattern) => {
    if (pattern) {
      setReroute(rule + "/P" + pattern);
    } else setReroute(rule); 
  };

  const clickBehavior = (i, j) => {
    if (!paused) {
      setPaused(true);
    } 
    else {
      setCellGrid(toggleCell(cellGrid,i,j));
      setFoo(!foo);
    }
  } 

  const localRandom = (grid) => {
   clearGrid(grid);
   if (rule.dimensions == 2) return randomizeGridPC(grid);
   else return randomizeElementary(grid); 
  } 

  const nameSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name) {
      if (/[^abcdefghijklmnopqrstuvwxyz123456789]/.test(name)) {
        setNameStatus({state: NameEnum.invalid, msg: "Rule string names must be composed of only lower case letters and numbers"});
        return;
      }
      else if (!isCleanLanguage(name)) {
        setNameStatus({state: NameEnum.invalid, msg: "Watch your language"});
        return;
      }
      const raw = await fetch("/api/name/" + name); 
      const res = await raw.json();
      if (!res.rule) {
        console.log("UPLOADING...");
        const upload = await fetch("/api/save", {
          method: "PUT",
          body: JSON.stringify({
            name,
            born: rule.born,
            survive: rule.survive,
            generations: rule.generations,
            dimensions: rule.dimensions,
            pattern: false,
            rulestr: string
          }),
          headers: {
            "Content-Type": "application/json"
          } 
        });
        if (upload.status == 200) {
          router.push("named/" + name).then((res) => router.reload());
        }
        else {
          setNameStatus({state: NameEnum.valid, msg: "Naming failed!"});
        }
      }
      else {
        console.log("info got", res.rule);
        setNameStatus({state: NameEnum.invalid, msg: "The rule name \"" + name + "\" is already assigned to " + res.rule.rulestr});
      }
    } 
    else {
      setNameStatus({state: NameEnum.invalid, msg: "Rule name cannot be empty"});
    }
  };

  return (
    state != StatusEnum.uninit &&
    <div>
      <p className = "font-mono font-bold text-lg ml-6 mt-1 dark:text-[#d6dbdc] text-slate-800">{string}</p>
      {
        (state == StatusEnum.ready || state == StatusEnum.elem)
        ? <div className = "flex">
            <Grid cellGrid = {cellGrid} func = {(i,j) => clickBehavior(i,j)}/>
            <div className = "h-32 space-y-4 grid">
              {/*
              <PauseButton />
              <MenuButton imgName = "die"
                       onHit = {(e) => {
                          if (paused) {
                            localRandom(cellGrid); 
                            setFoo(!foo);
                          } else {
                            clearGrid(loadGrid); 
                            localRandom(loadGrid); 
                            setFrameMode(FrameEnum.load);
                          }}}>
              <MenuButton imgName = "delete" 
                          onHit = {(e) => {
                            if (paused) {
                              clearGrid(cellGrid); 
                              setFoo(!foo);
                           } else {
                            clearGrid(loadGrid); 
                            setFrameMode(FrameEnum.load);
                          }}}/>
              <MenuButton imgName = ""
                          onHit = {(e) => {
                            if (paused) {
                              loadGridPC(cellGrid,saved); 
                              setFoo(!foo);
                            } else {
                              loadGridPC(loadGrid,saved); 
                              setFrameMode(FrameEnum.load);
                            }}}/>
   
                          }
*/}
                          
              <Button isIconOnly disableRipple = {true} radius = {"none"} disableAnimation = {true} onPressStart = {(e) => setPaused(!paused)}>
                {paused 
                  ? <div className = "dark:bg-[url('../play.png')] bg-[url('../play_light.png')] bg-left w-[4.5rem] h-[4.5rem] bg-contain bg-no-repeat"></div>
                  : <div className = "dark:bg-[url('../pause.png')] bg-[url('../pause_light.png')] bg-left w-[4.5rem] h-[4.5rem] bg-contain bg-no-repeat"></div>
                }
              </Button>
              <Button isIconOnly disableRipple = {true} radius = {"none"} 
                      isDisabled = {frameMode == FrameEnum.load} 
                      onClick = {
                        (e) => {
                          if (paused) {
                            localRandom(cellGrid); 
                            setFoo(!foo);
                          } else {
                            clearGrid(loadGrid); 
                            localRandom(loadGrid); 
                            setFrameMode(FrameEnum.load);
                          }}}>
                <div className = "dark:bg-[url('../die.png')] bg-[url('../die_light.png')] bg-left w-[4.5rem] h-[4.5rem] bg-contain bg-no-repeat"></div>
              </Button>
              <Button isIconOnly disableRipple = {true} radius = {"none"} 
                isDisabled = {frameMode == FrameEnum.load} onClick = {(e) => {if (paused) {clearGrid(cellGrid); setFoo(!foo);} else {clearGrid(loadGrid); setFrameMode(FrameEnum.load);}}}>
                <div className = "dark:bg-[url('../delete.png')] bg-[url('../delete_light.png')] bg-left w-[4.5rem] h-[4.5rem] bg-contain bg-no-repeat"></div>
              </Button>
              <Button isIconOnly disableRipple = {true} radius = {"none"} 
                isDisabled = {frameMode == FrameEnum.load} onClick = {(e) => {if (paused) {loadGridPC(cellGrid,saved); setFoo(!foo);} else {loadGridPC(loadGrid,saved); setFrameMode(FrameEnum.load);}}}>
                <div className = "dark:bg-[url('../reset.png')] bg-[url('../reset_light.png')] bg-left w-[4.5rem] h-[4.5rem] bg-contain bg-no-repeat"></div>
              </Button>
              <Button isIconOnly disableRipple = {true} radius = {"none"} onPressStart = {(e) => doReroute("/" + rulestr, rule.dimensions == 2 ? gridToRLE(cellGrid) : elemGridToRLE(cellGrid))}>
                <div className = "dark:bg-[url('../save.png')] bg-[url('../save_light.png')] bg-left w-[4.5rem] h-[4.5rem] bg-contain bg-no-repeat"></div>
              </Button> 
              <div>
              {!isNamed && 
                <Popup trigger = {
                  <Button isIconOnly disableRipple = {true} radius = {"none"} 
                      onPressStart = {(e) => e}>
                  <div className = "dark:bg-[url('../name.png')] bg-[url('../name_light.png')] bg-left w-[4.5rem] h-[4.5rem] ml-2 bg-contain bg-no-repeat"></div>
                  </Button>}
                position = "right center"
                arrow = {false}>
                  <p className = "tracking-tighter font-mono font-bold dark:text-[#d6dbdc] text-slate-800">{nameStatus.msg}</p>
                  <form onSubmit = {nameSubmit}>
                     <input type = "text" name = "name" autocomplete = "off" />
                     <button className = "font-mono font-bold dark:text-[#d6dbdc] text-slate-800 ml-2" type ="submit"> Submit </button>
                  </form>
                </Popup>}
              </div>

              <Button isIconOnly disableRipple = {true} radius = {"none"} onPressStart = {(e) => doReroute(rule.dimensions == 2 ? randomRule() : "/R" + (Math.floor(Math.random() * 256)).toString(),
                                                                                                           rule.pattern)}>
                <div className = "dark:bg-[url('../new.png')] bg-[url('../new_light.png')] bg-left w-[4.5rem] h-[4.5rem] bg-contain bg-no-repeat"></div>
              </Button>
               <Button isIconOnly disableRipple = {true} radius = {"none"} onPressStart = {(e) => {theme == "dark" ? setTheme("light") : setTheme("dark")}}>
                <div className = "dark:bg-[url('../light.png')] bg-[url('../dark.png')] bg-left w-[4.5rem] h-[4.5rem] bg-contain bg-no-repeat"></div>
              </Button>
              <a target = "_blank"
                 href = "https://conwaylife.com/wiki/Rulestring"> 
                <div className = "dark:bg-[url('../info.png')] bg-[url('../info_light.png')] bg-left w-[4.5rem] h-[4.5rem] bg-contain bg-no-repeat"></div>
              </a>
           </div>
          
          </div>
       : state == StatusEnum.invalid && 
         <ErrorScreen error = {error} rulestr = {rulestr} terms = {router.query.terms}/> 
      }
    </div>
   );
}

/*
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
      <p className = "font-mono dark:text-[#d6dbdc] text-red-400">{rulestr}</p>
      {valid && 
        <Grid
          cellGrid = {cellGrid}
        />
      }
    </div> :
    <p>{error.msg}</p>
  );
}
*/

export default NewPage;

