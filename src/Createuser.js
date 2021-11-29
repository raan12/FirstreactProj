import React, { useState, useEffect } from 'react';

// Swiper
import Swiper from 'react-id-swiper';
import { Pagination, Navigation, EffectFade, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';


export default function Createuser(props) {
    const [name, nameUpdate] = useState("");
    const [age, ageUpdate] = useState("");
    const [address, addressUpdate] = useState("");
    const [storedata, setStoredata] = useState([]);


    function SubmitFun() {
        const data = { name, age, address }
   

        if (name != '' && age != '' && address != '') {
            setStoredata((storedata) => [...storedata, data])
            nameUpdate('');
            ageUpdate('');
            addressUpdate('')
        }
        else{
            alert('Fill your all fields !')
        }


    }

    console.log(storedata);

    const paramsSlide = {
        modules: [Pagination, Navigation, EffectFade, Autoplay],
        spaceBetween: 30,
        slidesPerView: 1,
        effect: 'fade',
        rebuildOnUpdate: true,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1920: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
        },
        autoplay: {
            delay: 1000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    }



    useEffect(() => {

    });

    return (
        <div>
            {props.userLogin ?
                <div className="position-relative mb-4">
                    <Swiper {...paramsSlide}>
                        <div><img alt="img1" className="w-100" src="./img/swip-fade-1.jpg" /></div>
                        <div><img alt="img1" className="w-100" src="./img/swip-fade-2.jpg" /></div>
                        <div><img alt="img1" className="w-100" src="./img/swip-fade-3.jpg" /></div>
                    </Swiper>
                </div>
                : ''}

            <div className="row">
                <div className="col-md-6 col-12">
                    <h2>Create User : Forms</h2>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => nameUpdate(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Age" value={age} onChange={(e) => ageUpdate(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Address" value={address} onChange={(e) => addressUpdate(e.target.value)} />
                    </div>
                    <button className="btn btn-primary" type="button" onClick={SubmitFun}>Create User</button>
                </div>


                <div className="col-md-6 col-12">
                    {storedata.length > 0 ?
                        <>
                            <h2>Forms Data</h2>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        storedata.map((item, i) =>
                                            <tr>
                                                <td key={i}>{item.name}</td>
                                                <td key={i}>{item.age}</td>
                                                <td key={i}>{item.address}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </>
                        :
                        <div class="alert alert-danger mt-5" role="alert">
                            No data !
                        </div>
                    }

                </div>
            </div>



        </div>
    )
}

// Result - Form data :  {name: 'bvbv', age: '44', address: '555'}
