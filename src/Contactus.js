
//========================= Hooks ============================

import React, { useEffect, useState } from 'react';

function Contactus() {
    const [name, updateName] = useState('Contact us page');
    const [menuActive, setMenuState] = useState(false);

    // by default
    // useEffect(()=>{
    //   console.log('value change');
    // });

   

    function wrapperFunction() {
        updateName('New Contact Section');
        setMenuState((menuActive) => !menuActive)
    }

  

    // =========== todoResult
     const [todoResult, setsetstate] = useState([]);
     const [inputtodo, setinputtodo] = useState('');
     const [updateCom, setupdateCom] = useState(false);


     function updateVal(e) {
        setinputtodo(e.target.value);
        e.target.focus()
     }
     function btnAddtodo(params) {
         todoResult.push(inputtodo)
         setupdateCom((updateCom)=>!updateCom);
         console.log(todoResult);
    }
    function removeval(index) {
        todoResult.splice(index, 1);
        setupdateCom((updateCom)=>!updateCom);
    }

    return (
        <div className="container">
            <h3>Text change, Toggle : color & class</h3>
            <h5 style={{ color: menuActive ? "#fff" : "#000" }} className={menuActive ? "bg-info p-4" : "bg-warning p-4"}>{name}</h5>
            <p>Color code : {menuActive ? "#fff" : "#000"}</p>

            <button onClick={wrapperFunction} className="btn btn-outline-secondary">change name</button>


            <div className="row">
            <div className="col-md-4">
                <div className="form-group mt-4">
                    <h1>To-Do <small>List</small></h1>
                    <form role="form" className="d-flex">
                        <input type="text" className="form-control" value={inputtodo} onChange={updateVal}/>
                        <button type="button" className="btn btn btn-primary ml-2" data-tog={updateCom ? 'true' : 'false'} onClick={btnAddtodo}>Add</button>
                    </form>
                </div>
                <div></div>
                <ul className="list-unstyled" id="todo">
                    {
                        todoResult.map((item, i) =>
                        <li className="border-bottom py-2" key={i}>{item} <a href='javascript:;' onClick={()=>{removeval(i)}} class='close' aria-hidden='true'>&times;</a></li>
                        )
                    }
                </ul>
            </div>
            </div>

        </div>
    )
}

export default Contactus;
