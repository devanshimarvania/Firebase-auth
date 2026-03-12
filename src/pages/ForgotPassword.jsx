import { useState } from "react"
import { Box, Button, TextField, Typography, Alert, Paper, CircularProgress } from "@mui/material"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { resetPassword } = useAuth()

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      color: "#e2e8f0",
      "& fieldset": { borderColor: "#2d2d4e" },
      "&:hover fieldset": { borderColor: "#7c3aed" },
      "&.Mui-focused fieldset": { borderColor: "#7c3aed" },
      background: "#0a0a0f"
    },
    "& .MuiInputLabel-root": { color: "#64748b" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#a78bfa" }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setMessage("")
    setLoading(true)
    try {
      await resetPassword(email)
      setMessage("Check your email inbox for the password reset link!")
    } catch (err) {
      setError("Failed to send reset email. Check if email is correct.")
    }
    setLoading(false)
  }

  return (
    <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center" sx={{ background: "#0a0a0f", px: 2 }}>
      <Paper elevation={0} sx={{ width: "100%", maxWidth: 440, background: "#13131f", border: "1px solid #2d2d4e", borderRadius: 3, p: 4 }}>
        <Typography variant="h4" sx={{ color: "#a78bfa", fontWeight: 700, mb: 0.5 }}>Reset Password</Typography>
        <Typography variant="body2" sx={{ color: "#64748b", mb: 3 }}>We'll send a reset link to your email</Typography>

        {message && <Alert severity="success" sx={{ mb: 2, background: "#0f2d1a", color: "#86efac", "& .MuiAlert-icon": { color: "#4ade80" } }}>{message}</Alert>}
        {error && <Alert severity="error" sx={{ mb: 2, background: "#2d1515", color: "#fca5a5", "& .MuiAlert-icon": { color: "#f87171" } }}>{error}</Alert>}

        <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
          <TextField label="Email Address" type="email" value={email} onChange={e => setEmail(e.target.value)} required fullWidth sx={inputStyle} />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{ py: 1.5, background: "#7c3aed", "&:hover": { background: "#6d28d9" }, borderRadius: 2, fontWeight: 600 }}
          >
            {loading ? <CircularProgress size={22} sx={{ color: "#fff" }} /> : "Send Reset Email"}
          </Button>
        </Box>

        <Typography variant="body2" sx={{ textAlign: "center", color: "#475569", mt: 3 }}>
          <Link to="/login" style={{ color: "#a78bfa", textDecoration: "none" }}>← Back to Login</Link>
        </Typography>
      </Paper>
    </Box>
  )
}