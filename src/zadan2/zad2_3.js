import React from "react";

import { Link}from "react-router-dom";
export function Biog() {
    return <div>
    <h2>Клод Моне (1840 – 1926)</h2>
    <div>Оскар Клод Моне родился 14 ноября 1840 года[7] в Париже.
         Он был вторым ребёнком бакалейщика Клода Адольфа Моне и Луизы Жюстины (урождённой Обре)[8]. 
         Когда мальчику было пять лет, семья переехала в Нормандию, в Гавр. Отец хотел, чтобы Клод стал бакалейщиком и продолжил семейное дело. 
         Юность Моне, как он сам отмечал впоследствии[9], по существу, была юностью бродяги. Он проводил больше времени в воде и на скалах, чем в классе.
          Школа ему, по натуре недисциплинированному, всегда казалась тюрьмой. Он развлекался, разрисовывая голубые обложки тетрадей, и использовал их для портретов своих учителей,
           сделанных в весьма непочтительной, карикатурной манере, и в этой забаве вскоре достиг совершенства.</div></div>;
   }
   export function Cartina() {
    return <div> <div>  <img src ="mone.jpeg"></img> </div></div> ;
   }
   

   export function News()  {
    const galer=['Gal1.jpg','Gal2.jpg','Gal3.jpg']
    return  galer.map((galer)=> <img src={galer}></img>) ;
   }
   export function NotFound() {
    return <h2>Not found</h2>;
   }
   export  function NavMenu() {
    return (
    <>
    <Link to="/biogra" className="links">
   <p>биография </p> 
  
    </Link>
    <Link to="/cartin" className="links">
<p> лучшая картина</p>

    </Link>
    <Link to="/cartingal" className="links">
    <p>галерея</p>
     
    </Link>
    </>
    );
   }