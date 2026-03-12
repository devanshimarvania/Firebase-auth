import { useState } from "react"
import {
  Box, Button, TextField, Typography, Alert,
  Divider, Paper, CircularProgress
} from "@mui/material"
import GoogleIcon from "@mui/icons-material/Google"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate, Link } from "react-router-dom"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { register, updateUserProfile, loginWithGoogle } = useAuth()
  const navigate = useNavigate()

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
    setLoading(true)
    try {
      await register(email, password)
      await updateUserProfile(name, "")
      navigate("/dashboard")
    } catch (err) {
      setError(err.message)
    }
    setLoading(false)
  }

  async function handleGoogle() {
    setError("")
    try {
      await loginWithGoogle()
      navigate("/dashboard")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center" sx={{ background: "#0a0a0f", px: 2 }}>
      <Paper elevation={0} sx={{ width: "100%", maxWidth: 440, background: "#13131f", border: "1px solid #2d2d4e", borderRadius: 3, p: 4 }}>
        <Typography variant="h4" sx={{ color: "#a78bfa", fontWeight: 700, mb: 0.5 }}>Create Account</Typography>
        <Typography variant="body2" sx={{ color: "#64748b", mb: 3 }}>Join us today. It's free!</Typography>

        {error && <Alert severity="error" sx={{ mb: 2, background: "#2d1515", color: "#fca5a5", "& .MuiAlert-icon": { color: "#f87171" } }}>{error}</Alert>}

        <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
          <TextField label="Full Name" value={name} onChange={e => setName(e.target.value)} required fullWidth sx={inputStyle} />
          <TextField label="Email Address" type="email" value={email} onChange={e => setEmail(e.target.value)} required fullWidth sx={inputStyle} />
          <TextField label="Password (min 6 chars)" type="password" value={password} onChange={e => setPassword(e.target.value)} required fullWidth sx={inputStyle} />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{ py: 1.5, background: "#7c3aed", "&:hover": { background: "#6d28d9" }, borderRadius: 2, fontWeight: 600 }}
          >
            {loading ? <CircularProgress size={22} sx={{ color: "#fff" }} /> : "Register"}
          </Button>
        </Box>

        <Divider sx={{ my: 3, borderColor: "#2d2d4e", "&::before, &::after": { borderColor: "#2d2d4e" } }}>
          <Typography variant="caption" sx={{ color: "#475569" }}>OR</Typography>
        </Divider>

        <Button
          onClick={handleGoogle}
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{ py: 1.5, borderColor: "#2d2d4e", color: "#cbd5e1", "&:hover": { borderColor: "#7c3aed", background: "#1a1a2e" }, borderRadius: 2 }}
        >
          Continue with Google
        </Button>

        <Typography variant="body2" sx={{ textAlign: "center", color: "#475569", mt: 3 }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#a78bfa", textDecoration: "none" }}>Login</Link>
        </Typography>
      </Paper>
    </Box>
  )
}