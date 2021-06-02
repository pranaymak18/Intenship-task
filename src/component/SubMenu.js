import React, { Fragment,useState } from 'react';
import {Button} from '@material-ui/core';
import '../css/SubMenu.css';
import BatchBy from './BatchBy';

let Data=[]; 
function SubMenu() {
    const [no,setNo]=useState("0");
    const HandleClick = (no) => {
        Data = [];
        if(no=="1")
        {
            setNo("1");
            Data.push(
                <div>
                <BatchBy />
                </div>
            )
        }
    }
  return (
    <Fragment>
    <div id="outer">
            <button className="button" onClick={() => HandleClick("1")}>Undo Batch</button>
            <button className="button" onClick={() => HandleClick("2")}>Assign Suppliers</button>
            <button className="button" disabled='true' onClick={() => HandleClick("3")}>Generate PO</button>
    </div>
    <div>
        { Data }
    </div>
    </Fragment>
  );
}

export default SubMenu;
