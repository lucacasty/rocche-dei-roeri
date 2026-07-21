import { useState } from "react";

import {
    Alert,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import { QRCodeSVG } from "qrcode.react";

export default function OrderForm() {
    const [privacy, setPrivacy] = useState(false);
    const [adult, setAdult] = useState(false);
    const [sent, setSent] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [form, setForm] = useState({
        nome: "",
        cognome: "",
        email: "",
        telefono: "",
        comune: "",
        messaggio: "",
        iniziali_nome: "",
        iniziali_cognome: "",
        anno_nascita: ""
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const buildMailtoUrl = () => {
        const body = `Buongiorno sono ${form.nome} ${form.cognome}.

        Desideravo avere informazioni sul vostro amaro.

        TELEFONO: ${form.telefono}
        E-MAIL: ${form.email}
        COMUNE DI RESIDENZA: ${form.comune}
        MESSAGGIO: ${form.messaggio}

        Dichiaro di aver preso visione e accettare l'informativa sulla privacy.
        Dichiaro di essere MAGGIORENNE.

        Iniziali Nome: ${form.nome.slice(0,2).toUpperCase()}
        Iniziali Cognome: ${form.cognome.slice(0,2).toUpperCase()}
        Anno di nascita: ${form.anno_nascita}

        Dati necessari per adempiere a obbligo di controllo di legge.
        La vendita di alcolici è destinata ad un pubblico adulto.
        Legge - 30/03/2001, n. 125`;

        return `mailto:amaro.rocchedeiroeri@yahoo.com?subject=Ordine Amaro Rocche dei Roeri&body=${encodeURIComponent(body)}`;
    };

    const sendMail = () => {
        if (!privacy || !adult) {
            return;
        }

        window.location.href = buildMailtoUrl();
        setSent(true);
    };

    return (
        <Stack spacing={3}>
            {sent && (
                <Alert severity="success">
                    Apertura client mail in corso.
                </Alert>
            )}

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
                type="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
            />

            <TextField
                label="Telefono"
                name="telefono"
                type="tel"
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
                label="Anno di nascita"
                name="anno_nascita"
                value={form.anno_nascita}
                onChange={handleChange}
                inputProps={{ maxLength: 4 }}
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
                label="Dichiaro di aver preso visione e accettare l'informativa sulla privacy"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={adult}
                        onChange={(e) => setAdult(e.target.checked)}
                    />
                }
                label="Dichiaro di essere MAGGIORENNE"
            />

            <Button
                variant="contained"
                size="large"
                disabled={!privacy || !adult}
                onClick={sendMail}
            >
                Invia richiesta mail
            </Button>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1.5,
                    mt: 1,
                    p: 2,
                    borderColor: "divider",
                    borderRadius: 2
                }}
            >
                <Typography variant="h6" align="center">
                    Inquadra il QR code per aprire la mail dal telefono
                </Typography>
                <QRCodeSVG value={buildMailtoUrl()} size={isMobile ? "100%" : "50%"} level="M" includeMargin />
            </Box>
        </Stack>
    );
}
