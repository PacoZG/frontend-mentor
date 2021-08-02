# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![Desktop Screenshot](./screenshots/desktop.png "3 Column Preview")
![Mobile Screenshot](./screenshots/mobile.png "3 Column Preview")

### Links

- Solution URL: [GitHub](https://github.com/PacoZG/frontend-mentor/tree/master/src/3ColumnPreview)
- Live Site URL: [Vercel deployment](https://frontend-mentor-sage.vercel.app/3_column_preview)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### What I learned

I mainly used many of the tool and skills learn in the course [Full Stack 2021](https://fullstackopen.com/) and others that I learn by working in personal project.

- Overflow control
- A bit better understanding of object position
- Integration of new font families

```html
<div className="h-full w-full absolute overflow-hidden">
  <img
    className=" absolute transform -translate-x-48 -top-28 sm:-translate-x-72 sm:-top-100"
    alt="background"
    src="{Top}"
  />
  <img
    className="absolute transform translate-x-52 translate-y-100 sm:translate-x-104 sm:left-52"
    alt="background"
    src="{Bottom}"
  />
</div>
```

Better idea of how to work with raw CSS and it's responsiveness

```css
@media (max-width: 768px) {
  /* For mobile phones: */
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
  }

  .card1 {
    background-color: hsl(31, 77%, 52%);
    border-radius: 6px 6px 0px 0px;
  }

  .card2 {
    background-color: hsl(184, 100%, 22%);
  }

  .card3 {
    background-color: hsl(179, 100%, 13%);
    border-radius: 0px 0px 6px 6px;
  }
}
```

### Continued development

I will integrate all the challenges in one [vercel deployment](https://frontend-mentor-sage.vercel.app) on which all of them will be visible and easy to find

## Author

- Website - [Francisco Zavala](https://pacoder-cv.vercel.app/)
- Frontend Mentor - [@PacoZG](https://www.frontendmentor.io/profile/PacoZG)
- LinedIn - [francisco-zavala](https://www.linkedin.com/in/francisco-zavala/)
- GitHub - [PacoZG](https://github.com/PacoZG)
