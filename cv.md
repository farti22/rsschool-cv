# Artur Mazanik

## Contacts

+ **E-mail**: artur.maza33@gmail.com
+ **Github**: [farti22](https://github.com/farti22)
+ **Discord**: F21-A#1246

## About Me

I live in Minsk, and dream to becoming a professional and demended developer. My current level of knowledge, it seems to me, is quite small, but it motivates me to explore everything new and unknown. My dream is to become a team lead, I love to help people and solve problems together. I like to eat tasty, so I learn to cook tasty. Also I like to write sad poems, they help to leave my negative emotions and move forward. I believe that even if you choose the wrong path, you can still return.

## Skills

+ **HTML/CSS**
+ **JS**
  + **Core**
  + **NodeJS**
  + **VueJS**
+ **C++**
+ **Git**
+ **SQL**
  + **PostgreSQL**
  + **SQLite**
+ **Lua**

## Experience

1. **Gmod Lua Scripts** *(2017-2019)*
2. **Discord Bot on JS** *(2020-2021)*
3. **Coursework in C++** *(2021)*
4. **Minsk State College of Electronics, Technician-programmer** *(2020-to date)*

## Education

+ **Stepik** helped me get on my feet in terms of the basics of programming
+ **College** gave me knowledge of the basics of OOP, C++ and JS
+ **learn.javascript.ru** told me what kind of beast it is, this JavaScript
+ **YouTube**  opened my eyes and I saw what is a frameworks, middleware, containerization, principles (for example, SOLID) and more

***These resources help me become better - JavaScript.Ninja, JavaScript30, VueSchool, Metanit, MDN Web Docs***

## Code example

```js
class Duck {
  constructor(name, status) {
    this.name = name;
    this.status = status;
  }
}

class DuckWorker extends Duck {
    constructor(name, status, func) {
        super(name, status)
        this.stamina = 2;
        this.work = func;
    }
}

function workFactory(){
    console.log(`${this.name} works hard`);

    if (this.stamina > 0) {
      this.stamina--;
    } else {
      console.log(`${this.name} very tired :<`)
      this.status = ""
    }
}

function sleep(){
    console.log(`${this.name} quack...`);
    this.stamina++;
}

let someWeirdDuck = new DuckWorker("Vlad", "Worker", workFactory)
someWeirdDuck.work(); // Vlad work hard
someWeirdDuck.work(); // Vlad work hard
someWeirdDuck.work(); // Vlad very tired :<
sleep.call(someWeirdDuck); // Vlad quack...
someWeirdDuck.work(); // Vlad work hard

```

## Languages

+ **Russian** *(Native)*
+ **English** *(A2)*
