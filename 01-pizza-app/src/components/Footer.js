import React from "react";

function Footer(){
    const hournow=new Date().getHours();
    const openHour=12;
    const closeHour=22; 
    const isOpen = hournow >= openHour && hournow <= closeHour;
       return <div className="footer">
        {isOpen ? (<div className="order"><p>we currently open until {closeHour}:00</p>
            <button className="btn">Order</button>
        </div>)
        :(<p>we currently close,We open from {openHour}:00 TO {closeHour}:00</p>)}
            </div>
    }

export default  Footer;