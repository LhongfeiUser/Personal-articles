import React from "react";
import './index.less'
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            number:[
                {date:'2017年10月31日',title:'四十岁吃鸡玩家',content:'摘要: 我从国图出来，在马路边四处张望，寻找我叫的那辆滴滴快车。 司机已经来过电话，我拜托他多等一会儿，但现在已经过去了十多分钟，不知道他会不会已经取消订单。 情况并没有那么糟，我最终找到了那辆车。我上车之后才发现，司机居然在玩“刺激战场”。我看了一眼，三级包三级头，还挺肥。 司机没有埋怨我的姗姗来迟，反而'},
                {date:'2017年10月1日',title:'四十岁吃鸡玩家',content:'摘要: 我从国图出来，在马路边四处张望，寻找我叫的那辆滴滴快车。 司机已经来过电话，我拜托他多等一会儿，但现在已经过去了十多分钟，不知道他会不会已经取消订单。 情况并没有那么糟，我最终找到了那辆车。我上车之后才发现，司机居然在玩“刺激战场”。我看了一眼，三级包三级头，还挺肥。 司机没有埋怨我的姗姗来迟，反而'},
                {date:'2017年10月9日',title:'四十岁吃鸡玩家',content:'摘要: 我从国图出来，在马路边四处张望，寻找我叫的那辆滴滴快车。 司机已经来过电话，我拜托他多等一会儿，但现在已经过去了十多分钟，不知道他会不会已经取消订单。 情况并没有那么糟，我最终找到了那辆车。我上车之后才发现，司机居然在玩“刺激战场”。我看了一眼，三级包三级头，还挺肥。 司机没有埋怨我的姗姗来迟，反而'},
                {date:'2017年10月7日',title:'四十岁吃鸡玩家',content:'摘要: 我从国图出来，在马路边四处张望，寻找我叫的那辆滴滴快车。 司机已经来过电话，我拜托他多等一会儿，但现在已经过去了十多分钟，不知道他会不会已经取消订单。 情况并没有那么糟，我最终找到了那辆车。我上车之后才发现，司机居然在玩“刺激战场”。我看了一眼，三级包三级头，还挺肥。 司机没有埋怨我的姗姗来迟，反而'},
                {date:'2017年10月6日',title:'四十岁吃鸡玩家',content:'摘要: 我从国图出来，在马路边四处张望，寻找我叫的那辆滴滴快车。 司机已经来过电话，我拜托他多等一会儿，但现在已经过去了十多分钟，不知道他会不会已经取消订单。 情况并没有那么糟，我最终找到了那辆车。我上车之后才发现，司机居然在玩“刺激战场”。我看了一眼，三级包三级头，还挺肥。 司机没有埋怨我的姗姗来迟，反而'}
            ],
        };
       this.sorts();
    }
    sorts() {
        const lists = this.state.number;
        let arr =[];
        for (let i =0;i<lists.length;i++){
            arr.push(lists[i].date)
        }
       arr.sort((a,b)=>(a-b));
       console.log(arr);
    }
    render(){
        const num = this.state.number;
        function List() {
            const numberList = num.map((num)=>
                <li key={num.toString()}>
                <h5>{num.date}</h5>
                <h5>{num.title}</h5>
                <p>
                    {num.content}<a href="javascript:">阅读全文</a>
                </p>
                </li>);
            return(
               numberList
            )
        }
        return(
            <div>
                <Header/>
                  <div className='main'>
                    <ul className='articleList'>
                        <li>
                            <div className='nav_left'>
                                <span>博客园</span>
                                <span>首页</span>
                                <span>新随笔</span>
                                <span>联系</span>
                                <span>管理</span>
                            </div>
                            <div className='nav_right'>
                                <span>随笔- 51</span>
                                <span>文章- 0</span>
                                <span>评论- 269</span>
                            </div>
                        </li>
                        <List/>
                    </ul>
                    <div className='sidebar_box'>
                        <Sidebar/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;
