import React from "react";
import { CSSProperties } from "styled-components";
import { ContentsIE } from "../api/GetAPI/interface";

export type ContentsStore = {
  contents: ContentsIE[];
};

export type ThemeStore = {
  useTheme: boolean;
};

export type GlobalStore = {
  isShowAdContainer: boolean;
  modalItem: {
    isShowModal: boolean;
    children: React.FC<any>;
    childrenProps: any;
    style: CSSProperties;
    titleItem: {
      title: string;
      subTitle: string;
      titleStyle: {};
      subTitleStyle: {};
    };
    buttonItem: {
      title: string;
      next: Function;
      containerStyleItems: {
        hoverBackgroundColor?: string;
        defaultBackgroundColor?: string;
        activeBackgroundColor?: string;
      };
    }[];
    option: {
      dimClose: boolean;
      keyClose: boolean;
    };
  };
};

export type UserStore = {
  user: {
    isLogin: boolean;
    info: {
      userId: number;
      userEmail: string;
      userNickname: string;
    };
  };
};

export type StateType = {
  contentsStore: ContentsStore;
  themeStore: ThemeStore;
  globalStore: GlobalStore;
  userStore: UserStore;
};

/**
 * @description
 * Redux Action Type 정의
 */
export enum ActionEnum {
  SET_USER_INFO = "SET_USER_INFO",
  GET_CONTENTS = "GET_CONTENTS",
  SET_THEME_MODE = "SET_THEME_MODE",
  SET_AD_CONTAINER = "SET_AD_CONTAINER",
  SET_MODAL_ITEM = "SET_MODAL_ITEM",
};
