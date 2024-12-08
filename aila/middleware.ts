import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
 
export default createMiddleware({
    // Use the existing routing configuration
    ...routing,
    defaultLocale: 'en', // Explicitly define 'en' as the default locale
    localePrefix: 'as-needed', // Remove '/en' prefix from the default locale
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/:path*']
    // matcher: ['/', '/(en|fr|tr)/:path*']
	// matcher: ['/', '/(fr|tr)/:path*']
};