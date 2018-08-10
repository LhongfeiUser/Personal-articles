import React from 'react';
import {Link} from 'react-router-dom';
import './index.less'
class Header extends React.Component{
    render(){
        return(
            <header>
                <Link to='/'>
                    <div className ="title">
                        <span>我的文章</span>
                        <span>不是没想过放弃，就是觉得还能在坚持</span>
                    </div>
                </Link>
                <div className = 'logo'> </div>
            </header>
        )
    }
}
export default Header