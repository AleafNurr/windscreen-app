import { Box, Typography, Button, Dialog, DialogTitle } from "@mui/material";

export interface SubmitDialogProps{
    open : boolean;
    closeOption : string;
    onClose : (value: string) => void;
}

export default function SubmitDialog(props: SubmitDialogProps) {
    const { onClose, closeOption, open} = props;

    const handleClose = () => {
        onClose(closeOption);
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle> Thank you </DialogTitle>
            <Box sx={{mx: 2}}>
                <Typography>We will be in touch at the earliest convenience</Typography>
            </Box>
            <Button onClick={handleClose}>Close</Button>
        </Dialog>
    )
}