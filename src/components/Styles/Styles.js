import {makeStyles} from "@material-ui/core/styles";
import {grey, red} from "@material-ui/core/colors";

const myButton = makeStyles({
    button: {
        background: '#3F9EF8',
        border: 0,
        borderRadius: 20,
        color: 'black',
        height: 45,
        padding: '0 20px',
        marginTop: 70,
        width: '100%',
    },
    input: {
        margin: 6,
        width: '100%',
    },
});

const myNav = makeStyles({
        root: {
            flexGrow: 1,
        },
        button: {
            background: 'dark',
            border: 0,
            borderRadius: 20,
            color: 'white',
            height: 45,
            marginTop: 10,
            width: '80%',
        },
        button2: {
            background: '#3F9EF8',
            border: 0,
            borderRadius: 20,
            color: 'white',
            height: 40,
            marginTop: 10,
            width: '100%',
        },
        button3: {
            background: 'red',
            border: 0,
            borderRadius: 20,
            color: 'white',
            margin: '10px',
        },
        button4: {
            border: 0,
            color: 'white',
            margin: '10px',
        },
        button5: {
            background: '#1A5276 ',
            border: 0,
            borderRadius: 20,
            color: 'white',
            margin: '10px',
        },
        button6: {
            background: '#3F9EF8',
            border: 0,
            borderRadius: 20,
            color: 'white',
            height: 40,
            marginTop: 20,
            width: '100%',
        },
        nav: {
          background: 'black',
        },
       
        title: {
            flexGrow: 1,
            color: 'white',
            textDecoration: 'none',
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            position: 'center',
            width: '100vh',
            height: '35vh',
        },
       
        buttontags: {
          fontSize: '50px',
        },
        card: {
            display: 'flex',
            width: '60%',
            margin: '5px',
        },
        cardProfile: {
            display: 'flex',
            flexDirection: 'column',
            margin: '20px',
        },
        buttonCard: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
            width: '75%',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: '25%',
            height: '100%',
        },
        avatar: {
            backgroundColor: red[500],
        },
        cardDetail: {
            margin: '20px',
            width: '60%',
        },
    })

export {
    myButton,
    myNav,
}