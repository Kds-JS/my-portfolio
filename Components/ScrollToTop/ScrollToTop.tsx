import { Circle } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  });

  return (
    <>
      {isVisible && (
        <Circle cursor="pointer" position="fixed" right="2%" bottom="3%" size="60px" fontSize="30px" bg="primary.700" color="black" 
        _hover={{bg:"primary.500"}}
        onClick={() => scrollToTop()}>
            <BiArrowToTop/>
        </Circle>
      )}
    </>
  );
}

export default ScrollToTop;