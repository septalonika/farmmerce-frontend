import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Fade,
  Box,
  useMediaQuery,
  useTheme,
  BackdropProps,
} from "@mui/material";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

interface ConfirmModalProps {
  open: boolean;
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  iconColor?: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Fade ref={ref} {...props} />;
});

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  title = "Konfirmasi",
  message,
  confirmLabel = "Ya",
  cancelLabel = "Tidak",
  onConfirm,
  onCancel,
  iconColor = "#f59e0b",
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      TransitionComponent={Transition}
      fullScreen={fullScreen}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pb: 25,
        backdropFilter: "blur(8px)",
      }}
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(6px)",
            backgroundColor: "rgba(0, 0, 0, 0.3)", // Lighten the dark overlay
          },
        } as BackdropProps,
      }}
      PaperProps={{
        sx: {
          borderRadius: "20px",
          p: 3,
          bgcolor: theme.palette.mode === "light" ? "#ffffffdd" : "#1f1f1fd1", // Slight transparency
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // Adding soft shadow for depth
          backdropFilter: "blur(10px)",
          border: `1px solid ${theme.palette.primary.main}`, // Border to add a pop effect
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        gap={2}
      >
        <WarningAmberRoundedIcon sx={{ fontSize: 56, color: iconColor }} />
        <DialogTitle
          sx={{
            fontWeight: 700,
            fontSize: 20,
            color: theme.palette.primary.main,
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent>
          <Typography
            variant="body1"
            sx={{
              fontSize: 16,
              opacity: 0.85,
              color: theme.palette.text.primary, // Ensuring text color is visible and readable
            }}
            id="confirm-dialog-description"
          >
            {message}
          </Typography>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", gap: 2 }}>
          <Button
            onClick={onCancel}
            variant="outlined"
            color="inherit"
            sx={{
              borderRadius: 999,
              px: 4,
              textTransform: "none",
              fontWeight: 600,
              border: `2px solid ${theme.palette.primary.main}`, // Make it stand out
            }}
          >
            {cancelLabel}
          </Button>
          <Button
            onClick={onConfirm}
            variant="contained"
            color="error"
            sx={{
              borderRadius: 999,
              px: 4,
              textTransform: "none",
              fontWeight: 600,
              boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
              ":hover": {
                boxShadow: "0 6px 18px rgba(0,0,0,0.15)", // Hover effect for extra pop
              },
            }}
          >
            {confirmLabel}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default ConfirmModal;
