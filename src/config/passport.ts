import passportGoogle from 'passport-google-oauth20'

import User from '../models/User'

const GoogleStrategy = passportGoogle.Strategy

export const google = new GoogleStrategy(
  {
    clientID: process.env.CLIENT_ID as string,
    clientSecret: process.env.CLIENT_SECRET as string,
    callbackURL: '/api/v1/users/auth/google/cakes',
    scope: ['profile', 'email']
  },
  function (accessToken: any, refreshToken: any, profile: any, callme: any) {
    console.log(profile)
    User.findOne({ googleId: profile.id }, (err: any, user: any) => {
      if (user) {
        return callme(err, user)
      } else {
        new User({
          name: profile.name.givenName,
          email: profile.emails[0].value,
          isAdmin: false,
          googleId: profile.id,
        })
          .save()
          .then((newUser) => {
            console.log(newUser)
            return callme(null, newUser)
          })
      }
    })
  }
)






