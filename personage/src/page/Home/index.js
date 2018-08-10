import React from "react";
import { Link } from "react-router-dom";
import './index.less'
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
const Home = () => (
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
                <li>
                    <h5>2018年7月23日</h5>
                    <h5>四十岁的吃鸡玩家</h5>
                    <p>
                        摘要: 我从国图出来，在马路边四处张望，寻找我叫的那辆滴滴快车。 司机已经来过电话，我拜托他多等一会儿，但现在已经过去了十多分钟，不知道他会不会已经取消订单。 情况并没有那么糟，我最终找到了那辆车。我上车之后才发现，司机居然在玩“刺激战场”。我看了一眼，三级包三级头，还挺肥。 司机没有埋怨我的姗姗来迟，反而 <a href="javascript:">阅读全文</a>
                    </p>
                </li>
            </ul>
            <div className='sidebar_box'>
                <Sidebar/>
            </div>
        </div>
    </div>
);
export default Home;
