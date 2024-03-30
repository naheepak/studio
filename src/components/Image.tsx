"use client";
import { ImageProps } from "@/interfaces";
import NextImage from "next/image";
import classNames from "classnames";

export default function Image(props: ImageProps) {
  const { className, placeholder = "blur", style, ...rest } = props;
  return (
    <NextImage
      {...rest}
      style={{
        ...style,
        touchAction: "none",
        msTouchAction: "none",
        msTouchSelect: "none",
        userSelect: "none", // 사용자 선택 비활성화
        WebkitTouchCallout: "none", // iOS에서 터치 길게 누름 메뉴 비활성화
      }}
      className={classNames(className, "select-none touch-none")}
      placeholder={placeholder}
      onContextMenu={(event) => event.preventDefault()}
      onTouchStart={(event) => event.preventDefault()}
    />
  );
}
