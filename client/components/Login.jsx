import React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

export default function Login () {
  return (
    <>
      <h1>U1</h1>
      <h2>This is the user login page</h2>
      <div className="login_center_div">
        <div className="form_container">
          <h2>User</h2>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              sx={{ display: 'flex' }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              sx={{ display: 'flex' }}
              multiline
              rows={4}
              maxRows={4}
              id="outlined-basic"
              label="Idea"
              variant="outlined"
            />
          </Box>
        </div>
      </div>
    </>
  )
}
