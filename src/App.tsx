import React, { FC, useState } from "react";
import { Button, Drawer } from "antd";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import { ButtonsSection } from "./components/Buttons";
import { PaginationSection } from "./components/Paginations";
import { TabSection } from "./components/Tabs";
import { CheckboxSection } from "./components/Checkbox";
import { SelectSection } from "./components/Select";
import { CollapseSection } from "./components/Collapse";
import { TableSection } from "./components/Table";
import { StepsSection } from "./components/Steps";
import { FontSection } from "./components/Font";

const App: FC = () => {
  const [open, setOpen] = useState(false);
  const [configJson, setConfigJson] = useState({
    "@primary-color": "#6B32B1",
    "@font-size-base": "24px",
    "@coherent-btn-hover": "#833BD8",
    "@coherent-btn-active": "#512B8B",
    "@coherent-table-row-hover-bg": "#512B8B",
    "@font-family": "Verdana",
  });

  const changeRunTimeColor = () => {
    (window as any).less
      .modifyVars(configJson)
      .then(() => {
        //Compile successfully
        console.log("scess");
        setOpen(false);
        (document as any).body.style.fontFamily =
          configJson["@font-family"];
      })
      .catch(() => {
        //Compile failed
      });
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="ma-5">
        <div className="change-locale">
          <Button type="primary" onClick={showDrawer}>
            Change Config
          </Button>
        </div>
        <div className="mt-5">
          <h3>Button</h3>
          <ButtonsSection />
          <h3>Font</h3>
          <FontSection />
          <h3>Pagination</h3>
          <PaginationSection />
          <h3>Tabs</h3>
          <TabSection />
          <h3>Checkbox</h3>
          <CheckboxSection />
          <h3>Select</h3>
          <SelectSection />
          <h3>Collapse</h3>
          <CollapseSection />
          <h3>Table</h3>
          <TableSection />
          <h3>Steps</h3>
          <StepsSection />
        </div>
        <Drawer
          title="Theme Config"
          placement="right"
          size="large"
          onClose={onClose}
          open={open}
        >
          <div>
            <JSONInput
              id="a_unique_id"
              placeholder={configJson}
              locale={locale}
              onChange={(e: any) => {
                console.log(e);
                if (!e.error) {
                  setConfigJson(e.jsObject);
                }
              }}
            />
          </div>
          <Button type="primary" className="mt-5" onClick={changeRunTimeColor}>
            Apply
          </Button>
        </Drawer>
      </div>
    </>
  );
};

export default App;
