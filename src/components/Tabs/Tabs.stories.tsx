import { Meta } from "@storybook/react";
import { Tabs as LibTabs } from "./Tabs";
import React from "react";
import { Typography } from "../Typography/Typography";

export default {
  title: "Tabs",
  component: LibTabs,
} as Meta;

export const Tabs = () => (
  <LibTabs defaultTab="rivian">
    <LibTabs.List ariaLabel="Experience">
      <LibTabs.Button id="rivian">Rivian</LibTabs.Button>
      <LibTabs.Button id="ffn">Freedom Financial Network</LibTabs.Button>
      <LibTabs.Button id="wds">WebDevStudios</LibTabs.Button>
      <LibTabs.Button id="mm">MIGHTYminnow</LibTabs.Button>
      <LibTabs.Button id="cisco">Cisco</LibTabs.Button>
    </LibTabs.List>

    <LibTabs.Panel id="rivian">
      <Typography component="h3">Senior Software Engineer</Typography>
    </LibTabs.Panel>

    <LibTabs.Panel id="ffn">
      <Typography component="h3">Staff Software Engineer</Typography>
    </LibTabs.Panel>

    <LibTabs.Panel id="wds">
      <Typography component="h3">Software Engineer</Typography>
    </LibTabs.Panel>

    <LibTabs.Panel id="mm">
      <Typography component="h3">Software Engineer</Typography>
    </LibTabs.Panel>

    <LibTabs.Panel id="cisco">
      <Typography component="h3">Product Manager</Typography>
    </LibTabs.Panel>
  </LibTabs>
);
