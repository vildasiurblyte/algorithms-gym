# Algorithms gym

This repo is my personal "algorithms gym" - a place where I practice and document everything I learned from the Algorithms & Data Structures course on <a href="https://frontendmasters.com/courses/algorithms">Frontend Masters</a>.


# The Last Algorithms Course You'll Need

Here are my notes, code examples, and exercises that helped me understand core computer science concepts in a hands-on way. It's a mix of learning, experimenting, and sharpening problem-solving skills.

## Basics

### Big O Time Complexity

Big O categorizes an algorithm on time or memory based on the input. It's not meant to be an exact measurment. Basically, it is a generalized way for you to understand how your algorithm will react as yuor input grows. 

So, if someone says, that the algorithm is O(n) what they mean is your algorithm grows linearly based on input.

#### Why do we use it?

It often helps us make decisions on why you should or should not use a specific data structure. For some data structures one needs to make constraints in order to make them more performant, because using them incorrectly may result in bad performance. 

## Arrays Data Structure

Arrays documentation can be found [here](/src/algorithms/arrays/README.md).

## Search

### Linear search

Running time of linear search is 0(n). The implementation can be found [here](/src/algorithms/search/LinearSearchList.ts).

### Binary search

An important question you should always ask yourself when it comes to your data set, is it ordered? If your data set is ordered, you have new advantages you can take with that data.

Running time is O(logN). Implementation can be found [here](/src/algorithms/search/BinarySearchList.ts).

### Two Crystal Balls Problem

Given two crystal balls that will break if dropped from high enough distance, determine the exact spot in which it will break in the most optimized way.

We could use linear search, but the running time will be O(n), which does not meet the task criteria - find the most optimized way. To make this more efficient we could "walk" in different unit, for example, square root of N. So that means that we will walk the array a square root amount of times until it breaks. And if it breaks, we have to walk backwards to our last known good point and find the point of breaking. So, the running time would be O(square root of N). 

Implementation can be found [here](/src/algorithms/search/TwoCrystalBalls.ts).

## Sort 

### Bubble sort

One of the most simplest sorting algorithms. General definition of a bubble sort is this, any x sub i, meaning ith position within array, is going to be less than or equal to any i + 1. This is true for the entire array. That is how we know an array is sorted.

If we have an array that's not sorted, this property does not hold true universally. It may hold true in specific instances but not universally. 

How bubble sort works? It starts in the zeroth position and it's going to go to the end of the array. What it is going to do is going to look at the element next to it (element + 1), and if the current element is larger that the one next to it, they will swap positions. That's the entirity of the algorithm. 

A singular iteration will always produce the largest item in the last spot. That means the next time we do the bubble sort we only have to go up to but not include the last position, because it is already sorted.

The first time we go through the array, we do n checks. The second time we only have to do n - 1 checks and so on. After dropping the constants and the insignificant values, the running time of this algorithm is O(n square).

Implementation can be found [here](/src/algorithms//sort/BubbleSort.ts)

### Linked list

### Queue

### Stack

## Arrays

### Arrays vs Linked List

### ArrayList

### RingBuffer

## Recursion

### Path finding: Base Case

### Path finding: Recursive Case

## Quick Sort

## Doubly Linked List

## Trees

## Tree Search

### Breadth-First Search

### Depth-First Search

## Heap

### Tries

## Graphs

### Searching an Adjacency Matrix

### Dijkstra's Shortest Path

## Maps & LRU

### Maps

### LRU Cache


