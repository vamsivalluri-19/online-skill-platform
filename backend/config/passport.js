const crypto = require("crypto");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../models/User");

const DEFAULT_CALLBACK_BASE = "http://localhost:5000/api/auth";

const getCallbackUrl = (provider) => {
  const base = process.env.OAUTH_CALLBACK_BASE || DEFAULT_CALLBACK_BASE;
  return `${base}/${provider}/callback`;
};

const buildRandomPassword = () => crypto.randomBytes(24).toString("hex");

const findOrCreateUser = async ({ provider, profile }) => {
  const email = profile.emails && profile.emails[0] ? profile.emails[0].value.toLowerCase() : null;
  const name = profile.displayName || profile.username || "New User";
  const avatar = profile.photos && profile.photos[0] ? profile.photos[0].value : null;
  const oauthId = profile.id ? String(profile.id) : null;

  let user = null;

  if (email) {
    user = await User.findOne({ email });
  }

  if (!user && oauthId) {
    user = await User.findOne({ oauthProvider: provider, oauthId });
  }

  if (user) {
    if (!user.oauthProvider || !user.oauthId) {
      user.oauthProvider = provider;
      user.oauthId = oauthId;
      if (avatar && !user.avatar) {
        user.avatar = avatar;
      }
      await user.save();
    }
    return user;
  }

  const newUser = new User({
    name,
    email: email || `${provider}-${oauthId}@oauth.local`,
    password: buildRandomPassword(),
    avatar,
    oauthProvider: provider,
    oauthId,
    isEmailVerified: Boolean(email)
  });

  await newUser.save();
  return newUser;
};

module.exports = (passport) => {
  if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: getCallbackUrl("google")
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            const user = await findOrCreateUser({ provider: "google", profile });
            return done(null, user);
          } catch (error) {
            return done(error, null);
          }
        }
      )
    );
  } else {
    console.warn("⚠️  Google OAuth disabled: missing GOOGLE_CLIENT_ID/GOOGLE_CLIENT_SECRET");
  }

  if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
    passport.use(
      new GitHubStrategy(
        {
          clientID: process.env.GITHUB_CLIENT_ID,
          clientSecret: process.env.GITHUB_CLIENT_SECRET,
          callbackURL: getCallbackUrl("github"),
          scope: ["user:email"]
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            const user = await findOrCreateUser({ provider: "github", profile });
            return done(null, user);
          } catch (error) {
            return done(error, null);
          }
        }
      )
    );
  } else {
    console.warn("⚠️  GitHub OAuth disabled: missing GITHUB_CLIENT_ID/GITHUB_CLIENT_SECRET");
  }

  if (process.env.FACEBOOK_APP_ID && process.env.FACEBOOK_APP_SECRET) {
    passport.use(
      new FacebookStrategy(
        {
          clientID: process.env.FACEBOOK_APP_ID,
          clientSecret: process.env.FACEBOOK_APP_SECRET,
          callbackURL: getCallbackUrl("facebook"),
          profileFields: ["id", "displayName", "emails", "photos"]
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            const user = await findOrCreateUser({ provider: "facebook", profile });
            return done(null, user);
          } catch (error) {
            return done(error, null);
          }
        }
      )
    );
  } else {
    console.warn("⚠️  Facebook OAuth disabled: missing FACEBOOK_APP_ID/FACEBOOK_APP_SECRET");
  }
};
