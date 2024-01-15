import './App.css';
import { Button, MenuButton, tokens, makeStyles, mergeClasses } from '@fluentui/react-components';

import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Drawer,
  DrawerProps,

  Label,
  Radio,
  RadioGroup,
  shorthands,
  useId,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";
import { useState } from 'react';

const useStyle = makeStyles({
  header: { backgroundColor: tokens.colorBrandBackground, color: tokens.colorBrandBackgroundInverted },
  footer: { backgroundColor: tokens.colorNeutralBackgroundInverted, color: tokens.colorNeutralBackground1 },
  sidebar: { backgroundColor: tokens.colorNeutralBackground4 }
})

function App() {
  const style = useStyle();

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="App">
      <div className={mergeClasses('header', style.header)}>
        <div className="headerTitle"> SSPP</div>
        <MenuButton appearance='primary'>Izbornik 1</MenuButton>
        <MenuButton appearance='primary'>Izbornik 2</MenuButton>
        <MenuButton appearance='primary'>Izbornik 3</MenuButton>
        <Button appearance='primary'>Izbornik 4</Button>
      </div>
      <div className="body">
        <Drawer
          type="inline"
          separator
          open={isOpen}
          onOpenChange={(_, { open }) => setIsOpen(open)}
        >
          <DrawerHeader>
            <DrawerHeaderTitle
              action={
                <Button
                  appearance="subtle"
                  aria-label="Close"
                  icon={<Dismiss24Regular />}
                  onClick={() => setIsOpen(false)}
                />
              }
            >
              Default Drawer
            </DrawerHeaderTitle>
          </DrawerHeader>

          <DrawerBody>
            <p>Drawer content</p>
          </DrawerBody>
        </Drawer>

        <div className="content">

          Body content
          <Button appearance='primary' onClick={() => setIsOpen(a => !a)}>Toggle Menu</Button>

        </div>

      </div>
      <div className={mergeClasses('footer', style.footer)}>Footer</div>
    </div>
  );
}

export default App;
