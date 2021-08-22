import React from "react";
import "./Main.css";
import Pics from "./assets/Component 11 – 1.png";
import Icon1 from "./assets/Group 5190.png";
import Icon2 from "./assets/Path.png";
import Icon3 from "./assets/Group 5191.png";
import Icon4 from "./assets/Group 5192.png";
import Icons1 from "./assets/Group 4137.png";
import Icons2 from "./assets/computer (1).png";
import Icons3 from "./assets/doctor (3).png";
import Icons4 from "./assets/Group 4194.png";
import Level from "./assets/Component 13 – 1.png";
const Main = () => {
    return (
        <>
            <div className="Main">
                <img src={Pics} alt="" />
                <div className="aboutDescrp">
                    <h3>درباره درمانیتو</h3>
                    <p>
                        درمانیتو یک سامانه است که امکان سفارش دارو , محصولات
                        آرایشی بهداشتی نوبت گیری و مشاوره پزشکان را به راحتی و
                        بصورت آنلاین فراهم کرده است
                    </p>
                    <div className="icons">
                        <div className="icon1">
                            <img src={Icon1} alt="" />
                        </div>
                        <div className="icon2">
                            <img src={Icon2} alt="" />{" "}
                        </div>
                        <div className="icon3">
                            <img src={Icon3} alt="" />
                        </div>
                        <div className="icon4">
                            <img src={Icon4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="titel">
                <h2>امکانات درمانیتو</h2>
                <div className="about2">
                    <div className="icons2">
                        <div className="icon5">
                            <img src={Icons1} alt="" />
                            <p>داروخانه</p>
                        </div>
                        <div className="icon6">
                            <img src={Icons2} alt="" />
                            <p>فروشگاه</p>
                        </div>
                        <div className="icon7">
                            <img src={Icons3} alt="" />
                            <p>ویزیت آنلاین</p>
                        </div>
                        <div className="icon8">
                            <img src={Icons4} alt="" />
                            <p>نوبت دهی آنلاین</p>
                        </div>
                    </div>
                    <div className="aboutDescrp2">
                        <h3>داروخانه آنلاین</h3>
                        <p>
                            در سرویس داروخانه شما میتوانید نسخه دارویی یا
                            محصولات بهداشتی خودتون رو برای پیدا شدن به داروخانه
                            و فروشگاها سفارش بدید
                        </p>
                        <div className="levels">
                            <img src={Level} alt="" />
                            <div className="cont">
                                <div className="step">
                                    <h3>قدم اول</h3>
                                    <p>
                                        وارد بخش سفارش با عکس نسخه شوید و عکس و
                                        توضیحات را وارد کنید
                                    </p>
                                </div>
                                <div className="step1">
                                    <h3>قدم دوم</h3>
                                    <p>
                                        بعد از ارسال عکس نسخه,باید آدرس محل
                                        خودتون رو وارد کنید{" "}
                                    </p>
                                </div>
                                <div className="step2">
                                    <h3>قدم سوم</h3>
                                    <p>
                                        اگر نتیجه جستجوی نسخه موفقیت آمیز باشه
                                        منتظر تحویل سفارش باشید{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
