import {

Dialog,
DialogContent,
Typography,
Button,
Box

} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import {

useState

} from "react";



export default function AgeVerificationDialog(){


    const [open,setOpen] = useState(

        sessionStorage.getItem("ageVerified") !== "true"

    );

    const theme = useTheme();



    const confirm = ()=>{
        sessionStorage.setItem(
        "ageVerified",
        "true"
        );
        setOpen(false);
    };



    return (

        <Dialog

        open={open}

        maxWidth="sm"

        fullWidth

        >


        <DialogContent>


        <Box

        align="center"

        py={3}

        >


        <Typography

        variant="h5"

        fontWeight={700}

        gutterBottom

        >

        Accesso riservato ai maggiorenni

        </Typography>



        <Typography

        sx={{

        my:4

        }}

        >


        Per visitare il sito dichiara di avere
        l'età prevista dalla normativa vigente
        per il consumo di bevande alcoliche.


        </Typography>



        <Typography sx={{ mb: 2 }}>
            <a href="/bevi_responsabilmente.pdf" target="_blank" rel="noreferrer" style={{ color: "#000", textDecoration: 'underline' }}>
                Bevi responsabilmente
            </a>
        </Typography>

        <Button

        variant="contained"

        onClick={confirm}

        sx={{
            background: theme.palette.background.button,
            color: theme.palette.primary.main,
        }}

        >

        Sono maggiorenne

        </Button>



        </Box>


        </DialogContent>


        </Dialog>


    );


}