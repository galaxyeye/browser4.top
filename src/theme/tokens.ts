import { useMemo } from 'react';
import { Theme } from './ThemeProvider';

const corePalette = {
    light: {
        surfacePrimary: '#F8FAFC',
        surfaceAlt: '#FFFFFF',
        surfaceCard: '#F1F5F9',
        surfaceMuted: '#E2E8F0',
        surfaceInverse: '#0F172A',
        textPrimary: '#0F172A',
        textSecondary: '#334155',
        textMuted: '#64748B',
        textOnAccent: '#FFFFFF',
        borderSubtle: 'rgba(15,23,42,0.08)',
        borderStrong: 'rgba(15,23,42,0.18)',
        accentSky: '#0EA5E9',
        accentViolet: '#8B5CF6',
        accentEmerald: '#10B981',
        accentAmber: '#F59E0B',
        accentPink: '#EC4899',
        codeBg: '#0F172A',
        codeFg: '#E2E8F0',
    },
    dark: {
        surfacePrimary: '#020617',
        surfaceAlt: '#0F172A',
        surfaceCard: '#111827',
        surfaceMuted: '#1E293B',
        surfaceInverse: '#FFFFFF',
        textPrimary: '#F1F5F9',
        textSecondary: '#CBD5F5',
        textMuted: '#94A3B8',
        textOnAccent: '#0F172A',
        borderSubtle: 'rgba(148,163,184,0.2)',
        borderStrong: 'rgba(148,163,184,0.35)',
        accentSky: '#38BDF8',
        accentViolet: '#C084FC',
        accentEmerald: '#34D399',
        accentAmber: '#FBBF24',
        accentPink: '#F472B6',
        codeBg: '#0F172A',
        codeFg: '#E2E8F0',
    },
} as const;

export type ThemeTokens = typeof corePalette.light;

export function getThemeTokens(theme: Theme): ThemeTokens {
    return <ThemeTokens>corePalette[theme];
}

export function useThemeTokens(theme: Theme) {
    return useMemo(() => corePalette[theme], [theme]);
}

