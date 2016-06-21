"use strict";
var assert = require('chai').assert;
var expect = require('chai').expect;


class Muppet {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
}

class Frog extends Muppet {
  constructor(name,age,color) {
    super(name,age)
    this.color = color;
  }
  speak(){
  return 'ribbit-ribbit';
  }
}


describe('Muppet', function(){
  it ('speaks', function(){
    //given
    var kermit = new Frog('Kermit', 12, 'green')
    //when
    var speak = kermit.speak();
    //Then
    expect(speak).to.equal('ribbit-ribbit');
  });
  it ('is green', function(){
    //given
    var kermit = new Frog('kermit', 12, 'green')
    //when
    var myFrog = kermit.color;
    //Then
    expect(myFrog).to.equal('green');
  });
})
