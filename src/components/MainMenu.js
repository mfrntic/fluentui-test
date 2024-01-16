import { Button, MenuButton, tokens, makeStyles, mergeClasses, Persona, Subtitle1 } from '@fluentui/react-components';

const useStyle = makeStyles({
    header: { backgroundColor: tokens.colorBrandBackground, color: tokens.colorBrandBackgroundInverted },
    headerTitle: { marginRight: "10vh", marginLeft: "40px", margin: "0px", display: "inline-block", verticalAlign: "middle"} ,
    user: { verticalAlign: "middle", float: "right", paddingTop: "0px" }
})

function MainMenu() {

    const style = useStyle();

    return (
        <div className={mergeClasses('header', style.header)}>
           
                <Subtitle1 className={style.headerTitle} >SSP</Subtitle1>
            
            <Button appearance='primary' size='large'>Izbornik 1</Button>
            <Button appearance='primary' size='large'>Izbornik 2</Button>
            <MenuButton appearance='primary' size='large'>Izbornik 3</MenuButton>
 
            <Persona name='Marko Frntić' 
                primaryText={<span style={{color: tokens.colorNeutralBackground4Selected}}>Marko Frntić</span>} 
                size="large"
                secondaryText={<span style={{color: tokens.colorSubtleBackgroundLightAlphaHover}}>UŠP Nova Gradiška</span>}
                className={style.user}/>


        </div>
    );
}

export default MainMenu;