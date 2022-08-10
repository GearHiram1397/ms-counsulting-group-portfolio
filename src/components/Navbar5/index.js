import React from "react";
import Header2 from '../header2'
import Logo from '../../images/fotosdelportafolio/bluelogo-removebg-preview.png'

export default function Navbar5() {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 80 ? "fixed-navbar animated fadeInDown active" : "fixed-navbar";

  return (
    <div className={className}>
        <Header2 headerclass={'header-style-2 header-style-3'} Logo={Logo} />
    </div>
  ); 
}