"use client"

import theme from "../assets/theme"
import { Typography, Stack, Divider, Box, FormControl, TextField, Button } from "@mui/material"
import Image from "next/image"
import photo1 from "../assets/image/favicon.ico"
import SendIcon from '@mui/icons-material/Send'
import { sendEmail } from "../lib/actions"
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { redirect } from "next/navigation"

export default function Contact () {
    const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {error: null, success: false})
    
    useEffect(() => {
    if (sendEmailState.success) {
        alert("Email envoyé!")
        redirect("/", "replace")
    }
    if (sendEmailState.error) {
        alert("Error sending email!")
    }
    }, [sendEmailState])  
    
    const stack = {
        padding: 3
    }

    const title = {
        color: theme.palette.primary.dark,
        textTransform: "uppercase",
        fontWeight: "bold",
        textAlign: "center"
    }

    const img = {
        width: 200,
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const divider = {
        backgroundColor: theme.palette.primary.dark
    }

    const subtitle1 = {
        color: theme.palette.primary.dark
    }

    const formControl = {
        display: "flex",
        flexDirection: "column",
        gap: 2
    }

    const btnSend = {
        width: "20%",
        backgroundColor: theme.palette.primary.dark,
        "&:hover": {
            backgroundColor: theme.palette.primary.main
          }

    }

    const input = {
        input: {
            fontFamily: theme.typography.fontFamily
            },
        label: {
            color: theme.palette.primary.dark,
            fontFamily: theme.typography.fontFamily,
            '&.Mui-focused' : {
                color: theme.palette.secondary.dark,
            }
        },
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: theme.palette.secondary.dark
            }
        }
    }
    

    return (
        <Stack direction="column" spacing={6} sx={stack}>
            <Typography variant="h4" sx={title}>Contactez-nous !</Typography>
            <Stack
                direction="row"
                spacing={6}
                justifyContent="center"
                divider={<Divider orientation="vertical" flexItem aria-hidden="true" sx={divider} />}
            >
                <Box sx={img}>
                    <Image alt="Contact" src={photo1} width={1024} height={1024} layout="responsive"/>
                </Box>
                <Stack direction="column" spacing={3}>
                    <Typography variant="subtile1" sx={subtitle1}>
                        Une question, une prise de contact ou une information à partager ? Nous répondrons avec grand plaisir à vos messages.
                    </Typography>
                    <form action={sendEmailAction}>
                        <FormControl sx={formControl} error component="fieldset">
                            <TextField id="name" label="Nom" type="text" name="name" size="small" fullWidth sx={input}/>
                            <TextField id="email" label="Adresse email" type="email" name="email" size="small" fullWidth sx={input}/>
                            <TextField id="content" label="Message" type="text" name="message" size="small" fullWidth sx={input} multiline rows={4}/>
                            <Button variant="contained" endIcon={<SendIcon />} sx={btnSend} type="submit">Envoyer</Button>
                        </FormControl>
                    </form>
                </Stack>
            </Stack>    
        </Stack>
    )
}