import React from 'react';
import {Link} from 'react-router-dom'

import {LayoutTwo} from "../../../components/Layout/Layout";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import ShopHeader from "../../../components/Shop/ShopHeader";
import {Col, Container, Row} from "react-bootstrap";
import ShopProducts from "../../../components/Shop/ShopProducts";

import img from '../../../assets/images/category/banner-bestseller-2.jpg'

const TopT = ({product}) => {
    return (
        <LayoutTwo>
            <Breadcrumb
                backgroundImage={require("../../../assets/images/backgrounds/breadcrumb-bg-1.png")}
                title="TEE"
            />
            <div className="shop-page-content">

                <ShopHeader/>

                <div
                    className="text-center mt-5"
                >

                    <ul className="sub-menu--mega__category">
                        <li>
                            <Link
                                className='mr-5'
                                to="/shop/top/all"
                            >
                                ALL
                            </Link>
                            <img
                                src={img}
                                alt=""
                            />
                        </li>

                        <li>
                            <Link
                                className='mr-5'
                                to="/shop/top/shirt"
                            >
                                SHIRT
                            </Link>
                            <img
                                src={img}
                                alt=""
                            />
                        </li>

                        <li>

                            <Link
                                to="/shop/top/knit"
                            >
                                KNIT
                            </Link>
                            <img
                                src={img}
                                alt=""
                            />
                        </li>
                    </ul>



                </div>

                <div className="shop-page-content__body space-mt--r100 space-mb--r130">
                    <Container className="wide">
                        <Row>
                            <Col>
                                <ShopProducts
                                    products={product}
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </LayoutTwo>
    );
};

export default TopT;
