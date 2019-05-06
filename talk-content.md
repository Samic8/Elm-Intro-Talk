## Introduction
### Goals
- Show what elm does well
- When you might not want to use it
- Refactoring in elm

### Agenda
- What is Elm?
- Feel for the code
- The Elm Architecture
- Refactoring example
- The life of a file (maybe?)

## What is Elm?
From the elm-lang.org website:
A delightful language for reliable webapps
Generate Javascript with great performance and **no runtime exceptions**

- Functional language
- Statically type + inference
- All data is immutable
- All function are pure (no side effects)
	- When you look at function you have these guarantees
- 'null' / 'undefined' / Exceptions do not exist

### Functional Programming
## Note about about semantic incorrectness vs broken
Just because there are no exceptions does not mean you can produce code that is wrong
"The sky is green" vs "The sky is color is not a property of undefined"

You can do functional programming with JS but it requires a lot of discipline 

## The Elm Architecture 1
Replaces: npm, webpack, react, redux, typescript, immutable.js
All built in into the language / "framework"

## The Elm Architecture 2
The logic of every Elm program will break up into three cleanly separated parts:

Model — the state of your application
Update — a way to update your state
View — a way to view your state as HTML

Speaker notes:
Redux was inspired so the update pattern may look familiar

## Note on typing for function
Introduce them to this before getting into other code

## Every function is curried 
Set.member fruit model.selected
can be changed to model.selected |> Set.member fruit
Core functions use the convention of data last to allow for this kind of thing (fix)
- Ability to partialy run functions

## Walk through of example (fruit store)
Purpose is to get a feel for syntax etc. and show off my favorite feature refactoring with the compiler messages

- Talk about common formating? for fun

## Refactoring seasonality
- Maybe jump to a completed version of this then show refactoring

## Using the elm repl to learn

## References
(Elm Crash Course)[https://www.youtube.com/watch?v=kEitFAY7Gc8]
(Elm Guide)[https://guide.elm-lang.org/]