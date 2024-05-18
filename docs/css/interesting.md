<style>
.box{
    width:100px;
    height:100px;
}
.reflect__below{
    -webkit-box-reflect: below;
} 
.reflect__above{
    -webkit-box-reflect: above;
} 
.reflect__left{
    -webkit-box-reflect: left;
} 
.reflect__right{
    -webkit-box-reflect: right;
} 

.inline-box{
    display:inline;
}
/* .typed{
    display: inline-block;
    background: linear-gradient(90deg, transparent, transparent calc(100% - 2px), var(--pointerColor) calc(100% - 2px), var(--pointerColor));
    animation: colorChange .8s linear infinite;
    padding-right: 4px;
} */

@keyframes colorChange {
    0%, 50% {
        --pointerColor: #000;
    }
    50%, 100% {
        --pointerColor: transparent;
    }
}

@keyframes typing {
    0{
        width: 0;
    }
    100% {
        width: 26ch;
     }
}

.typed-a{
    background: linear-gradient(90deg, transparent, transparent calc(100% - 2px), var(--pointerColor) calc(100% - 2px), var(--pointerColor));
    background-size: 100% 70%;
    background-position: 0 5px;
    background-repeat: no-repeat;
    animation: colorChange .8s linear infinite;
    padding-right: 4px;
}
</style>

## 打字机效果

虽然你可以轻松使用typed.js实现打字机效果。但是如果只是打字机效果的话，也可以用css实现

<div class="example">
    <p class ="inline-box typed">
    <a class="typed-a">
     'First test.',
     'Second test, it will pause for three seconds. ^3000',
     "Second test, the last sentence will go back to 'Second test, ', oh no, this is the third test. ^1000",
     "It's going to start repeating."
     </a>
    </p>
    <!-- <div class=" reflect__below">
    123
    </div> -->
     <!-- <div class=" reflect__left">
    123
    </div> -->
    <!-- <div class=" reflect__above">
    123
    </div> -->
     <!-- <div class=" reflect__above">
    123
    </div> -->
</div>
