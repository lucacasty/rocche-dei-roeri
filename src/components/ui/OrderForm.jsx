import {
    useState
} from "react";


import {

    TextField,
    Button,
    Stack,
    Checkbox,
    FormControlLabel,
    Alert

} from "@mui/material";



export default function OrderForm() {


    const [privacy, setPrivacy] = useState(false);

    const [adult, setAdult] = useState(false);

    const [sent, setSent] = useState(false);



    const [form, setForm] = useState({

        nome: "",
        cognome: "",
        email: "",
        telefono: "",
        comune: "",
        messaggio: ""

    });



    const handleChange = (event) => {


        setForm({

            ...form,

            [event.target.name]: event.target.value

        });


    };



    const sendMail = () => {


        if (!privacy || !adult) {

            return;

        }



        const body = `

    Richiesta ordine Amaro Rocche dei Roeri


    Nome:
    ${form.nome}


    Cognome:
    ${form.cognome}


    Email:
    ${form.email}


    Telefono:
    ${form.telefono}


    Comune:
    ${form.comune}


    Messaggio:
    ${form.messaggio}



    Confermo di essere maggiorenne.

    Ho preso visione della privacy.


    `;



        window.location.href =

            `mailto:amaro.rocchedeiroeri@yahoo.com?subject=Ordine Amaro Rocche dei Roeri&body=${encodeURIComponent(body)}`;



        setSent(true);


    };



    return (

        <Stack

            spacing={3}

        >



            {
                sent &&

                <Alert severity="success">

                    Apertura client mail in corso.

                </Alert>

            }



            <TextField

                label="Nome"

                name="nome"

                value={form.nome}

                onChange={handleChange}

                fullWidth

            />



            <TextField

                label="Cognome"

                name="cognome"

                value={form.cognome}

                onChange={handleChange}

                fullWidth

            />



            <TextField

                label="Email"

                name="email"

                value={form.email}

                onChange={handleChange}

                fullWidth

            />



            <TextField

                label="Telefono"

                name="telefono"

                value={form.telefono}

                onChange={handleChange}

                fullWidth

            />



            <TextField

                label="Comune"

                name="comune"

                value={form.comune}

                onChange={handleChange}

                fullWidth

            />



            <TextField

                label="Messaggio"

                name="messaggio"

                value={form.messaggio}

                onChange={handleChange}

                multiline

                rows={5}

                fullWidth

            />



            <FormControlLabel

                control={

                    <Checkbox

                        checked={privacy}

                        onChange={(e) => setPrivacy(e.target.checked)}

                    />

                }

                label="Accetto la privacy policy"

            />



            <FormControlLabel

                control={

                    <Checkbox

                        checked={adult}

                        onChange={(e) => setAdult(e.target.checked)}

                    />

                }

                label="Dichiaro di essere maggiorenne"

            />



            <Button

                variant="contained"

                size="large"

                disabled={!privacy || !adult}

                onClick={sendMail}

            >

                Invia richiesta

            </Button>



        </Stack>

    );


}