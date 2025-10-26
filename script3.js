// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
for (let i = 1; i <= 8; i++) { 
    if (i % 1 === 0 && i % 2 === 0) { // if i is divisible by both 1 and 2 it will display # # # #
        console.log ("# # # # # # # #")
    } else if (i % 1 === 0) { // if i is divisible by 1 it will display # # # #
        console.log (" # # # # # # # #")
    } else {
        console.log (i) // if i is not divisible by 1 or 2 it will display nothing
    }
}