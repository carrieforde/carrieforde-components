import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Button } from "../Button/Button";
import s from "./Tabs.module.css";
import cn from "classnames";

type TabsContextProps = {
  activeTab: string;
  setActiveTab?: Dispatch<SetStateAction<string>>;
};

const TabsContext = createContext<TabsContextProps>({
  activeTab: "",
  setActiveTab: undefined,
});

const useTabs = () => {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  if (!setActiveTab) {
    throw new Error("useTabs must be used inside a Tabs component!");
  }

  return { activeTab, setActiveTab };
};

interface TabsComposition {
  List: React.FC<TabListProps>;
  Button: React.FC<TabButtonProps>;
  Panel: React.FC<TabPanelProps>;
}

export type TabsProps = {
  defaultTab: string;
  children: ReactNode;
};

export const Tabs: React.FC<TabsProps> & TabsComposition = ({
  defaultTab,
  children,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={s.tabs}>{children}</div>
    </TabsContext.Provider>
  );
};

type TabListProps = {
  ariaLabel: string;
  children: ReactNode;
};

const TabList: React.FC<TabListProps> = ({ ariaLabel, children }) => (
  <div role="tablist" aria-label={ariaLabel} className={s.tabsList}>
    {children}
  </div>
);

type TabButtonProps = {
  id: string;
  children: ReactNode;
};

const TabButton: React.FC<TabButtonProps> = ({ id, children }) => {
  const { activeTab, setActiveTab } = useTabs();

  const isActive = activeTab === id;
  const handleClick = () => setActiveTab(id);

  const classes = cn(s.tabButton, {
    [s.tabButtonIsActive]: isActive,
  });

  return (
    <Button
      type="button"
      id={id}
      onClick={handleClick}
      aria-controls={`${id}-panel`}
      aria-selected={isActive}
      tabIndex={-1}
      role="tab"
      className={classes}
    >
      {children}
    </Button>
  );
};

type TabPanelProps = {
  id: string;
  children: ReactNode;
};

const TabPanel: React.FC<TabPanelProps> = ({ id, children }) => {
  const { activeTab } = useTabs();

  const isActive = activeTab === id;

  return (
    <div
      id={`${id}-panel`}
      role="tabpanel"
      aria-labelledby={id}
      hidden={!isActive}
      className={s.tabPanel}
    >
      {children}
    </div>
  );
};

Tabs.List = TabList;
Tabs.Button = TabButton;
Tabs.Panel = TabPanel;
