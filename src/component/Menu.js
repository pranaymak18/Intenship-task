import React,{Fragment, useState} from 'react';
import SubMenu from './SubMenu';
import '../css/Menu.css';

let showData = [];
function Menu() {
    const [no,setNo] = useState("0");
    const HandlePress = (no) => {
        setNo(no);
        showData=[];
        if(no==3)
        {
        showData.push(
            <div>
                <SubMenu />
            </div>
        )}
    }    
    return (
    <Fragment>
    <div>
        <button className={ no==1?"tablink":"first" } onClick={() => HandlePress("1")}>
        <center><div class="circle">1</div></center>
        <div style={{fontSize:"13px"}}>PENDING</div>
        </button>
        <button className={ no==2?"tablink":"first" } onClick={() => HandlePress("2")}>
        <center><div class="circle">2</div></center>
        <div style={{fontSize:"13px"}}>EXICUTING</div>
        </button>
        <button className={ no==3?"tablink":"first" } onClick={() => HandlePress("3")}>
        <center><div class="circle">3</div></center>    
        <div style={{fontSize:"13px"}}>EXECUTED</div>
        </button>
        <button className={ no==4?"tablink":"first" } onClick={() => HandlePress("4")}>
        <center><div class="circle">4</div></center>
        <div style={{fontSize:"13px"}}>COMPLETED</div>
        </button>
    </div>
    <div>
        { showData }
    </div>
    </Fragment>
);
}

export default Menu;
