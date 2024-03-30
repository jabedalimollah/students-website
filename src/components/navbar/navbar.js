"use client";
import { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo2 from "../../../public/images/logo2.png";
const navbar = () => {
  const [hamburgerMenuToggle, setHamburgerMenuToggle] = useState(true);
  return (
    // ============= Navbar Start ============
    <div className={styles.navbar_main}>
      {/* ------------- Logo Div Start -------------- */}
      <div className={styles.logo_div}>
        <Image
          src={logo2}
          width={90}
          height={90}
          alt="Logo"
          style={{ width: "auto", height: "auto" }}
        />
        {/* <h3 className={styles.logo_text}>Logo</h3> */}
      </div>
      {/* ----------------- Logo Div End -------------- */}

      {/* -------------- Navbar List Wrapper Start ----------- */}
      <ul className={styles.navbar_list_wrapper}>
        <li className={styles.navbar_list}>
          <Link
            href="/"
            className={`${styles.navbar_link} ${styles.active}`}
            shallow
            passHref={true}
          >
            Home
          </Link>
        </li>
        <li className={styles.navbar_list}>
          <Link
            href="/students"
            className={styles.navbar_link}
            shallow
            passHref={true}
          >
            Students
          </Link>
        </li>
        <li className={styles.navbar_list}>
          <Link href="/about" className={styles.navbar_link} shallow>
            About
          </Link>
        </li>
        <li className={styles.navbar_list}>
          <Link href="/contact" className={styles.navbar_link} shallow>
            Contact Us
          </Link>
        </li>
      </ul>
      {/* ------------------- Navbar List Wrapper End ------------- */}

      {/* ----------------- Hamburger Menu Component Start ------------- */}
      <div
        className={styles.hamburger_menu_icon}
        onClick={() => setHamburgerMenuToggle(!hamburgerMenuToggle)}
      >
        <div
          className={`${
            hamburgerMenuToggle
              ? styles.hamburger_layer1
              : styles.first_layer_menu
          }`}
        ></div>
        <div
          className={`${
            hamburgerMenuToggle
              ? styles.hamburger_layer1
              : styles.second_layer_menu
          }`}
        ></div>
        <div
          className={`${
            hamburgerMenuToggle
              ? styles.hamburger_layer1
              : styles.third_layer_menu
          }`}
        ></div>
      </div>
      {/* ------------------ Hamburger Menu Component End ------------- */}

      {/* ------------------ Hamburger Menu List Start ---------------- */}
      <ul
        className={`${
          hamburgerMenuToggle
            ? styles.hamburger_navbar_list_wrapper
            : styles.hamburger_navbar_list_hide
        }`}
      >
        <li className={styles.hamburger_navbar_list}>
          <Link
            href="/"
            className={`${styles.hamburger_navbar_link} ${styles.active}`}
            shallow
            passHref={true}
          >
            Home
          </Link>
        </li>
        <li className={styles.hamburger_navbar_list}>
          <Link
            href="/students"
            className={styles.hamburger_navbar_link}
            shallow
            passHref={true}
          >
            Students
          </Link>
        </li>
        <li className={styles.hamburger_navbar_list}>
          <Link
            href="/about"
            className={styles.hamburger_navbar_link}
            shallow
            passHref={true}
          >
            About
          </Link>
        </li>
        <li className={styles.hamburger_navbar_list}>
          <Link
            href="/contact"
            className={styles.hamburger_navbar_link}
            shallow
            passHref={true}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      {/* ------------------ Hamburger Menu List End ---------------- */}
    </div>
    // ================ Navbar End ===============
  );
};

export default navbar;
