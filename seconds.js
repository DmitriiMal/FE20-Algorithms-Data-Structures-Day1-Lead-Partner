let input = 2000000;
let ww = input / 604800;
let dd = (input % 604800) / 86400;
let hh = ((input % 604800) % 86400) / 3600;
let mm = (((input % 604800) % 86400) % 3600) / 60;
let ss = ((((input % 604800) % 86400) % 3600) % 60) / 1;
console.log(ww + " weeks, " + dd + " days, " + hh + " hours, " + mm + " minutes, " + ss + " seconds. ");