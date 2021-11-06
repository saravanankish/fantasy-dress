import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if (pageYOffset > 400) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!visible) {
        return false;
    }

    return (
        <div
            className="scroll-to-top cursor-pointer text-center"
            onClick={scrollToTop}
            style={{
                display: 'flex',
                justifyContent: 'center',  
                alignItems: 'center',
            }}
        >
            < FaArrowUp  />
          
            <i className="FaArrowUp"></i>
           
          
        </div>
  
    );
};

export default ScrollToTop;