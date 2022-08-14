import React from "react";
import Header3 from '../header3'
import Logo from '../../images/logo2.png'

export default function Navbar6() {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 80 ? "fixed-navbar animated fadeInDown active" : "fixed-navbar";

  return (
    <div className={className}>
        <Header3 headerclass={'header-style-2'} Logo={Logo}/>
    </div>
  ); 
}