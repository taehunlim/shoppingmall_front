import React from 'react';

import {LayoutTwo} from "../../../components/Layout/Layout";
import BreadCrumb from "../../../components/Breadcrumb/Breadcrumb";
import ShopHeader from "../../../components/Shop/ShopHeader";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import ShopProducts from "../../../components/Shop/ShopProducts";
import img from "../../../assets/images/category/banner-bestseller-2.jpg";

const OuterLong = ({product}) => {
    return (
        <LayoutTwo>
            <BreadCrumb
                title="LONG COAT"
                backgroundImage={require("../../../assets/images/backgrounds/breadcrumb-bg-1.png")}
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
                                to="/shop/outer/all"
                            >
                                ALL OUTER
                            </Link>
                            <img
                                src={img}/>
                        </li>

                        <li>
                            <Link
                                className='mr-5'
                                to="/shop/outer/short"
                            >
                                SHORT COAT
                            </Link>
                            <img src={img}/>
                        </li>

                        <li>

                            <Link
                                to="/shop/outer/jacket"
                            >
                                JACKET
                            </Link>
                            <img src={img}/>
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

export default OuterLong;
