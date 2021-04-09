# JS-and-Scss_Clock
此小作品是練習運用SCSS和JS做出一個小時鐘  

1.專案教學網址：https://dylan237.github.io/js-2f-clock.html  

2.Demo : https://midastung.github.io/JS-and-Scss_Clock/index.html

## 以下內容是實作中的重點整理:
### CSS屬性
1. transform-origin: 設定物件變形的起始點
共有三個參數，分別是控制 x 軸(左到右)，y 軸(上到下)，z 軸的起始位置
```css
transform-origin(0, 0); /* 從物件的左上角開始 */
transform-origin(0, 100); /* 從物件的左下角開始 */
transform-origin(100, 0); /* 從物件的上角開始 */
transform-origin(100, 100); /* 從物件的右下角開始 */
```
2. transform: 設定物件的變形種類
常用包括translate(位移)、scale(縮放)、rotate(旋轉)、skew(傾斜)等，還有結合 scale、skew、translate 的 matrix(scale X, scale Y, skew X, skew Y, move X, move Y)

3.nth-child(n)
```css
tr:nth-child(3n+1){
	background-color:#69C;
	}
```
![image](http://csscoke.com/wp-content/uploads/2013/09/table_nth-child3n.png)
![image](http://csscoke.com/wp-content/uploads/2013/09/nth-child_demo.png)

### SCSS屬性
1.嵌套（Nesting）
```Scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```
2.混入（Mixins)
```Scss
@mixin square($size, $radius: 0) {
  width: $size;
  height: $size;

  @if $radius != 0 {
    border-radius: $radius;
  }
}

.avatar {
  @include square(100px, $radius: 4px);
}
```
3.共用（Extends）
```Scss
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

```
4.父元素
```Scss
.clock{
    width:350px;
    height:350px;
    border-radius: 100%;
    @extend %centerJustify;
    background-color: #a06ee1;
    box-shadow:8px 20px 15px #0000007d;

    &__inner {
        width:90%;
        height:90%;
        border-radius: 100%;
        position: relative;
        @extend %centerJustify;
        border: 2px solid #212F0B;
        background-color: #421b9b;
    }
 //clock, clock__inner
```
