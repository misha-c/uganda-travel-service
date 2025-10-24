// @ts-check
import { defineConfig } from 'astro/config';

const isNetlify = process.env.NETLIFY === 'true';

// https://astro.build/config
export default defineConfig({ 
    site: 'https://ecotribeadventures.netlify.app/',
    base: isNetlify ? '/' : '/uganda-travel-service',
    output: 'static',
});