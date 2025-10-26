// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// # 
for (let i = "#"; i.length <= 4 ; i += "#") { // adds a # on every line until it is equal to 4
    console.log (i);
    while (i <= 4)
        i +=1 
}
for (let i = "###"; i.length >= 1 ; i = i.slice(0, -1)) { // subtracts a # from every line until it is equal to 1
    console.log (i);
    while (i >= 1)
        i -=1 
}



