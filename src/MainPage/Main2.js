import React from "react";
import "./Main2.css";
import Mobailsvg from "./assets/Mask Group 32.png";
import Downloadicon1 from "./assets/Group 5516.png";
import Downloadicon2 from "./assets/Group 5369.png";
import Downloadicon3 from "./assets/Group 5368.png";
import Doctoricon from "./assets/health__two_color (1).png";
import Num from "./assets/Group 5520.png";
const Main2 = () => {
    return (
        <div className="containerMain">
            <div className="downloadstp">
                <img className="mobailimg" src={Mobailsvg} alt="" />
                <div className="downloadsection">
                    <h2>دانلود اپلیکیشن درمانیتو</h2>
                    <p>برای دریافت لینک دانلود,شماره موبایل خود را وارد کنید</p>
                    <div className="input1">
                        <input
                            type="text"
                            placeholder="شماره همراه را وارد کنید"
                        />
                        <button className="btninput">بفرست</button>
                    </div>
                    <img src={Downloadicon1} alt="" />
                    <img src={Downloadicon2} alt="" />
                    <img src={Downloadicon3} alt="" />
                </div>
            </div>
            <div className="backgrundregistr">
                <div className="containerregistr">
                    <div className="registrsection">
                        <img src={Doctoricon} alt="" />
                        <div className="section">
                            <h2>عضویت داروخانه یا مراکز درمانی </h2>
                            <p>
                                اگر به عنوان داوخانه یا مرکز درمانی قصد دارید در
                                روند درمانی و کسب کار خودتان تغییری ایجاد کنید
                                درمانیتو منتظر شماست
                            </p>
                            <div className="input2">
                                <button className="btninput">
                                    ثبت نام سریع
                                </button>
                                <input
                                    type="text"
                                    placeholder="شماره همراه را وارد کنید"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="poshtbani">
                <div className="texts">
                    <h2>پشتیبانی درمانیتو</h2>
                    <p>پاسخگویی در روز های کاری از ۹ صبح تا ۹ شب</p>
                </div>
                <div className="imgback">
                    <img src={Num} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Main2;
