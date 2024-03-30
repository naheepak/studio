"use client";
import { ImageProps } from "@/interfaces";
import NextImage from "next/image";
import classNames from "classnames";

export default function Image(props: ImageProps) {
  const { className, placeholder = "blur", ...rest } = props;
  return (
    <NextImage
      {...rest}
      className={classNames(className, "select-none")}
      placeholder={placeholder}
      onContextMenu={(event) => event.preventDefault()}
      onTouchStart={(event) => event.preventDefault()}
    />
  );
}
