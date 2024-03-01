import express from 'express';
const router = express.Router();

// Micro routes
import artistRoutes from './artistRoutes.js';
import albumRoutes from './albumRoutes.js';

// Services
import { linkSpotifyAccount, oauthCallback, spotifySearch } from '../../services/spotify/userService.js';
import { verifyAccessToken } from '../../utils/jwt.js';

// Middleware to handle authentication
// router.use(verifyAccessToken);

// Use micro routes (Spotify)
router.use('/artists', artistRoutes);
router.use('/albums', albumRoutes);

// Micro routes
router.get('/linkSpotifyAccount', async (req, res) => {
    try {
        const response = await linkSpotifyAccount(req, res);
        return response;
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/oauthCallback', async (req, res) => {
    try {
        const response = await oauthCallback(req, res);
        return response;
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/search', async (req, res) => {
    try {
        const response = await spotifySearch(req.body);
        res.status(200).send(response);
    } catch (err) {
        res.status(500).send(err);
    }
});

export default router;
