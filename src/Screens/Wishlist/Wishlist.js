import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';
import { IoIosClose, IoIosHeartEmpty } from "react-icons/io";
import { Modal } from 'react-bootstrap';
import Swiper from 'react-id-swiper'


import {LayoutTwo} from "../../components/Layout/Layout";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
// import ImageGalleryBottomThumb from "../../components/ProductDetail/ImageGalleryBottomThumb";
// import ProductDescription from "../../components/ProductDetail/ProductDescription";

import {connect} from 'react-redux'
import {addToWishlist, deleteFromWishlist, deleteAllFromWishlist} from '../../actions/wishlistActions'

const Wishlist = ({wishlistItems, deleteFromWishlist, deleteAllFromWishlist}) => {

    const [modalShow, setModalShow] = useState(false)

    const gallerySwiperParams = {
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    }

    useEffect(() => {
        document.querySelector("body").classList.remove("overflow-hidden");
    });


    return (
        <LayoutTwo>
            <Breadcrumb
                backgroundImage={require("../../assets/images/backgrounds/breadcrumb-bg-1.png")}
                title="Wishlist"
            >
            </Breadcrumb>

            <div className="wishlist-content space-mt--r130 space-mb--r130">
                <Container>
                    {wishlistItems && wishlistItems.length >= 1 ? (
                        <Row>
                            <Col lg={12}>
                                <table className="cart-table">
                                    <thead>
                                        <tr>
                                            <th className="product-name" colSpan="2">
                                                Product
                                            </th>
                                            <th className="product-price text-center">Price</th>
                                            <th className="product-subtotal">&nbsp;</th>
                                            <th className="product-remove">&nbsp;</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                    {wishlistItems.map((product, i) => {
                                        return (
                                            <tr key={i}>
                                                <td className="product-thumbnail">
                                                    <Link
                                                        to={`/shop/${product.id}`}
                                                    >
                                                        <img
                                                            src={product.images[0].url}
                                                            alt=""
                                                            className="img-fluid"
                                                        />
                                                    </Link>
                                                </td>
                                                <td className="product-name pr-4">
                                                    <Link
                                                        to={`/shop/${product.id}`}
                                                    >
                                                        {product.name}
                                                    </Link>

                                                </td>

                                                <td className="product-price text-center pl-2">
                                                    <span className="price">${product.price}</span>
                                                </td>

                                                <td className="text-center">
                                                    <button
                                                        id={product.id}
                                                        onClick={() => setModalShow(true)}
                                                        className="active lezada-button lezada-button--medium"
                                                    >
                                                        Select option
                                                    </button>

                                                    <Modal
                                                        show={modalShow}
                                                        onHide={() => setModalShow(false)}
                                                    >
                                                        <Modal.Body>
                                                            <Modal.Header closeButton></Modal.Header>
                                                            <div className="product-quickview__image-wrapper">
                                                                <Swiper{...gallerySwiperParams}>
                                                                    <div className="single-imgae">
                                                                        <img
                                                                            src={product.images[0].url}
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                </Swiper>
                                                            </div>
                                                            <Row>
                                                                <Col md={7} sm={12}>
                                                                    <div>
                                                                        name
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Modal.Body>
                                                    </Modal>
                                                </td>

                                                <td className="product-remove">
                                                    <button
                                                        onClick={() =>
                                                            deleteFromWishlist(product)
                                                        }
                                                    >
                                                        <IoIosClose />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </table>
                            </Col>
                            <Col lg={12} className="space-mb--r100">
                                <div className="cart-coupon-area space-pt--30 space-pb--30">
                                    <Row className="align-items-center">
                                        <Col lg={5} className="text-center text-lg-right ml-auto">
                                            <button
                                                className="lezada-button lezada-button--medium"
                                                onClick={() => deleteAllFromWishlist()}
                                            >
                                                clear wishlist
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>


                    ) : (
                        <Row>
                            <Col>
                                <div className="item-empty-area text-center">
                                    <div className="item-empty-area__icon space-mb--30">
                                        <IoIosHeartEmpty />
                                    </div>
                                    <div className="item-empty-area__text">
                                        <p className="space-mb--30">No items found in wishlist</p>
                                        <Link
                                            className="lezada-button lezada-button--medium"
                                            to="/shop/all"
                                        >
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    )}
                </Container>
            </div>





        </LayoutTwo>

    );
};

const mapStateToProps = (state) => ({
    wishlistItems: state.wishlistData
})

const mapDispatchToProps = (dispatch) => ({
    addToWishlist: (item) => {
        dispatch(addToWishlist(item))
    },

    deleteFromWishlist: (item) => {
        dispatch(deleteFromWishlist(item))
    },

    deleteAllFromWishlist: () => {
        dispatch(deleteAllFromWishlist())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)
