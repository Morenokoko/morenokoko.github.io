import * as React from "react";
import {
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function MoreInfoDialog({ open, handleClose, data }) {
  return (
    <React.Fragment>
      {data && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <Typography variant="h5">{data.title}</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography variant="body3">
                FEATURES
                <ul>
                  {data?.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                LANGUAGES USED
                <ul>
                  {data?.languageUsed?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                TECHNOLOGIES USED
                <ul>
                  {data?.techUsed?.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </Typography>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      )}
    </React.Fragment>
  );
}
