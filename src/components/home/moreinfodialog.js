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
            <Typography variant="h5">{data.module}</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography variant="body3">FEATURES</Typography>
              <ul>
                {data?.features?.map((feature, index) => (
                  <Typography variant="body3" key={index}>
                    <li>{feature}</li>
                  </Typography>
                ))}
              </ul>
              <Typography variant="body3">LANGUAGES USED</Typography>
              <ul>
                {data?.languageUsed?.map((language, index) => (
                  <Typography variant="body3" key={index}>
                    <li>{language}</li>
                  </Typography>
                ))}
              </ul>
              <Typography variant="body3">TECHNOLOGIES USED</Typography>
              <ul>
                {data?.techUsed?.map((tech, index) => (
                  <Typography variant="body3" key={index}>
                    <li>{tech}</li>
                  </Typography>
                ))}
              </ul>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      )}
    </React.Fragment>
  );
}
