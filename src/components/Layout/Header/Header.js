import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import BurgerMenus from "./BurgerMenus";
import ShopingCart from "./ShopingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const image = {
  position:'absolute',
  width: "150px",
  hieght: "100px",
  left: "50px",
  top:'20px',
};
const button={margin:"0px 10px",padding:'12px 45px'}
const seperator = {
  width: 5,
  height: 10,
  backgroundColor: "#000000",
  borderRadius: "100%",
};

const goToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
};
const headerTextStyle = "font-weight-bold";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("");
  const [user, setuser] = useState({ value: null });
  const [key, setkey] = useState(0);
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  // Sticky Menu Area start
  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    if (token) {
      setuser({ value: token });
    }

    window.addEventListener("scroll", sticky);
    return () => {
      window.removeEventListener("scroll", sticky);
    };
  }, []);

  const sticky = (e) => {
    const header = document.querySelector(".header__area");
    const scrollTop = window.scrollY;
    scrollTop >= 1
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };
  // Sticky Menu Area End

  return (
    <React.Fragment>
      <Head>
        <title>NEST Academy</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        ></link>
      </Head>
      <header key={key}>
        <div
          id="header-sticky"
          className="header__area header__transparent header__padding"
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
                <div className="header__left d-flex">
                  <div className="logo">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/img/logo/NestLogo.png"
                          alt="logo"
                          style={image}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-8 col-6">
                <div className="header__right d-flex justify-conten-center align-items-center">
                  <div className="main-menu d-none d-xl-block">
                    <nav id="mobile-menu">
                      <ul className="d-flex">
                        <li className="navText">
                          <span style={{ dispaly: "flex" }}>
                            <Link href="/">
                            <div className="navText" onClick={goToBottom}>
                              <a style={{ fontWeight: "bolder" }}>HOME</a>
                              </div>
                            </Link>
                          </span>

                          {/* <li>
                            
                          </li> */}
                          {/* <ul className="submenu">
                            <li>
                              <Link href="/course-grid">
                                <a>Courses</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/course-list">
                                <a>Courses List</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/course-sidebar">
                                <a>Courses Sidebar</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/course-details">
                                <a>Courses Details</a>
                              </Link>
                            </li>
                          </ul> */}
                        </li>
                        <li className="navText">
                          <Link href="/blog">
                          <div className="navText" onClick={goToBottom}>
                            <a style={{ fontWeight: "bolder" }}>EXPLORE</a>
                            </div>
                          </Link>
                        </li>
                        <li className="navText">
                          <Link href="/blog">
                          <div className="navText" onClick={goToBottom}>
                            <a style={{ fontWeight: "bolder" }}>VIDEOS</a>
                            </div>
                          </Link>
                          
                        </li>

                        <li className="navText">
                          <Link href="/blog">
                          <div className="navText" onClick={goToBottom}>
                            <a style={{ fontWeight: "bolder" }}>
                               GALLERY
                            </a>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <div className="navText" onClick={goToBottom}>
                            <a style={{ fontWeight: "bolder" }}>CONTACT</a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header__search p-relative ml-50 d-none d-md-block d-flex">
                    <form action="#">
                      <div
                        // style={{
                        //   justifyContent: "right",
                        //   margin: 0,
                        //   flexDirection: "row",
                        // }}
                      >
                        {/* <button
                          type="submit"
                          className="btn btn-sm"
                          style={{
                            width: 50,
                            height: 50,
                            margin: 0,
                          }}
                        > */}

                        <FontAwesomeIcon
                          icon={["fas", "search"]}
                          className="disabled"
                          style={{
                            width: 20,
                            height: 20,
                            position: "absolute",
                            left: 16,
                            justifySelf: "center",
                            bottom: 16,
                          }}
                        />
                        {/* </button> */}
                        <input type="text" placeholder="Search..." />
                      </div>
                    </form>
                   

                  </div>
                  {/* <div className="header__btn  d-none d-sm-block">
                    <Link href="/sign-up">
                      <a className="btn btn-primary btn-lg" style={button}>
                        Register
                      </a>
                    </Link>
                  </div>

                  <div className="header__btn  d-none d-sm-block">
                    <Link href="/sign-in">
                      <a
                        className="btn btn-outline-primary btn-lg"
                        style={button}
                      >
                        Login
                      </a>
                    </Link>
                  </div> */}
                  
                  { !user.value && <div className="header__btn  d-none d-sm-block">
                         <Link href="https://facit-jet.vercel.app/auth-pages/login"><a className="btn btn-success btn-lg" style={button}>Register</a></Link>
                           </div>
                         }

                         {!user.value ?
                          <div className="header__btn  d-none d-sm-block">
                         <Link href="https://facit-jet.vercel.app/auth-pages/login"><a className="btn btn-outline-success btn-lg" style={button}>Login</a></Link>
                           </div>
                            :
                           <div className="header__btn  d-none d-sm-block">
                              <Link href="https://facit-jet.vercel.app/auth-pages/login"><a className="btn btn-outline-success btn-lg" onClick={()=>{sessionStorage.removeItem('token')}} style={button}>logout</a></Link>
                           </div>}
                
              
                </div>
              </div>
            </div>
          </div>
        </div>

        <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div
          onClick={() => setMenuOpen(false)}
          className={menuOpen ? "body-overlay show" : "body-overlay"}
        ></div>

        <ShopingCart shopOpen={shopOpen} setShopOpen={setShopOpen} />
        <div
          onClick={() => setShopOpen(false)}
          className={shopOpen ? "body-overlay show" : "body-overlay"}
        ></div>
      </header>
    </React.Fragment>
  );
};

export default Header;
