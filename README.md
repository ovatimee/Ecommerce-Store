## **Pendant-Light-Product-Page**
 

This doesn't seem like much but I really enjoyed working on this mini project. This made me know how poswerful `CSS` can be

There're some fews Tips and tricks I learnt I'll share in this Markdown

- Made the light shades with `CSS`
- Made the pendant lines with `CSS`
- Adding `JS` to toggle the light on and off.

### **Screenshot on mobile view**

<!-- ![](./Screen%20Shot%202022-07-09%20at%2013.05.06.png) -->
Light Toggled On             |  Light Toggled Off
:-------------------------:|:-------------------------:
<img src="./Screen Shot 2022-07-09 at 13.05.06.png" width="300" height="600"/>  |  <img src="./Screen Shot 2022-07-09 at 13.24.36.png" width="300" height="600"/>


### - Live Site URL: [Pendant-Light](https://pendant-light-product-page.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### **I decided to code this in Vanilla**

>_I really like doing things the native way as well. I mean it doesnt hurt and once you have a strong fundamentals of the basis. You should be pretty much comfortable doing anything as!_



### What I learned

I discovered new `CSS` rules whiles working on the shades of the light. `CSS` is powerful but can be intimidating. You must have patience and be able to pay attention to details. And it applies in every aspect of coding. Paying attention to details is really important and helpful.


>I created the shades with two spans using ```position: absolute``` to position under the light frame and the rules below made the rest of the magic for me

```css
.shade span {
    background: linear-gradient(180deg, #ff6d28 0%, transparent 100%);
    transform: perspective(10px) rotateX(3deg);
    opacity: .35;
    mix-blend-mode: plus-lighter;
}
```


### SwiperJS code snippet

```js
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    cliackable: true,
  },
  breakpoints: {
    641: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
});
```

**Note: I used [SwiperJS](https://swiperjs.com/) for the carousel. This is not my first time using the library but just adding it incase anyone ever wondered..**

### Continued development

>I really liked working on the backend cus I love writing Javascript but this mini project has opened my eyes to the wonders of `CSS` and I've decided to do daily challenges to improve my css skils


### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.
