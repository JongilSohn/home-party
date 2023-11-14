"use client";

import { Image, Input, InputRef, Modal, message } from "antd";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AudioPlayer from "react-h5-audio-player";
import Head from "next/head";

export default function Home() {
  const [messageApi, contextHolder] = message.useMessage();
  const [isShowModal, setIsShowModal] = useState(false);

  const [isRendered, setIsRendered] = useState(false);

  const [isShowLocation, setIsShowLocation] = useState(false);

  const [birth, setBirth] = useState("");

  const [isJy, setIsJy] = useState(false);

  const imgList = [
    `/images/img-1.jpeg`,
    `/images/img-2.JPG`,
    `/images/img-3.JPG`,
    `/images/img-4.JPG`,
    `/images/img-5.JPG`,
    `/images/img-6.JPG`,
    `/images/img-7.JPG`,
    `/images/img-8.JPG`,
    `/images/img-9.JPG`,
    `/images/img-10.JPG`,
    `/images/img-11.JPG`,
    `/images/img-12.JPG`,
    `/images/img-13.JPG`,
    `/images/img-14.JPG`,
    `/images/img-15.JPG`,
    `/images/img-16.JPG`,
    `/images/img-17.JPG`,
    `/images/img-18.JPG`,
  ];

  const player = useRef<any>(); // -1-

  const createSnow = () => {
    const el = document.createElement("div");
    el.classList.add("snow");
    document.body.appendChild(el);
  };

  const snowLocation = () => {
    if (typeof window === "undefined") return;
    const screenWidth = window.innerWidth > 680 ? 680 : window.innerWidth;
    return Math.floor(Math.random() * screenWidth);
  };

  useEffect(() => {
    setIsShowModal(true);
  }, []);

  const openModal = () => {
    Modal.info({
      content: "Are U ready?",
      onOk: handlePlayAudio,
    });
  };

  const handlePlayAudio = () => {
    player.current.audio.current.play();
  };

  const inputRef = useRef<InputRef>(null);

  const handleCheckJy = () => {
    if (isShowLocation) return;
    Modal.info({
      title: "생일을 입력하세요 (지엽인지 확인)",
      content: (
        <>
          <p style={{ paddingBottom: "20px" }}>ex)0806</p>
          <Input ref={inputRef} maxLength={4}></Input>
        </>
      ),

      okText: "확인",
      onOk: () => {
        const value = inputRef?.current?.input?.value;

        if (value === "1015") {
          setIsShowLocation(true);
          setIsJy(true);
          messageApi.open({
            type: "error",
            content: "지엽 하이",
          });
        } else if (value === "0127" || value === "1231" || value === "0105") {
          setIsShowLocation(true);
          setIsJy(false);
          messageApi.open({
            type: "success",
            content: "환영합니다.",
          });
        }

        messageApi.open({
          type: "warning",
          content: "초대된 사람이 아닙니다.",
        });
      },
      onCancel: () => {
        const value = inputRef?.current?.input?.value;
        setIsShowLocation(true);
        setIsJy(false);
      },
    });
  };

  return (
    <main className={styles.main} style={{ backgroundColor: "#2b2928" }}>
      <Head>
        <title>보라종일이네 집들이</title>
        <meta property="og:title" content="보라종일이네 집들이" key="title" />
      </Head>
      <div>
        <div className={styles.snowBack}>
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />{" "}
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />{" "}
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
        </div>
        <div>
          <p className={styles.title}>모바일 초대장</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ height: "300px" }}
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMjRfNDIg%2FMDAxNjcxODA4NTY3NjEy.U3EY8W8uEQP2RW86tsSemishQUiD2AaZG0zmRdMRg1wg.QKSfay3rH0gdnCTYW0_T9efKsEa1U0DGbKjyAjaHVEog.JPEG.jyjy2026%2F5C67BA76-0605-4F42-A21C-1C94A38EB2A1_1_105_c.jpeg&type=sc960_832"
              alt=""
            />
          </div>
          <p className={styles.content}>일시 : 2023년 12월 24일 ~ 25일</p>
          <p
            className={styles.content}
            style={!isShowLocation ? { cursor: "pointer" } : {}}
            onClick={handleCheckJy}
          >
            장소 :{" "}
            {!isShowLocation
              ? "?????? <- 클릭"
              : isJy
              ? `비밀~`
              : `서울 영등포구 시흥대로 625, 102동 1505호`}
          </p>
          <br />
          <p className={styles.content}>
            준비물 리스트
            <br />
            1. 일주일 전부터 금주
            <br />
            2. 강인한 정신력
          </p>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div className={styles.videoBox}>
          <video className={styles.video} controls>
            <source src={`/images/we_video.mp4`} />
          </video>
        </div>
        <div className={styles.snowBack}>
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />{" "}
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />{" "}
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
          <div
            className={styles.snow}
            style={{ marginLeft: `${snowLocation()}px` }}
          />
        </div>
        <div className={`${styles.imgBox} ${styles.isPc}`}>
          <Image.PreviewGroup
            items={imgList}
            preview={{
              countRender: (current) => imgList[current - 1],
              movable: false,
            }}
          >
            <AntdImage
              className={styles.imgComponent}
              width="100%"
              src={imgList[0]}
            />
            <AntdImage
              className={styles.imgComponent}
              width="100%"
              src={imgList[10]}
            />
            <AntdImage
              className={styles.imgComponent}
              width="100%"
              src={imgList[11]}
            />
            <AntdImage
              className={styles.imgComponent}
              width="100%"
              src={imgList[3]}
            />
          </Image.PreviewGroup>
        </div>
        <div className={`${styles.imgBox} ${styles.isPc}`}>
          <Image.PreviewGroup
            items={imgList}
            preview={{
              countRender: (current) => imgList[current - 2],
              movable: false,
            }}
          >
            <AntdImage
              className={styles.imgComponent}
              width="100%"
              src={imgList[15]}
            />
            <AntdImage
              className={styles.imgComponent}
              width="100%"
              src={imgList[13]}
            />
            <AntdImage
              className={styles.imgComponent}
              width="100%"
              src={imgList[16]}
            />
            <AntdImage
              className={styles.imgComponent}
              width="100%"
              src={imgList[5]}
            />
          </Image.PreviewGroup>
        </div>
        <div className={`${styles.imgBox} ${styles.isMobile}`}>
          <div className={styles.mobildeImgBox}>
            <Image.PreviewGroup
              items={imgList}
              preview={{
                countRender: (current) => imgList[current - 2],
                movable: false,
              }}
            >
              <div className={styles.mobildeImgBox}>
                <AntdImage
                  className={styles.imgComponent}
                  width="100%"
                  src={imgList[0]}
                />
                <AntdImage
                  className={styles.imgComponent}
                  width="100%"
                  src={imgList[10]}
                />
              </div>
            </Image.PreviewGroup>
          </div>
          <div className={styles.mobildeImgBox}>
            <Image.PreviewGroup
              items={imgList}
              preview={{
                countRender: (current) => imgList[current - 2],
                movable: false,
              }}
            >
              <div className={styles.mobildeImgBox}>
                <AntdImage
                  className={styles.imgComponent}
                  width="100%"
                  src={imgList[11]}
                />
                <AntdImage
                  className={styles.imgComponent}
                  width="100%"
                  src={imgList[3]}
                />
              </div>
            </Image.PreviewGroup>
          </div>
        </div>
      </div>
      <Modal
        open={isShowModal}
        title="너 T발C야?"
        okText="Yes"
        okType="danger"
        cancelButtonProps={{ disabled: true }}
        cancelText="No"
        onOk={() => {
          handlePlayAudio();
          setIsShowModal(false);
        }}
        closeIcon={false}
        onCancel={() => console.log()}
      >
        <p style={{ fontSize: "30px" }}>놀 준비 됐냐?</p>
      </Modal>

      <AudioPlayer
        style={{ display: "none" }}
        src={`/images/music.mp3`}
        autoPlay={true}
        volume={0.5}
        ref={player} // -2-
      />
    </main>
  );
}

const AntdImage = styled(Image)`
  height: 100% !important;
  z-index: 999;

  .ant-image-mask {
    z-index: 999;
  }

  .ant-image-img {
    z-index: 999;
  }
`;
