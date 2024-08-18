---
layout: post
title: Getting Started With golang
image: /assets/images/golang.png
category: Programming Language
---
### Getting Started with Go: A Beginner's Guide

While working at TSMC as a Software Engineer, I joined a new project and in this project we were using Golang for our backend service.

At that time, I had not worked with Golang before, so I took a week to learn about Golang and build a few small projects. I had previously worked with C/C++, Python, Java, JavaScript, and other languages, so I didn't have much difficulty learning it. I found its syntax very similar to C. However, some things were totally different, like error handling, which is quite distinct (you might say it’s similar to C, but it’s not). Golang doesn't have the concept of try and catch. Concurrency is on a completely different level; things like goroutines and synchronization primitives like channels and select can be used to replace (or at least partially replace) traditional primitives like locks, mutexes, semaphores, and conditional variables. Additionally, defer statement (executed after their surrounding statements have been executed, in LIFO order).

This blog is a note that I made while leaning `golang`. This isn't complete yet. 

---

## Golang
Compiled, statically typed, strongly typed language

## Declaration
- `var a int`  // initialized with zero value 
> In `Go`, there is a concept of zero value. There is a zero value for all primitive types: for `int`, the zero value is 0, and for `bool`, the zero value is `false`.

### Short Declaration
- `a := 2`  // only inside a function, type is inferred from value at compile time

### Parallel Assignment
- `x, y := 1, 3 ` // like Python

## Memory Allocation
- `new(T)` // returns `*T`, a pointer, allocated with the zero value of `T`
- `make([]T, len, cap)` // returns `[]T`, used for slices, maps, channels 
- `T{}` // composite literal; instead of `new`, can be used to initialize, and is favored over `new`

## Array/Slice
- `[10]int` // array, size is also a part of the array type, `[5]int` and `[10]int` are of different data types 
- `[]int` // slice, we can think of this as a vector in C++ or an ArrayList in Java
> Favored over arrays because most of the time we don't know the size in advance.
> `append([]int, int)` adds an element to the end of a slice
> `delete([]int, int)` deletes the element at the `i`th index
> `nil` is the zero value of a slice

## Map
- `map[key-type]value-type` // e.g., `map[int]string`
- `m := make(map[int]string)` // create an empty map
- `m[1] = 'value'` // set key-value pair
- `for key, value := range m` // iterate over the map `m`
- `delete(map, key)` // delete entry with `key=key`

## Type
```go
bool
string
int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr
byte // alias for uint8
rune // alias for int32
     // represents a Unicode code point
float32 float64
complex64 complex128
```

### Type Conversion
- `type(value)` // e.g., `int(4.2)`

### Type Assertion
- `val, ok := t.(type)`

### Type Alias
- `type myint int` // like typedef in C

### Any Type
- `interface{}` // `any` is an alias for `interface{}`, if you want to use the value of any type, you need to do type assertion first

### Constant
- `const Pi = 3.14`

## Control Blocks 
- `if-else`
```go
if InitSimpleStatement; Condition {
	// do something
} else {
	// do something
}
```
- `for`
```go
for InitSimpleStatement; Condition; PostSimpleStatement {
	// do something
}
```  
- `for-range`
```go
for i := range integer|slice|map|channel|string {
	// do something
}
```
- `switch-case` // no need for `break`, only one of the cases will be executed
```go
switch InitSimpleStatement; CompareOperand0 {
case CompareOperandList1:
	// do something
...
default:
	// do something
}
```
- `goto` // `goto` statement with a long history; while most modern programming languages provide `goto`, it is considered that control statements like `if-else`, `for-loop`, and `switch-case` are enough to express any logic. `goto` makes code less readable and more complex, hence there is no need for it in modern high-level programming languages.

- `select-case` // it is specially designed for channels. You won't find this in other programming languages. Ref: [Go101 Article on Channels](https://go101.org/article/channel.html#select)

## Code Blocks
- `package` // a folder with a collection of files
- `module` // collection of packages
- `workspace` // collection of modules
- `func` // functions like in C/C++/Python/JavaScript
- `struct` // collection of fields like in C/C++
- `interface` // similar to TypeScript

#### Next Steps

If you want to further continue your journey in Go (haha), you may want to look into different libraries and projects implemented in Golang.  

Here are some useful resources for exploring common Go libraries and famous projects:
### Common Go Libraries:
1. **[Awesome Go](https://github.com/avelino/awesome-go)**: A curated list of Go frameworks, libraries, and software. It's a great place to find popular libraries for various tasks.
   
2. **[GoDoc](https://pkg.go.dev/)**: The official documentation hub for Go packages. You can search for packages and see how they’re used.

3. **[Go Standard Library](https://pkg.go.dev/std)**: The standard library is powerful and covers many common needs. This link provides detailed documentation and examples.

### Famous Go Projects:
1. **[Kubernetes](https://github.com/kubernetes/kubernetes)**: An open-source system for automating deployment, scaling, and management of containerized applications. It's one of the most famous projects built with Go.
   
2. **[Docker](https://github.com/moby/moby)**: A platform to develop, ship, and run applications inside containers. Docker’s core components are written in Go.

3. **[Hugo](https://github.com/gohugoio/hugo)**: A fast and flexible static site generator written in Go. It's widely used for building websites and blogs.

4. **[Prometheus](https://github.com/prometheus/prometheus)**: A monitoring system and time series database, often used in conjunction with Kubernetes for monitoring cloud-native applications.

5. **[Terraform](https://github.com/hashicorp/terraform)**: An open-source tool for building, changing, and versioning infrastructure safely and efficiently. It’s widely used in DevOps for infrastructure as code (IaC).

These resources should give you a solid start in exploring the Go ecosystem!

## Refrences 
- https://go.dev/learn/
- https://go101.org/article/control-flows.html