import { useState } from "react"
import { Box, Button, TextField, Typography, Alert, Paper, CircularProgress, Divider } from "@mui/material"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Profile() {
  const { currentUser, updateUserProfile, changePassword } = useAuth()
  const [name, setName] = useState(currentUser.displayName || "")
  const [photoURL, setPhotoURL] = useState(currentUser.photoURL || "")
  const [newPassword, setNewPassword] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
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

  async function handleProfileUpdate(e) {
    e.preventDefault()
    setError("")
    setMessage("")
    setLoading(true)
    try {
      await updateUserProfile(name, photoURL)
      setMessage("Profile updated successfully!")
    } catch (err) {
      setError("Failed to update profile.")
    }
    setLoading(false)
  }

  async function handlePasswordChange(e) {
    e.preventDefault()
    setError("")
    setMessage("")
    if (newPassword.length < 6) return setError("Password must be at least 6 characters.")
    setLoading(true)
    try {
      await changePassword(newPassword)
      setMessage("Password changed successfully!")
      setNewPassword("")
    } catch (err) {
      setError("Failed to change password. You may need to re-login.")
    }
    setLoading(false)
  }

  return (
    <Box minHeight="100vh" sx={{ background: "#0a0a0f", px: 3, py: 5 }}>
      <Box maxWidth={500} mx="auto">
        <Typography variant="h4" sx={{ color: "#a78bfa", fontWeight: 700, mb: 4 }}>Edit Profile</Typography>

        {message && <Alert severity="success" sx={{ mb: 3, background: "#0f2d1a", color: "#86efac", "& .MuiAlert-icon": { color: "#4ade80" } }}>{message}</Alert>}
        {error && <Alert severity="error" sx={{ mb: 3, background: "#2d1515", color: "#fca5a5", "& .MuiAlert-icon": { color: "#f87171" } }}>{error}</Alert>}

        <Paper elevation={0} sx={{ background: "#13131f", border: "1px solid #2d2d4e", borderRadius: 3, p: 3, mb: 3 }}>
          <Typography variant="h6" sx={{ color: "#e2e8f0", mb: 2 }}>Profile Information</Typography>
          <Box component="form" onSubmit={handleProfileUpdate} display="flex" flexDirection="column" gap={2}>
            <TextField label="Display Name" value={name} onChange={e => setName(e.target.value)} fullWidth sx={inputStyle} />
            <TextField label="Photo URL (optional)" value={photoURL} onChange={e => setPhotoURL(e.target.value)} fullWidth sx={inputStyle} />
            <Button type="submit" variant="contained" disabled={loading} sx={{ py: 1.5, background: "#7c3aed", "&:hover": { background: "#6d28d9" }, borderRadius: 2 }}>
              {loading ? <CircularProgress size={22} sx={{ color: "#fff" }} /> : "Update Profile"}
            </Button>
          </Box>
        </Paper>

        <Paper elevation={0} sx={{ background: "#13131f", border: "1px solid #2d2d4e", borderRadius: 3, p: 3, mb: 3 }}>
          <Typography variant="h6" sx={{ color: "#e2e8f0", mb: 2 }}>Change Password</Typography>
          <Box component="form" onSubmit={handlePasswordChange} display="flex" flexDirection="column" gap={2}>
            <TextField label="New Password" type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} fullWidth sx={inputStyle} />
            <Button type="submit" variant="contained" disabled={loading} sx={{ py: 1.5, background: "#7c3aed", "&:hover": { background: "#6d28d9" }, borderRadius: 2 }}>
              {loading ? <CircularProgress size={22} sx={{ color: "#fff" }} /> : "Change Password"}
            </Button>
          </Box>
        </Paper>

        <Button onClick={() => navigate("/dashboard")} sx={{ color: "#a78bfa", textTransform: "none" }}>
          ← Back to Dashboard
        </Button>
      </Box>
    </Box>
  )
}