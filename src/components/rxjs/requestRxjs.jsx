import React from "react";

import {fromEvent, Observable} from 'rxjs';
import {map, filter, throttleTime} from 'rxjs/operators';

class RequestRxjs extends React.Component{
  constructor(props) {
    super(props)
    this.state = {};
  }
  componentDidMount() {
    this.getCallbackData((data)=>{
      console.log('callback',data)
    })

    this.getPromiseData().then((data)=>{
      console.log('promise',data)
    })

    // this.getRxjsData().subscribe(
    //   value=>{
    //     console.log('rxjs', value)
    //   }
    // )
    
    // 4 Rxjs 撤回
    let stream = this.getRxjsData();
    let d = stream.subscribe(
      value=>{
        console.log('rxjs', value)
      }
    )
    // 5, 想要过一秒后撤回observable的操作
    setTimeout(( 
    )=>{
      d.unsubscribe()
    },1000)

    //6, Observable 多次执行
    // let count = 0;
    // let intervalStream = new Observable(
    //   observer => {
    //     setInterval(()=>{
    //       count ++;
    //       let name = 'alicia';
    //      observer.next('rxjs-interval:'+ name + 'count:' + count);
    //     //  observer.error('err');
    //     },1000) 
    //   }
    // )
    // intervalStream.subscribe(
    //   value=>{
    //     console.log(value)
    //   }
    // )

    //7, promise 只执行一次
    let promise = new Promise((resolve,reject)=>{
      setInterval(() => {
        resolve('promise execute')
        
      }, 2000);
    })
    promise.then((value)=> {
      console.log(value)
    })

    // 8 rxjs 工具方法
    // let intervalStreamNum = new Observable(
    //   observer => {
    //     setInterval(()=>{
    //       count ++;
    //       let name = 'alicia';
    //      observer.next(count);
    //     //  observer.error('err');
    //     },1000) 
    //   }
    // )
    // intervalStreamNum.pipe(
    //   filter((value)=>{if(value%2 === 0)return true }),
    //   map(value => {
    //     return value * value
    //   })
    // ).subscribe(
    //   value=>{
    //     console.log(value)
    //   }
    // )

    // rxjs 延迟执行
    let button = document.querySelector('button');
    fromEvent(button,'click').pipe(throttleTime(3000)).subscribe(()=>{
      console.log('rxjs 延迟执行', 'click')
    })
  }

  /* 
  获取异步数据， ,想获取setTimeout 中的 name 值

  1, 回调函数实 
  2， promise
  3, rxjs 获取异步中的数据 --Observale.subscribe

  */

  // 1, 回调函数实 
  getCallbackData(cb) {
    setTimeout(()=>{
      let name = 'alicia';
      cb(name)

    },100) 
  }
  // 2， promise
  getPromiseData() {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let name = 'alicia';
        resolve(name)
  
      },100) 
    });
  }

  // 3 ,rxjs
  getRxjsData() {
    return new Observable(
      observer => {
        setTimeout(()=>{
          let name = 'alicia';
         observer.next(name);
         observer.error('err');
        },3000) 
      }
    )
  }
  

  render() {
    return(
      <div>
        requestRxjs
        <button>111</button>
  
      </div>
  
    );

  }
 
}
export default RequestRxjs;