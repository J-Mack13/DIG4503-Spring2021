import Fetch from './Fetch.js';

const work = new Fetch(420, "#aceace"); 
work.fetch();

const workNot = new Fetch(-666, "#decdff"); 
workNot.fetch();