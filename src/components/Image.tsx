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
      }}
      className={classNames(className, "select-none touch-none")}
      placeholder={placeholder}
      onContextMenu={(event) => event.preventDefault()}
      onTouchStart={(event) => event.preventDefault()}
    />
  );
}
