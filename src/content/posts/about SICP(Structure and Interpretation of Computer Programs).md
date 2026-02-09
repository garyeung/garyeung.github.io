---
title: 'Why should you still read Structure and Interpretation of Computer Programs(SICP)?'
pubDate: 2026-02-09
author: 'Gary Yeung'
description: 'Nowadays, Everyone can program with the help of AI -- so-called "vibe coding". AI is great, but can you really build robust applications without knowing anything about programming?'
tags: ['programming']
---

## Foreword
Nowadays, Everyone can program with the help of AI -- so-called "vibe coding". AI is great, but can you really build robust applications without knowing anything about programming? It's as ridiculous as performing surgery by yourself by following AI instructions.

If you want to understand the underlying mechanism of programming, I recommend reading Structure and Interpretation of Computer Programs(SICP). This book is not intended for beginners with little programming experience. For those, I recommend learning the basics with AI or online programming tutorials. 
This book is intended for those who want to deepen their understanding of computer programming concepts and fundamentals.


## What SICP is?
SICP was the basis of MIT's entry-level computer science subject since 1980, for nearly 30 years. It is classic and timeless.

SICP uses Scheme, a dialect of Lisp for teaching purposes. It is simple, elegant and intuitive, and you can easily learn it to express your ideas without even noticing the language itself. It helps you to grasp the fundamentals of programming without encountering syntactic barriers.

You might ask, "Can I gain programming experience without learning SICP?"

The answer is yes. You can become an expert programmer without reading it. You can also take more modern courses, such as 61A or 60CS, to learn programming. However, an expert programmer should still not overlook SICP.

## Summary of chapters
1. [Building Abstractions with Procedures](#1-building-abstractions-with-procedures) 
2. [Building Abstractions with Data]()  
3. [Modularity, Objects, and State]()   
4. [Metalinguistic Abstraction]()  
5. [Computing with Register Machines]() 


## 1. Building Abstractions with Procedures

### 1.1 The Elements of Programming
Chaper one, subsection one, 'The Elements of Programming', establishes the basic mechanisms of every powerful language:
> - primitive expressions, which represent the simplest entities the language is concerned with,
> - means of combination, by which compound elements are built
from simpler ones, and
> - means of abstraction, by which compound elements can be named
and manipulated as units.  [^1]

You can find the above elements in any modern computer language.

The two fundamental programming concepts of 'procedures' and 'data' can be the same thing.  
'Scope' or 'environment' should keep track of the named objects.  
You can name procedures, which are steps of programs' operations.

Procedures should be seen as black boxes. Users don't need to understand the mechanisms of the procedures. They only need to know how to use them. Therefore, even though procedures are implemented using different machanisms, if they produce the same result, they are the same procedure. This is known as procedural abstraction.


### 1.2 Procedures and the Processes They Generate

The topic of procedures and processes is explored in sbusection two.

> A procedure is a pattern for the local evolution of a computational process. It specifies how each stage of the process is built upon the previous stage.  [^2]

- Recursion continues to defer the operation before reaching the terminal condition, thus increasing the amount of information that needs to be tracked.

By contrast, 
- An iteration process does not grow and shrink. At each step, we only need to keep track of only a fixed number of state variables until the termination condition is met.


This book also illustrates the interesting concept of the differences between the notions of a recursive process and a recursive procedure.

>    When we describe a procedure as recursive, we are referring to the syntactic fact that the procedure definition refers (either directly or indirectly) to the procedure itself.   
>But when we describe a process as following a pattern that is, say, linearly recursive, we are speaking about how the process evolves, not about the syntax of how a procedure is written.  [^3] 

Therefore, a recursive procedure can generate iterative processes.

Most mainstream languages (Python, Java, C#) do not optimize for iterative processes written as recursive procedures. If you write a "recursive procedure" in Python to handle a million items, you will get a RecursionError (Stack Overflow).  
In these languages, you are forced to use 'for' or 'while' loops to achieve an Iterative Process. SICP teaches you that the process is what matters; the loops are just a syntax for managing the state variables.


### 1.3 Formulating Abstractions with Higher-Order Procedures

Subsection three then delves into higher-order procedures, which manipulate other procedures as either arguments or as returned values. This enables procedures to express general methods of computation.

In Lisp, procedures have first-class status: 
> - They may be named by variables.
> - They may be passed as arguments to procedures.
> - They may be returned as the results of procedures.
> - They may be included in data structures.  [^4]

> Lisp, unlike other common programming languages, awards procedures full first-class status. This poses challenges for efficient implementation, but the resulting gain in expressive power is enormous. [^5]

[^1]: Page 6.
[^2]: Page 42.
[^3]: Page 45.
[^4]: Page 102.
[^5]: Page 102 -103.