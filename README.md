## Cellular Automata Rulestring Parser and Simulator

https://nxtlife.vercel.app/

This is an old NextJS project I made after struggling to find an online simulator capable of running the common notations for cellular automata rules that are [Life-like](https://conwaylife.com/wiki/Life-like_cellular_automaton), [Elementary](https://en.wikipedia.org/wiki/Elementary_cellular_automaton), [Generations based](https://conwaylife.com/wiki/Generations), or [BSFKL](https://conwaylife.com/wiki/BSFKL). This simulator also supports [Hensel Notation](https://conwaylife.com/wiki/Isotropic_non-totalistic_rule#Square_grid). 

The grammars for the different rule variations are as follows:

```
<Lifelike> ::= "B" <2d-neighbors> "/S" <2d-neighbors>

<Elementary> ::= "R" <rule-number>

<Generations> ::= <Lifelike> "/G" <DIGIT>

<BSFKL> ::= <Lifelike> "/F" <2d-neighbors> "/K" <2d-neighbors> "/L" <2d-neighbors>

Where <2d-neighbors> is a string of ascending digits bound from 0 to 8,
with the optional inclusion of Hensel notation modifiers. For example:
- 23
- -i34q
- 089
- ci3ai4c8
- 
- 2-c34z 
```

It's not necessary to fully understand the syntax of rulestinrg notations to use this site, clicking the right arrow icon will change the viewer to simulate a random valid rulestring.




