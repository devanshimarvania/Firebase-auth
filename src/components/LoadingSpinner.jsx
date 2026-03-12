import { Box, CircularProgress } from "@mui/material"

export default function LoadingSpinner() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" sx={{ background: "#0a0a0f" }}>
      <CircularProgress sx={{ color: "#7c3aed" }} size={50} />
    </Box>
  )
}