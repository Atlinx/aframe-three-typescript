import"./aframe-master.5ce7d00f.js";import{s as y,B as p}from"./test-helpers.e2d6220c.js";var f=Object.defineProperty,i=Object.getOwnPropertyDescriptor,w=(s,e,t,r)=>{for(var o=r>1?void 0:r?i(e,t):e,n=s.length-1,c;n>=0;n--)(c=s[n])&&(o=(r?c(e,t,o):c(o))||o);return r&&o&&f(e,t,o),o};const l=AFRAME.THREE;l.Vector2.prototype.toString=function(){return`(${this.x}, ${this.y})`};let m=class extends p{init(){console.log("Hello world from my-other-system!");const s=new l.Vector2(5,3),e=new l.Vector2(5,4),t=s.clone();t.add(e),console.log(`${s} + ${e} = ${t}`)}};m=w([y("my-other-system")],m);
