# README WIP!

# Slate_JS
##### (All pictures below were generated using Slate.js)


### Description:
- Create complex SVG elements with JavaScript!
- I took alot of inspiration from [Processing](https://processing.org/).

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
#### (TO BE CONTINUED... )

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
  
# Chatsheet.
- ## *Rectangle*
  `.rect(x, y, width, height);`
  ```javascript
  let slate = new Slate(0, 0, 100, 100);

  slate.backgroud('white');

  slate.fill('green');

  slate.circle(20, 20, 20);
  slate.circle(20, 50, 4);

  slate.stroke('purple');

  slate.circle(30, 80, 10);

  slate.render();
  ```
  ![image](https://user-images.githubusercontent.com/84743239/  208319008-d6830045-b2ff-4e3b-a670-b0557faa98c4.png)
---
- ## *Circle*
  <table>
    <tr>
      <td style="font-weight: bold; font-size:1.4rem;">
          .circle(cx, cy, r)
      </td>
      <td> 
        <p>
          cx - X coordinate of circle center <br> 
          cy - Y coordinate of circle center <br> 
          R = Radius.
        </p> 
      </td>
      </tr>
    <tr>
  <td>

    ```javascript
    let slate = new Slate(0, 0, 100, 100);
    
    slate.background('white');
    slate.fill('blue');
    
    slate.circle(20, 20, 20);
    slate.circle(50, 50, 10);
    slate.circle(30, 80, 5);
    
    slate.render();
    ```
  </td>
    <td>
      <img src="https://user-images.githubusercontent.com/84743239/208547915-bea159ff-9e2e-4e93-a6c8-f4e22e4a78e0.png">
    </td>
  </tr>
  </table>


---
## *Ellipse*
  
---
# TODO: 

- [ ]  Better README..
- [ ]  Add a Grid generator.

+ ## Maybe:
- [ ]  Add mouse interactions.
