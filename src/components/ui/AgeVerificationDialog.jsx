import {

Dialog,
DialogContent,
Typography,
Button,
Box

} from "@mui/material";


import {

useState

} from "react";



export default function AgeVerificationDialog(){


    const [open,setOpen] = useState(

        localStorage.getItem("ageVerified") !== "true"

    );



    const confirm = ()=>{
        localStorage.setItem(
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

        textAlign="center"

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

        my:3

        }}

        >


        Per visitare il sito dichiara di avere
        l'età prevista dalla normativa vigente
        per il consumo di bevande alcoliche.


        </Typography>



        <Button

        variant="contained"

        onClick={confirm}

        >

        Sono maggiorenne

        </Button>



        </Box>


        </DialogContent>


        </Dialog>


    );


}