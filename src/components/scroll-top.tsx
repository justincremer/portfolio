import React, { useState } from "react";

export const ScrollTop: React.FC = (): JSX.Element | null => {
  const [visible, setVisible] = useState(false);

  const toggleVisibile = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300) {
	  setVisible(true);
	  return;
	}
	setVisible(false);
  };

  const scrollToTop = () => {
	window.scrollTo({
	  top: 0,
	  behavior: "smooth",
	});
  };

  window.addEventListener("scroll", toggleVisibile);

  return visible ? (
	<div className="fixed w-full flex items-center justify-center">
	  <div className="z-10">
		<button
		  onClick={scrollToTop}
		  className="w-25 p-2 text-center bg-gray-300 rounded-2xl"
		>
		  Scroll Top
		</button>
	  </div>
	</div>
  ) : null;
};
