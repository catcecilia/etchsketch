1. Create webpage with 16x16 grids using JavaScript.
2. Set up hover effect to change div colors when your mouse passes over
3. Add a button on the top of the screen which will clear the screeen
   3a. After, a popup should be made asking how many squares per side to make a new grid, limit user input to max 100
4. Allow for different color change (black, white, rgb user input)

**_ My thought process _**

1. create the forms to the left, have them with placeholders of 16 per side, black etching color (upon javascript start, these are default)

2. in div #container, remove everything and then -> if submit was not done, push 16x16 grid if submit was not done. if submit was done, push the _user input number_ x _user input number_ grid

3. when a color is checked, use that color for on hover & post hover

4. similar to RPS game, create a box of different color choices, upon clicking random, call a funciton that chooses between a set amount of colors
