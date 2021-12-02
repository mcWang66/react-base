import React from 'react';
import axios from 'axios';

/**
 react获取服务器APi接口的数据：
 react中没有提供专门的请求数据的模块。但是我们可以使用任何第三方请求数据模块实现请求数据

 1、axios          https://www.npmjs.com/package/axios
 1、安装axios模块npm install axios  --save   /  npm install axios  --save
 2、在哪里使用就在哪里引入import axios from 'axios'
 3、看文档使用
 4、测试接口：
 var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';

 axios的作者觉得jsonp不太友好，推荐用CORS方式更为干净（后端运行跨域），就是说：
 axios不能完成jsonp的跨域请求，需要在接口端设置为允许跨域

 这里演示了，get请求，post在文档中自己看
 */
class Axios extends React.Component {
  constructor(props) {
    super(props);
    //定义数据
    this.state = {
      title: 'Axios',
      list: [],
    }
  }
  getData = () => {
    let url = 'http://localhost:3000/list';
    axios.get(url)
      .then((response) => {
        //请求成功
        console.log(response.data.data);
        // 把请求到的数据，赋值给构造函数的数据
        this.setState({
          list: response.data.data,
        })


      })
      .catch(function (error) {
        //请求失败
        console.log(error);
      });
  }
  postUserData = () => {
    axios({
      method: "post",
      url: "http://localhost:3000/login",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: {
        name: 'alicia',
        password: '123456'
      },
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
    }).then((res) => {
      console.log(res.data);
    })
  }
  //渲染数据
  render() {
    return (
      <div>
        {this.state.title}
        <br /><br />
        <button onClick={this.getData}>getData</button>
        <button onClick={this.postUserData}>postData</button>
        {/* 把请求到的数据循环显示 */}
        {
          this.state.list.username
        }

        {
          this.state.list.createTime
        }

      </div>
    )
  }
}//class
// 暴露出去，供外部调用
export default Axios;
