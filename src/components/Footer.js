import { tokens, makeStyles, mergeClasses } from '@fluentui/react-components';


const useStyle = makeStyles({
    footer: {
        backgroundColor: tokens.colorNeutralBackgroundInverted,
        color: tokens.colorNeutralBackground1,
        justifyContent: "center"
    },
    logoSmall: {
        
        height: "20px",
        marginRight: "15px",
      
    }
})

function Footer() {
    const style = useStyle();

    return (
        <div className={mergeClasses('footer', style.footer)}>
            <img className={style.logoSmall} src='../logohrsume-small.png' alt="logo small"/>
            <span className='padding-horizontal-10'>Aplikacija "Sudski sporovi i prekršajni postupci"</span> | <span className='padding-horizontal-10'>verzija 1.0</span> | <span className='padding-horizontal-10'>Hrvatske šume 2024.</span> 
        </div>
    );
}

export default Footer;