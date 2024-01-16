import {
    DrawerBody,
    DrawerHeader,
    DrawerHeaderTitle,
    Drawer,
    Button,
    makeStyles
} from "@fluentui/react-components";

import { Dismiss24Regular, Navigation24Filled, Home24Filled, Settings24Filled } from "@fluentui/react-icons";


const useStyles = makeStyles({

    drawer: {
        transitionDuration: "200ms",
    },

    toggleContainer: {
        // backgroundColor: "whitesmoke",
        position: "absolute",
        top: "10px",
        left: "0px"
    },
    navItemContainer: {
        marginTop: "1em"
    }

});

const menuItems = [
    {
        id: "home",
        title: "Početna stranica",
        icon: <Home24Filled />
    },
    {
        id: "sett",
        title: "Postavke",
        icon: <Settings24Filled />
    }
];


function Sidebar({ isOpen, setIsOpen, onClose }) {

    const style = useStyles();

    function onOpenChangeHandler(event, { open }) {
        setIsOpen(isOpen)
        if (!open) {
            if (onClose) {
                onClose();
            }
        }
    }

    return (
        <>
            <Drawer
                backdrop={{
                    className: style.drawer,
                }}
                type="inline"
                separator
                open={isOpen}
                className={style.drawer}
                onOpenChange={onOpenChangeHandler}
            >
                <DrawerHeader about='Glavni izbornik'>
                    <DrawerHeaderTitle
                        action={
                            <Button
                                appearance="subtle"
                                aria-label="Close"
                                icon={<Dismiss24Regular />}
                                onClick={() => setIsOpen(false)}
                            />
                        }>
                        Glavni izbornik
                    </DrawerHeaderTitle>
                </DrawerHeader>

                <DrawerBody>
                    {menuItems.map(a => <div className={style.navItemContainer}>
                        <Button key={a.id}
                            icon={a.icon}
                            appearance="subtle"
                            size="large"
                            style={{ display: "flex", width: "100%", justifyContent: "flex-start" }}>
                            {a.title}
                        </Button>
                    </div>)}
                </DrawerBody>
            </Drawer>

            <div className={style.toggleContainer}><Button appearance="primary"
                title="Prikaži glavni izbornik"
                style={{ margin: "5px" }}
                aria-label="Close"
                icon={<Navigation24Filled />}
                onClick={() => setIsOpen(a => !a)}></Button>
            </div>

        </>
    );
}

export default Sidebar;