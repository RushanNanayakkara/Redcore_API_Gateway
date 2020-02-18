// import passport from 'passport';
// import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

// import constants from '../config/constants';

// Jwt strategy
// const jwtOpts = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
//   secretOrKey: constants.JWT_Secret,
// };

// const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
//   try {
//     const user = await User.findById(payload._id);
//     if (!user) {
//       return done(null, false);
//     }
//     return done(null, user);
//   } catch (error) {
//     return done(error, false);
//   }
// });

// passport.use(jwtStrategy);

// export const authJwt = passport.authenticate('jwt', { session: false });
