import Colors from './Colors';

const Sizing = {
    TITLE_TEXT: 22,
    INPUT_TEXT: 18,

}

const styles = {
    appContainer: {
        height: "100%",
        minHeight: '100vh',
        width: "100vw",
        // width: "100%",
        backgroundColor: Colors.CONTENT_BACKGROUND,
        color: Colors.FONT,
        padding: 45,
    },
    container: {
        // height: '50%',
        // width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        // minHeight: '80vh', // an idea for adding consistency
        // backgroundColor: 'pink',

    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '50%',
        minWidth: 300,
        // backgroundColor: 'darkgreen',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        // height: 100,
        width: '30%',
        minWidth: 300,
        marginTop: 15,
        padding: 15,
        // backgroundColor: 'lightblue',
    },
    inputTitle: {
        // margin: '25px 0 10px 0',
        fontSize: Sizing.TITLE_TEXT,
        color: Colors.INPUT_TITLE,

    },
    textInput: {
        width: '100%',
        height: 35,
        color: Colors.INPUT_TEXT,
        backgroundColor: Colors.INPUT_BACKGROUND,
        fontSize: Sizing.INPUT_TEXT,
        marginTop: 10,
        paddingLeft: 5,

    },
    rateTitle: {
        fontSize: Sizing.INPUT_TEXT,
        color: Colors.INPUT_TITLE,
    },
    rateTextInput: {
        margin: 5,
        paddingLeft: 5,
        width: 50,
        height: 20
    },
    radioSectionContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '30%',
        minWidth: 300,
        marginTop: 15,
        padding: 10,
        // backgroundColor: 'purple',
        // height: 50,
    },
    radioInputGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '30%',
        minWidth: 100,
        // backgroundColor: 'lightgreen',
    },
    sliderSectionContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        // height: 100,
        width: '30%',
        minWidth: 300,
        marginTop: 15,
        padding: 10,
        // backgroundColor: 'cyan',
    },
    sliderGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '30%',
        minWidth: 300,
        height: 70,
        // margin: 10,
        padding: 10,
        // backgroundColor: 'blue',

    },
    slider: {
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        // backgroundColor: 'red',
        // width: 100,
    },
    buttonToggleContainer: {

    },
    smallButton: {
        height: 25,
        width: 50,
        color: Colors.FONT,
        backgroundColor: 'gray',
        margin: 10,
    },
    smallButtonSelected: {
        backgroundColor: 'red',
    },
    navBtn: {
        backgroundColor: Colors.BTN_BACKGROUND,
        width: 200,
        height: 40,
        borderRadius: 5,
        border: 'none',
        margin: "10px 2px",
        cursor: "pointer",
    },
    textBtnContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '30%',
        minWidth: 300,
        height: 40,
        marginTop: 15,

    },
    textBtn: {
        background: 'none',
        border: 'none',
        cursor: "pointer",
        color: Colors.FONT,
        fontSize: 15,
    },
}

export default styles