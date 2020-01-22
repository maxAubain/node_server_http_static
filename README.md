## Owners
- Developer: Max Aubain, @maxAubain

## Summary
1. This is a coding exercise to instantiate a Node HTTP server with basic, async response calls.
2. This example is inspired from Ch. 2 of [_Web Development with Node & Express_](http://shop.oreilly.com/product/0636920261216.do) by [Ethan Brown](https://github.com/EthanRBrown), @EthanRBrown.

## Challenges and Solutions
1. Challenge: Needed to brush up on regex...
    - https://www.shortcutfoo.com/app/dojos/regex/cheatsheet
    - https://www.keycdn.com/support/regex-cheatsheet
    - https://regexr.com/ is a regex translator
    - Definitions
        0. /.../ = opening of regular expression
        1. \ = escape a special char
        2. ? = match preceeding 
        3. $ = end string
        4. . = "wildcard" matches any char except /n
        5. star = Used to match 0 or more of the previous (e.g. xy*z could correspond to “xz”, “xyz”, “xyyz”, etc.

<!---
  (/\/?(?:\?.*)?$/, '') = 
  [/ = begin regex]
  [\/ = escaped "/"]
  [? = match between 0 and 1 of preceeding token]
  [(?: ) = non-capturing group]
  [/? = escaped "?"]
  [.] = any char but not linebreak
  [*] = match 0 or more of the preceeding token
  [? = match between 0 and 1 of preceeding token]
  [$ = end of string]
  [/ = end regex]
-->