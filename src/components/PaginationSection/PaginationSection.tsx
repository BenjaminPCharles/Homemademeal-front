import React, { useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

function PaginationSection({
  text,
  clickable,
  receipts,
}: any | boolean | string[]) {
  const colors = [
    "#7072B4",
    "#A264A1",
    "#C05A7D",
    "#EEE8A9",
    "#00809D",
    "#2E7CB2",
  ];

  const Warpper = styled.div`
    text-align: center;
    margin: 4em 0;

    aside {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    p {
      font-size: 1.3em;
      margin-bottom: 0.5em;
      color: ${clickable ? "#078080" : "#232323"};
    }

    section {
      width: 80vw;
      height: 10em;
      background-color: #fff;
      border: solid 3px #232323;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  const LinkReactRouter = styled(Link)`
    text-decoration: none;
    font-size: 1.3em;
    color: black;
    padding: 4.5em 3em 3em 3em;
  `;

  return (
    <Warpper>
      <aside>
        {text.map((title: string, index: number) => {
          return <p key={index}>{title}</p>;
        })}
      </aside>
      <section>
        <Swiper
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {receipts && receipts.loading === "authenticated"
            ? receipts.receiptInfo.map((receipt: any, index: any) => {
                return (
                  <SwiperSlide
                    style={{
                      backgroundColor: `${
                        colors[Math.floor(Math.random() * 6)]
                      }`,
                    }}
                  >
                    <LinkReactRouter key={index} to="/receipt">
                      <img src="../img/receiptLogo.svg" alt="" />
                      {receipt.name}
                    </LinkReactRouter>
                  </SwiperSlide>
                );
              })
            : undefined}
        </Swiper>
      </section>
    </Warpper>
  );
}

export default React.memo(PaginationSection);
