# Slate_JS

- ### Description:
  - Create complex SVG elements with JavaScript!
  - I just wanted to make a graph with SVG but ended up making this..

- ### About
  - I took alot of inspiration from [Processing](https://processing.org/) which uses a Canvas element which is more like a traditional image with pixels, and it show's when you write the code.
  - But it doesn't work the same there is no loop so it can't be animated (YET!). \n For now it's mainly for making a static SVG.

### Advantages
#### 1. Scale.
  - SVG's are data driven graphics which means no matter how much you'll zoom on an object it wont lose it's sharp edges!
  ![untitled (2)](https://user-images.githubusercontent.com/84743239/208305657-6193148a-abba-48a8-bcfd-9a51f4cb36ee.jpg)

#### 2. *viewBox* attribute.
  -  The main SVG element has an attribute named *viewBox* which lets you move and resize the viewpoint of the SVG element. let me explain:
  - Let's start by making a new SVG with a viewBox of "0 0 100 100" and draw a thick line from 20,20 to 80,80.
  - Usually the SVG origin 0,0 is at the Top Left of the SVG, So the drawings below are actually "updside down" and is much easier to undersand since it resembles a graph we draw for math
  - ![image](https://user-images.githubusercontent.com/84743239/208307971-10a028f1-5d01-4a46-ada5-e8b2f69a0b5d.png)
  - We defined the viewBox to be "0 0 100 100" which tells the SVG that we want to see everything between 0,0 to 100,100.
  - ![image](https://user-images.githubusercontent.com/84743239/208307874-517cfa8c-a490-4f1a-bad4-d10d7e5fc81c.png)
  - What's the point?
    We can manipulate the viewBox to zoom to a specific point on the svg, somthing like that:
    `viewBox = "30 40 20 20"`
  - ![image](https://user-images.githubusercontent.com/84743239/208309322-987ce729-45d4-4e8b-8754-591d07e98451.png)
  - Which will translate into:
  - ![image](https://user-images.githubusercontent.com/84743239/208309435-9a1b0be6-d64e-424a-988a-201221a09f98.png)
  - So zooming and panning doesn't require any complex math we just change the *viewBox*.
    - Zoom and Pan is already included in the library :)


# Try it out!
### CDN:
  - `<script src="https://cdn.jsdelivr.net/gh/mangaluli/Slate_JS@main/slate.js"></script>`

## Quick start.
  - We start by adding a "\<slate>\</slate>" Tag in our HTML.
    - ![image](https://user-images.githubusercontent.com/84743239/208310770-81647031-7f1d-4c8c-ab36-951d2e49e20f.png)
    - The <slate> tag is the target to which the code will draw to.
    - If you want to size it, You'll want to wrap <slate> and style the wrapper.
  
  - Now in our code, let's start by defining a new Slate object and drawing a red rectangle!
    - ![image](https://user-images.githubusercontent.com/84743239/208311100-451d176a-ad63-4622-9b1b-9590ea473f3d.png)
  - We will get this:
    - ![image](https://user-images.githubusercontent.com/84743239/208311692-5b2bd030-2087-4ce2-bd21-ce6a51c478f2.png)
    - The code is preety self explaniroty but let me explain it in depth:
      - `let slate = new Slate(0, 0, 100, 100);`
      - We defined a new Slate object under the "slate" alies.
      - `slate.background('white');`
      - We set the background color of the main SVG element.
      - `slate.fill('red');`
      - We define the fill color of the svg element's to come after this line. We save that value in memory and each time we add a new shape to the SVG it get it's fill value from memory. Which makes it more organized.
      - `slate.rect(20, 30, 20, 20);`
      - We add a rectangle at point 20,30 of width and height of 20.
      - as you can see it's red because we defined the fill color as red at Line 8.
      - `slate.render();`
      - The main function that Generates the SVG element and its chilren and appends it to the "<slate>" element.

# TODO:
- ## Working on it.
  - [ ] - Complete this Documentation.

- ## Que.
  - [ ] - Replace Documentation images with animated ones
  - [ ] - Add a resposive predefined Grid generator.
  - [ ] - Add a responsive mouse coordinate.
  

- ## Maybe:
  - [ ] - Interactable svg elements, like showing coordinates of the hoverd point on a graph.

# Disclaimer
It's not perfect but its pretty fast and reliable.


# License
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>
