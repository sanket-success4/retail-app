import React from "react";
import './main_styles.css';
import './responsive.css';
import Base from "../BaseTemplate/Base";

const Landing = (props)=>{
    return (
        <Base>
            <div className="menu menu_mm trans_300">
                <div className="menu_container menu_mm">
                    <div className="page_menu_content">

                        <div className="page_menu_search menu_mm">
                            <form action="#">
                                <input type="search" required="required" className="page_menu_search_input menu_mm"
                                       placeholder="Search for products..."/>
                            </form>
                        </div>
                        <ul className="page_menu_nav menu_mm">
                            <li className="page_menu_item has-children menu_mm">
                                <a href="index.html">Home<i className="fa fa-angle-down"></i></a>
                                <ul className="page_menu_selection menu_mm">
                                    <li className="page_menu_item menu_mm"><a href="categories.html">Categories<i
                                        className="fa fa-angle-down"></i></a></li>
                                    <li className="page_menu_item menu_mm"><a href="product.html">Product<i
                                        className="fa fa-angle-down"></i></a></li>
                                    <li className="page_menu_item menu_mm"><a href="cart.html">Cart<i
                                        className="fa fa-angle-down"></i></a></li>
                                    <li className="page_menu_item menu_mm"><a href="checkout.html">Checkout<i
                                        className="fa fa-angle-down"></i></a></li>
                                    <li className="page_menu_item menu_mm"><a href="contact.html">Contact<i
                                        className="fa fa-angle-down"></i></a></li>
                                </ul>
                            </li>
                            <li className="page_menu_item has-children menu_mm">
                                <a href="categories.html">Categories<i className="fa fa-angle-down"></i></a>
                                <ul className="page_menu_selection menu_mm">
                                    <li className="page_menu_item menu_mm"><a href="categories.html">Category<i
                                        className="fa fa-angle-down"></i></a></li>
                                    <li className="page_menu_item menu_mm"><a href="categories.html">Category<i
                                        className="fa fa-angle-down"></i></a></li>
                                    <li className="page_menu_item menu_mm"><a href="categories.html">Category<i
                                        className="fa fa-angle-down"></i></a></li>
                                    <li className="page_menu_item menu_mm"><a href="categories.html">Category<i
                                        className="fa fa-angle-down"></i></a></li>
                                </ul>
                            </li>
                            <li className="page_menu_item menu_mm"><a href="index.html">Accessories<i
                                className="fa fa-angle-down"></i></a></li>
                            <li className="page_menu_item menu_mm"><a href="#">Offers<i
                                className="fa fa-angle-down"></i></a></li>
                            <li className="page_menu_item menu_mm"><a href="contact.html">Contact<i
                                className="fa fa-angle-down"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className="menu_close"><i className="fa fa-times" aria-hidden="true"></i></div>

                <div className="menu_social">
                    <ul>
                        <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>

            <div className="home">
                <div className="home_slider_container">

                     {/*Home Slider -->*/}
                    <div className="owl-carousel owl-theme home_slider">

                         {/*Slider Item -->*/}
                        <div className="owl-item home_slider_item">
                            <div className="home_slider_background" style={{backgroundImage: "url(images/home_slider_1.jpg)"}}/>
                            <div className="home_slider_content_container">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="home_slider_content" data-animation-in="fadeIn"
                                                 data-animation-out="animate-out fadeOut">
                                                <div className="home_slider_title">A new Online Shop experience.</div>
                                                <div className="home_slider_subtitle">Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit. Nullam a ultricies metus. Sed nec
                                                    molestie eros. Sed viverra velit venenatis fermentum luctus.
                                                </div>
                                                <div className="button button_light home_button"><a href="#">Shop
                                                    Now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/*Slider Item -->*/}
                        <div className="owl-item home_slider_item">
                            <div className="home_slider_background" style={{backgroundImage:"url(images/home_slider_1.jpg)"}}></div>
                            <div className="home_slider_content_container">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="home_slider_content" data-animation-in="fadeIn"
                                                 data-animation-out="animate-out fadeOut">
                                                <div className="home_slider_title">A new Online Shop experience.</div>
                                                <div className="home_slider_subtitle">Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit. Nullam a ultricies metus. Sed nec
                                                    molestie eros. Sed viverra velit venenatis fermentum luctus.
                                                </div>
                                                <div className="button button_light home_button"><a href="#">Shop
                                                    Now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Slider Item -->*/}
                        <div className="owl-item home_slider_item">
                            <div className="home_slider_background" style={{backgroundImage:"url(images/home_slider_1.jpg)"}}></div>
                            <div className="home_slider_content_container">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="home_slider_content" data-animation-in="fadeIn"
                                                 data-animation-out="animate-out fadeOut">
                                                <div className="home_slider_title">A new Online Shop experience.</div>
                                                <div className="home_slider_subtitle">Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit. Nullam a ultricies metus. Sed nec
                                                    molestie eros. Sed viverra velit venenatis fermentum luctus.
                                                </div>
                                                <div className="button button_light home_button"><a href="#">Shop
                                                    Now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                     {/*Home Slider Dots -->*/}

                    <div className="home_slider_dots_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="home_slider_dots">
                                        <ul id="home_slider_custom_dots" className="home_slider_custom_dots">
                                            <li className="home_slider_custom_dot active">01.</li>
                                            <li className="home_slider_custom_dot">02.</li>
                                            <li className="home_slider_custom_dot">03.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="avds">
                <div
                    className="avds_container d-flex flex-lg-row flex-column align-items-start justify-content-between">
                    <div className="avds_small">
                        <div className="avds_background" style={{backgroundImage:"url(images/avds_small.jpg)"}}></div>
                        <div className="avds_small_inner">
                            <div className="avds_discount_container">
                                <img src="images/discount.png" alt=""/>
                                    <div>
                                        <div className="avds_discount">
                                            <div>20<span>%</span></div>
                                            <div>Discount</div>
                                        </div>
                                    </div>
                            </div>
                            <div className="avds_small_content">
                                <div className="avds_title">Smart Phones</div>
                                <div className="avds_link"><a href="categories.html">See More</a></div>
                            </div>
                        </div>
                    </div>

                    {/*< Ads -->*/}

                    <div className="avds_large">
                        <div className="avds_background" style={{backgroundImage:"url(images/avds_large.jpg)"}}></div>
                        <div className="avds_large_container">
                            <div className="avds_large_content">
                                <div className="avds_title">Professional Cameras</div>
                                <div className="avds_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam a ultricies metus. Sed nec molestie eros. Sed viver ra velit venenatis
                                    fermentum luctus.
                                </div>
                                <div className="avds_link avds_link_large"><a href="categories.html">See More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {/*Products */}

            <div className="products">
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <div className="product_grid">
                                <div className="row">
                                    {/*Product*/}
                                    <div className="product">
                                        <div className="product_image"><img src="images/product_1.jpg" alt=""/></div>
                                        <div className="product_extra product_new"><a href="categories.html">New</a></div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$670</div>
                                        </div>
                                    </div>

                                    {/*Product*/}
                                    <div className="product">
                                        <div className="product_image"><img src="images/product_2.jpg" alt=""/></div>
                                        <div className="product_extra product_sale"><a href="categories.html">Sale</a></div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$670</div>
                                        </div>
                                    </div>

                                    {/*Product*/}
                                    <div className="product">
                                        <div className="product_image"><img src="images/product_3.jpg" alt=""/></div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$670</div>
                                        </div>
                                    </div>

                                    {/*Product*/}
                                    <div className="product">
                                        <div className="product_image"><img src="images/product_4.jpg" alt=""/></div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$670</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {/*Product*/}
                                    <div className="product">
                                        <div className="product_image"><img src="images/product_5.jpg" alt=""/></div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$670</div>
                                        </div>
                                    </div>

                                    {/*Product*/}
                                    <div className="product">
                                        <div className="product_image"><img src="images/product_6.jpg" alt=""/></div>
                                        <div className="product_extra product_hot"><a href="categories.html">Hot</a></div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$670</div>
                                        </div>
                                    </div>

                                    {/*Product*/}
                                    <div className="product">
                                        <div className="product_image"><img src="images/product_7.jpg" alt=""/></div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$670</div>
                                        </div>
                                    </div>

                                    {/*Product*/}
                                    <div className="product">
                                        <div className="product_image"><img src="images/product_8.jpg" alt=""/></div>
                                        <div className="product_extra product_sale"><a href="categories.html">Hot</a></div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$670</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        {/*Wide Ads*/}
            <div className="avds_xl">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="avds_xl_container clearfix">
                                <div className="avds_xl_background" style={{backgroundImage:"url(images/avds_xl.jpg)"}}></div>
                                <div className="avds_xl_content">
                                    <div className="avds_title">Amazing Devices</div>
                                    <div className="avds_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam a ultricies metus.
                                    </div>
                                    <div className="avds_link avds_xl_link"><a href="categories.html">See More</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Icon Boxes*/}

            <div className="icon_boxes">
                <div className="container">
                    <div className="row icon_box_row">

                        {/*Icon Box*/}
                        <div className="col-lg-4 icon_box_col">
                            <div className="icon_box">
                                <div className="icon_box_image"><img src="images/icon_1.svg" alt=""/></div>
                                <div className="icon_box_title">Free Shipping Worldwide</div>
                                <div className="icon_box_text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.</p>
                                </div>
                            </div>
                        </div>

                        {/*Icon Box*/}
                        <div className="col-lg-4 icon_box_col">
                            <div className="icon_box">
                                <div className="icon_box_image"><img src="images/icon_2.svg" alt=""/></div>
                                <div className="icon_box_title">Free Returns</div>
                                <div className="icon_box_text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.</p>
                                </div>
                            </div>
                        </div>

                        {/*Icon Box*/}
                        <div className="col-lg-4 icon_box_col">
                            <div className="icon_box">
                                <div className="icon_box_image"><img src="images/icon_3.svg" alt=""/></div>
                                <div className="icon_box_title">24h Fast Support</div>
                                <div className="icon_box_text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Base>
    )
}

export default Landing;