import React, {useState, useEffect, Fragment} from 'react';
import Swiper from "react-id-swiper";
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import {ProductGridWrapper} from "../ProductThumb/ProductGridListWrapper";
import HomeGridWrapper from "../ProductThumb/HomeGridWrapper";


const HomeNewSlider = ({spaceBottomClass, slider}) => {

    const [products, setProducts] = useState([])

    const getData = async () => {
        const {data} = await axios.get('/products')
        setProducts(data)
        console.log(data)
    }

    useEffect(() => {
        getData()
    }, [])

    const params = {
        loop: false,
        slidesPerView: 5,
        spaceBetween: 30,
        grabCursor: true,
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            1024: {
                slidesPerView: 5
            },
            768: {
                slidesPerView: 3
            },
            640: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1
            }
        }
    };

    // const [products, setProducts] = useState([])
    //
    // const getData = async () => {
    //     const {data} = await axios.get('/products')
    //     setProducts(data)
    // }
    //
    // useEffect(() => {
    //     getData()
    // }, {})

    return (
        <div className="product-slider-wrapper space-mb--r100">
            <div className="product-slider-container product-slider-container--style2">
                <Swiper{...params}>
                    {products.map((product) => (
                        <HomeGridWrapper
                            key={product.id}
                            product={product}
                            sliderClass="swiper-slide"
                            bottomSpace="space-mb--50"
                        />
                    ))}

                </Swiper>
            </div>
        </div>
    )
}
export default HomeNewSlider;
