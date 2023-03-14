import Head from "next/head";
import Image from "next/image";
import Banierre from "../components/defaultbaner";
import Footer from "../components/footer";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Menu from "../components/menu";

export default function blog({ publication, configurs }) {
  return (
    <>
      <Head>
        <title>cico </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_cico.png" />
        <meta charSet="utf-8" />
      </Head>
      <main className={styles.main}>
        <Banierre title="Blog" legende="Nos realisations" />
        <div className="relative_block">
          <div className="section_1">
            <div className="additionnal_posts">
              {publication?.publication?.map((item, index) => (
                <div className="article_all">
                  <div className="image_en_avant">
                    <img src="/AA.jpg" />
                  </div>
                  <div className="text">
                    <h5>sed vel unde velit numquam maxime nulla commodi.</h5>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia, sed vel unde velit numquam maxime nulla commodi.
                      Esse quae officiis quas{" "}
                    </p>
                    <Link href="#">lire la suite →</Link>
                  </div>
                </div>
              ))}

              {/* <div className="article_all">
                <div className="image_en_avant">
                  <img src="/masina.jpg" />
                </div>
                <div className="text">
                  <h5>sed vel unde velit numquam maxime nulla commodi.</h5>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, sed vel unde velit numquam maxime nulla commodi.
                    Esse quae officiis quas{" "}
                  </p>
                  <Link href="../projets/p">lire la suite →</Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <Footer
          apropos={configurs.Apropos}
          facebook_link={configurs.facebook}
          twitter_link={configurs.twitter}
          linkedin_link={configurs.linkedin}
          adress={configurs.adress}
          phone_number={configurs.telephone}
          email={configurs.email}
        />
        <div className="container-fluid menu_footer">
          <Menu />
        </div>
      </main>
    </>
  );
}
export let getServerSideProps = async () => {
  const respons = await fetch(
    "https://cico-admin.ritach.net/api-v1?configs=cico"
  );

  const posts_respons = await fetch(
    "https://cico-admin.ritach.net/api-v1?datas=all"
  );
  const configurs = await respons.json();
  const publication = await posts_respons.json();
  return {
    props: {
      configurs,
      publication,
    },
  };
};
