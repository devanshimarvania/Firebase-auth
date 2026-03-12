import { Box, Typography, Paper, Grid, Button, Avatar, Chip } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import LogoutIcon from "@mui/icons-material/Logout"
import VerifiedIcon from "@mui/icons-material/Verified"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate, Link } from "react-router-dom"

export default function Dashboard() {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await logout()
    navigate("/login")
  }

  return (
    <Box minHeight="100vh" sx={{ background: "#0a0a0f", px: 3, py: 5 }}>
      <Box maxWidth={700} mx="auto">
        <Paper elevation={0} sx={{ background: "#13131f", border: "1px solid #2d2d4e", borderRadius: 3, p: 4, mb: 3 }}>
          <Box display="flex" alignItems="center" gap={3} mb={4}>
            <Avatar
              src={currentUser.photoURL || ""}
              sx={{ width: 70, height: 70, background: "#7c3aed", fontSize: "1.8rem", border: "2px solid #7c3aed" }}
            >
              {!currentUser.photoURL && (currentUser.displayName?.charAt(0) || currentUser.email.charAt(0)).toUpperCase()}
            </Avatar>
            <Box>
              <Typography variant="h5" sx={{ color: "#f1f5f9", fontWeight: 700 }}>
                Welcome, {currentUser.displayName || "User"}! 👋
              </Typography>
              <Typography variant="body2" sx={{ color: "#64748b" }}>{currentUser.email}</Typography>
            </Box>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Box sx={{ background: "#0a0a0f", border: "1px solid #2d2d4e", borderRadius: 2, p: 2 }}>
                <Typography variant="caption" sx={{ color: "#475569", textTransform: "uppercase", letterSpacing: 1 }}>Status</Typography>
                <Box mt={0.5}><Chip label="✅ Authenticated" size="small" sx={{ background: "#0f2d1a", color: "#4ade80", fontWeight: 600 }} /></Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ background: "#0a0a0f", border: "1px solid #2d2d4e", borderRadius: 2, p: 2 }}>
                <Typography variant="caption" sx={{ color: "#475569", textTransform: "uppercase", letterSpacing: 1 }}>Email Verified</Typography>
                <Box mt={0.5}>
                  <Chip
                    label={currentUser.emailVerified ? "✅ Verified" : "⚠️ Not Verified"}
                    size="small"
                    sx={{ background: currentUser.emailVerified ? "#0f2d1a" : "#2d2a0f", color: currentUser.emailVerified ? "#4ade80" : "#facc15", fontWeight: 600 }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ background: "#0a0a0f", border: "1px solid #2d2d4e", borderRadius: 2, p: 2 }}>
                <Typography variant="caption" sx={{ color: "#475569", textTransform: "uppercase", letterSpacing: 1 }}>Provider</Typography>
                <Box mt={0.5}><Chip label={currentUser.providerData[0]?.providerId || "email"} size="small" sx={{ background: "#1a1040", color: "#a78bfa", fontWeight: 600 }} /></Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Box display="flex" gap={2} flexWrap="wrap">
          <Button
            component={Link}
            to="/profile"
            variant="contained"
            startIcon={<EditIcon />}
            sx={{ background: "#7c3aed", "&:hover": { background: "#6d28d9" }, borderRadius: 2, px: 3, py: 1.5 }}
          >
            Edit Profile
          </Button>
          <Button
            onClick={handleLogout}
            variant="outlined"
            startIcon={<LogoutIcon />}
            sx={{ borderColor: "#2d2d4e", color: "#94a3b8", "&:hover": { borderColor: "#ef4444", color: "#ef4444", background: "#2d1515" }, borderRadius: 2, px: 3, py: 1.5 }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Box>
  )
}