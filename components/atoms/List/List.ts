"use client";

import { styled } from "@/lib/stitches";

export const defaultList = { marginTop: "$4" };

export const OrderedList = styled("ol", { ...defaultList });

export const UnorderedList = styled("ul", { ...defaultList });

export const ListItem = styled("li");
