// import './index.css';
// const imgSrc = require('./Icon.jpg');
// let a = 10000000999;
// let str = 'frk'
// let element = document.createElement('div');
// element.innerHTML = a;
// document.body.append(element);

// let img = document.createElement('img');
// img.src = imgSrc;
// document.body.append(img);

// var btn = document.createElement('button');
// btn.innerHTML = "新增";
// document.body.append(btn);
// btn.onclick = function (){
//     var div = document.createElement('div');
//     div.innerHTML = 'item';
//     document.body.appendChild(div);
// }

// import counter from './counter.js';
// import number from './number.js';
// counter();
// number();
// if(module.hot){
//     module.hot.accept('./number.js',()=>{
//         console.log(999)
//         var element = document.getElementById('number');
//         // console.log(elemnt)
//         document.body.removeChild(element);
//         number();
//     })
// }



/**
 * 3-11
 */

//  import "@babel/polyfill"
//  var arr = [      
//      new Promise(()=>{}),
//      new Promise(()=>{})
//  ]
//  arr.map((item)=>{
//      console.log(item)
//  })

/**
 * 4-1
 * development 模式下默认没有tree模式
 * treeshaking 只支持静态方式的映入 es module 的 import方式是静态的引入，require的方式是动态的映入
 * 所以require不支持treeshaking的方式
 */
// import {add} from './math.js';
// let wc = 10000;
// const fc = 2000;
// let bw = 9999;
// add(1,9);


/**
 *  4-3 代码分割
 */
// import _ from "lodash";
// console.log(_.join(['a','b','c']));


/*
4-4 代码分割
*/
function getComponent(){
    return import('lodash').then(({default:_})=>{
        var element = document.createElement('div');
        element.innerHTML = _.join(['Dell','Lee'],'-');
        return element;
    })
}
getComponent().then((element)=>{
    document.body.appendChild(element);
})