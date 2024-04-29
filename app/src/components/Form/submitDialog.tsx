import { Box, Typography, Button, Dialog, DialogTitle } from "@mui/material";

export interface SubmitDialogProps{
    open : boolean;
    closeOption : string;
    onClose : (value: string) => void;
    filledOut : boolean;
}

const requiredJSX = () => {
    return (
        <>
        <DialogTitle> Thank you </DialogTitle>
        <Box sx={{mx: 2}}>
            <Typography>We will be in touch at the earliest convenience</Typography>
        </Box>
        </>
    )
}

export default function SubmitDialog(props: SubmitDialogProps) {
    const { onClose, closeOption, open, filledOut} = props;

    const handleClose = () => {
        onClose(closeOption);
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            {
                filledOut ? requiredJSX() : <DialogTitle> Please fill the required sections </DialogTitle>
            }
            <Button onClick={handleClose}>Close</Button>
        </Dialog>
    )
}