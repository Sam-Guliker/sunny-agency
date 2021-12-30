# Frontend Mentor - Sunnyside agency landing page solution


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://sunny-agency-iq0h5za3c-samguliker.vercel.app/)
- Live Site URL: [Add live site URL here](https://sunny-agency-iq0h5za3c-samguliker.vercel.app/)

## My process

I started out to write all the components out on a whiteboard, I put in 1 hour for every mobile component and a half hour for the desktop version.
It would take less time since it's only the CSS that needed to switch. After that I did all the hover effects.
I tried to put in the locomototive scroll but unfortunatly it didn't work out, maybe for another project ;).
After everything was finished up, I started to deploy the app and test it on different devices.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Typescript](https://reactjs.org/) - JS library
- [Sass](https://sass.com/) - For styles


### What I learned

I haven't really used typescript before. It was a nice way to introduce the types and how to use them.
```js
import { ResponsiveImage } from "./lib/ResponsiveImage";

type BlokProps = {
    special: boolean;
    img: string;
    title: string;
    paragraph: string;
    readMore: boolean;
    color: string;
    small: string,
    large: string,
};

export function Blok ({readMore, color, special, img, title, paragraph, small, large}: BlokProps) {
    return (
        <section className={`blok-container ${special ? 'special' : ''}`}>
            <ResponsiveImage 
                className={`blok-image ${special ? 'no-padding' : ''}` } 
                src={img} 
                small={small} 
                large={large} 
                alt={img} 
            />
            <div className={`article-container ${special ? 'no-background' : ''} `}>
                <article className={`article ${color === 'green' ? 'green' : ''}${color === 'blue' ? 'blue' : ''}`}>
                    <h2 className="heading-02">{title}</h2>
                    <p className="paragraph-01">{paragraph}</p>
                    
                    {readMore && <div className="button-container">
                        <a className="btn">Learn more</a>
                        <div className="stripe"></div>
                    </div>
                    }
                    
                </article>
            </div>
        </section>
    )
}
};
```

Another thing that kind of annoyed me was the srcSet.
I tried to make it render different images for different sizes but the mac resolution kept changing my image.
So I decided to do it with CSS instead.

### Continued development

I want to focus on making a bit more slick animations and I will keep using typescript and react together. It's a nice combo :)

### Useful resources

- [Mdn srcset images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) - Seems like a good article but the images I had to use didn't work with it. But it's still worth using, knowing you can place different images for different sizes and improve the performance helps a lot.

## Author

- Frontend Mentor - [@Sam-Guliker](https://www.frontendmentor.io/profile/Sam-Guliker)