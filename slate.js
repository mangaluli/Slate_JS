class Slate {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.magazine = [];
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.target = document.querySelector('slate');


    // - svg related
    this.style__fill;
    this.style__fill_opacity;
    this.style__stroke;
    this.style__stroke_opacity;
    this.style__stroke_width;

    // - font related
    this.style__font_size;
    this.style__font_family;
    this.style__text_decoration;

    // Other
    this.scaleX = 1;
    this.scaleY = 1;

  }

  // Shape Constructors
  line = (x1, y1, x2, y2) => this.magazine.push([true, 'line', x1, y1, x2, y2]);
  polyline = array => this.magazine.push([true, 'polyline', array]);
  rect = (x, y, width, height) => this.magazine.push([true, 'rect', x, y, width, height]);
  circle = (cx, cy, r) => this.magazine.push([true, 'circle', cx, cy, r]);
  ellipse = (cx, cy, rx, ry) => this.magazine.push([true, 'ellipse', cx, cy, rx, ry]);
  text = (x, y, text, font) => this.magazine.push([true, 'text', x, y, text, font]);


  // Style Constructors
  fill = color => this.magazine.push([false, 'fill', color]);
  fillOpacity = opacity => this.magazine.push([false, 'fill_opacity', opacity])
  stroke = color => this.magazine.push([false, 'stroke', color]);
  strokeOpacity = opacity => this.magazine.push([false, 'stroke_opacity', opacity]);
  strokeWidth = width => this.magazine.push([false, 'stroke_width', width]);
  fontSize = size => this.magazine.push([false, 'font_size', size]);

  // Etc.. Constructors
  background = color => this.svg.style.backgroundColor = color;
  mirrorX = () => this.scaleX *= -1;
  mirrorY = () => this.scaleY *= -1;

  // Core Functions
  move(x, y, width, height) {
    this.svg.setAttribute('viewBox', `${x} ${y} ${width} ${height}`);
  }

  render = () => {
    this.move(this.x, this.y, this.width, this.height);
    this.svg.style.transform = `scale(${this.scaleX}, ${this.scaleY})`;

    this.target.innerHTML = '';
    this.svg.innerHTML = '';

    this.magazine.forEach(bullet => {
      if (bullet[0]) {
        let svg_element;

        switch (bullet[1]) {
          case 'line':
            svg_element = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            svg_element.setAttribute('x1', bullet[2]);
            svg_element.setAttribute('y1', bullet[3]);
            svg_element.setAttribute('x2', bullet[4]);
            svg_element.setAttribute('y2', bullet[5]);
            break;

          case 'circle':
            svg_element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            svg_element.setAttribute('cx', bullet[2]);
            svg_element.setAttribute('cy', bullet[3]);
            svg_element.setAttribute('r', bullet[4]);
            break;

          case 'ellipse':
            svg_element = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
            svg_element.setAttribute('cx', bullet[2]);
            svg_element.setAttribute('cy', bullet[3]);
            svg_element.setAttribute('rx', bullet[4]);
            svg_element.setAttribute('ry', bullet[5]);
            break;

          case 'rect':
            svg_element = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            svg_element.setAttribute('x', bullet[2]);
            svg_element.setAttribute('y', bullet[3]);
            svg_element.setAttribute('width', bullet[4]);
            svg_element.setAttribute('height', bullet[5]);

            bullet[6] && svg_element.setAttribute('rx', bullet[6]);
            break;

          case 'text':
            svg_element = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            svg_element.setAttribute('x', bullet[2]);
            svg_element.setAttribute('y', bullet[3]);
            svg_element.innerHTML = bullet[4];

            this.style__font_size && svg_element.setAttribute('font-size', this.style__font_size);

            svg_element.style.transform = `scale(${this.scaleX}, ${this.scaleY})`;
            break;

          case 'polyline':
            svg_element = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
            svg_element.setAttribute('points', bullet[2].reduce((acc, vector) => acc += ` ${vector[0]},${vector[1]} `))
        }

        this.style__fill && svg_element.setAttribute('fill', this.style__fill);
        this.style__fill_opacity && svg_element.setAttribute('fill-opacity', this.style__fill_opacity);
        this.style__stroke && svg_element.setAttribute('stroke', this.style__stroke);
        this.style__stroke_opacity && svg_element.setAttribute('stroke-opacity', this.style__stroke_opacity);
        this.style__stroke_width && svg_element.setAttribute('stroke-width', this.style__stroke_width);

        this.svg.appendChild(svg_element);

      }

      else {
        this[`style__${bullet[1]}`] = bullet[2];
      }

    })

    this.target.appendChild(this.svg);
  }
  clear = () => this.magazine = [];

  // Mouse Interaction
  drag = () => {
    this.svg.onmousedown = e => {
      this.dragging = true;
      this.dragX = e.clientX;
      this.dragY = e.clientY;
    }

    this.svg.onmouseup = () => {
      this.dragging = false;
      this.x += this.scaleX == '1' ? -this.deltaX : this.deltaX;
      this.y += this.scaleY == '1' ? -this.deltaY : this.deltaY;
    }

    this.svg.onmousemove = e => {
      if (this.dragging) {
        let svgSize = this.svg.getBoundingClientRect();

        this.deltaX = (e.clientX - this.dragX) / (svgSize.width / this.width);
        this.deltaY = (e.clientY - this.dragY) / (svgSize.height / this.height);

        this.move(this.scaleX == '1' ? (this.x - this.deltaX) : (this.x + this.deltaX), this.scaleY == '1' ? (this.y - this.deltaY) : (this.y + this.deltaY), this.width, this.height);

      }
    }
  }

  zoom = () => {
    this.svg.onwheel = e => {
      let stepX = this.width / 10;
      if (e.deltaY > 0) {
        this.x -= stepX;
        this.y -= stepX;
        this.width += stepX * 2;
        this.height += stepX * 2;
      }
      else {
        this.x += stepX;
        this.y += stepX;
        this.width -= stepX * 2;
        this.height -= stepX * 2;
      }
      this.move(this.x, this.y, this.width, this.height);
    }
  }

  // UI Predefs?
  grid = () => this.grid = true;
}