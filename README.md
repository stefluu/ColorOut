# ColorOut

Background and Overview:

* `ColorOut` is a single player maze game of a white maze on a white background. Finding the exit to each level will move the player to the next level/new maze. 

* The player will start at the entrance to the maze, and use the arrow keys to navigate the maze. The player will also have control of shooting color in the forward direction.

* Shooting color will render color upon the maze's white walls to aid in distinguishing walls and exiting the maze.

* A level# display will increment upon completion of each level.

Functionality and MVP Features

* New mazes are randomly generated

* Maze has collision detection

* Player can: 

    - Navigate with arrow keys
    - Shoot colors in the forward direction, which colorizes the walls of the maze
    - Enter a new maze upon completion of previous level

* Level counter increments upon level completion

Wireframe:

![](https://github.com/stefluu/ColorOut/blob/master/ColorOut%20Wireframe.png)

Architecture and Technologies

* Vanilla Javascript - for logic
* HTML5 Canvas - for rendering

Implementation Timeline

* Day 1: 
    - Research and understand how to generate maze

* Day 2: 
    - Render generated mazes

* Day 3 - 5: 
    - Put user into maze
    - Test user movement and collision detection
    - Test rendering of new maze upon completion of current maze

* Day 6-7: 
    - Implement directional shooting and color rendering
