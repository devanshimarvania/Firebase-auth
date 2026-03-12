import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material"
import LockIcon from "@mui/icons-material/Lock"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function Navbar() {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await logout()
    navigate("/login")
  }

  return (
    <AppBar position="static" sx={{ background: "#13131f", borderBottom: "1px solid #2d2d4e", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={1} component={Link} to="/" sx={{ textDecoration: "none" }}>
          <LockIcon sx={{ color: "#7c3aed" }} />
          <Typography variant="h6" sx={{ color: "#a78bfa", fontWeight: 700, letterSpacing: 1 }}>
            AuthApp
          </Typography>
        </Box>

        <Box display="flex" gap={2}>
          {currentUser ? (
            <>
              <Button component={Link} to="/dashboard" sx={{ color: "#cbd5e1", "&:hover": { color: "#a78bfa" } }}>
                Dashboard
              </Button>
              <Button component={Link} to="/profile" sx={{ color: "#cbd5e1", "&:hover": { color: "#a78bfa" } }}>
                Profile
              </Button>
              <Button
                onClick={handleLogout}
                variant="contained"
                sx={{ background: "#7c3aed", "&:hover": { background: "#6d28d9" }, borderRadius: 2 }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button component={Link} to="/login" sx={{ color: "#cbd5e1", "&:hover": { color: "#a78bfa" } }}>
                Login
              </Button>
              <Button
                component={Link}
                to="/register"
                variant="contained"
                sx={{ background: "#7c3aed", "&:hover": { background: "#6d28d9" }, borderRadius: 2 }}
              >
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}