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
      }}
      className={classNames(className)}
      placeholder={placeholder}
      onContextMenu={(event) => event.preventDefault()}
    />
  );
}
