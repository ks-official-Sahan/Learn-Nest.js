export * from './auth.dto';

// This is called barren export pattern
/* 
The main advantage is that now I can just AuthDTO. It's going to import all the DTO from that folder instead of doing something like auth.dto.ts
and if we have something else like sign.up.dto.ts that is instead of doing that, it's going to import everything from the same folder. 
All the imports will basically be there in those brackets instead of being spread out in your in your code. 
So that's nice pattern that I love using. It brings a bit of more code, but honestly it's worth it. It makes your code much readable.
*/
