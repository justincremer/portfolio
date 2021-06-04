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
	<div className="fixed z-20 w-full flex items-center justify-center left-0">
	  <button
		onClick={scrollToTop}
		className="w-25 p-2 text-center bg-gray-100 text-black border border-black rounded-xl"
	  >
		Scroll To Top
	  </button>
	</div>
  ) : null;
};
